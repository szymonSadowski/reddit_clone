import { UserResolver } from "./resolvers/user";
import { PostResolver } from "./resolvers/post";
import { HelloResolver } from "./resolvers/hello";
import { COOKIE_NAME, __prod__ } from "./constants";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import "reflect-metadata";
import Redis from "ioredis";
import session from "express-session";
import cors from "cors";
import { createConnection } from "typeorm";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import path from 'path';
import { Upvote } from "./entities/Upvote";

const main = async () => {
  // sendEmail('szymon.ssadows@gmail.com', 'ubongo');
  const conn = await createConnection({
    type: "postgres",
    database: "redditclone",
    username: "postgres",
    password: "postgres",
    logging: true,
    synchronize: true, // dev option
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [Post, User, Upvote],
  });
  conn.runMigrations();
  // await Post.delete({})
  const app = express();

  const RedisStore = require("connect-redis")(session);
  const redis = new Redis();
  redis.get;
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
 
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        sameSite: "lax",
        secure: __prod__,
      },
      saveUninitialized: false,
      secret: "dasdasdasfczxq",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false,
    }),

    context: ({ req, res }) => ({ req, res, redis }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.log(err);
});
