import { MyContext } from './../types';
import { Post } from './../entities/Post';
import { Resolver, Query, ObjectType, Ctx, Arg, Int, Mutation } from 'type-graphql';
import 'reflect-metadata'


@Resolver()
export class PostResolver {
    @Query(() => [Post])
    posts(
        @Ctx() { em }: MyContext
        ): Promise<Post[]>
    {
        return em.find(Post, {})
    }

    @Query(() => Post, {nullable: true})
    post(
        @Arg('id', () =>  Int) id: number,
        @Ctx() { em }: MyContext
        ): Promise<Post | null>
    {
        return em.findOne(Post, { id });
    }

    @Mutation(() => Post)
    async createPost(
        @Arg('title', () =>  String) title: string,
        @Ctx() { em }: MyContext
        ): Promise<Post | null>
    {
        const post = em.create(Post, {title});
        await em.persistAndFlush(post);
        return post;
    }

    @Mutation(() => Post, { nullable: true})
    async updatePost(
        @Arg('id') id: number,
        @Arg('title', () =>  String, { nullable:true }) title: string,
        @Ctx() { em }: MyContext
        ): Promise<Post | null>
    {
        const post = await em.findOne(Post, { id });
        if (!post) {
            return null
        }
        if (title !== 'undefined') {
            post.title = title;
            await em.persistAndFlush(post)
        }
        return post;
    }

    @Mutation(() => Boolean)
    async deletePost(
        @Arg('id') id: number,
        @Ctx() { em }: MyContext
        ): Promise<boolean>
    {
        await em.nativeDelete(Post, {id})
        return true;
    }
}