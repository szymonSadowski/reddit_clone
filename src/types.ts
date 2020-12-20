import { Request, Response } from 'express';
import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";




export type MyContext= {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
    // @ts-ignore
    req: Request & { session: Express.Session };
    res: Response;
}