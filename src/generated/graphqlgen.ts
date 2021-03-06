// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { Post } from "./prisma-client";
import { Context } from "../types";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsFilterPosts {
    searchString: string;
  }

  export interface ArgsPost {
    id: string;
  }

  export type FeedResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Post[] | Promise<Post[]>;

  export type FilterPostsResolver = (
    parent: undefined,
    args: ArgsFilterPosts,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Post[] | Promise<Post[]>;

  export type PostResolver = (
    parent: undefined,
    args: ArgsPost,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Post | null | Promise<Post | null>;

  export interface Type {
    feed: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Post[] | Promise<Post[]>;

    filterPosts: (
      parent: undefined,
      args: ArgsFilterPosts,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Post[] | Promise<Post[]>;

    post: (
      parent: undefined,
      args: ArgsPost,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Post | null | Promise<Post | null>;
  }
}

export namespace PostResolvers {
  export const defaultResolvers = {
    id: (parent: Post) => parent.id,
    createdAt: (parent: Post) => parent.createdAt,
    updatedAt: (parent: Post) => parent.updatedAt,
    published: (parent: Post) => parent.published,
    title: (parent: Post) => parent.title,
    content: (parent: Post) =>
      parent.content === undefined ? null : parent.content
  };

  export type IdResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PublishedResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type TitleResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ContentResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type {
    id: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    createdAt: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    updatedAt: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    published: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;

    title: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    content: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsCreateDraft {
    title: string;
    content: string;
  }

  export interface ArgsDeletePost {
    id: string;
  }

  export interface ArgsPublish {
    id: string;
  }

  export type CreateDraftResolver = (
    parent: undefined,
    args: ArgsCreateDraft,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Post | Promise<Post>;

  export type DeletePostResolver = (
    parent: undefined,
    args: ArgsDeletePost,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Post | null | Promise<Post | null>;

  export type PublishResolver = (
    parent: undefined,
    args: ArgsPublish,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Post | null | Promise<Post | null>;

  export interface Type {
    createDraft: (
      parent: undefined,
      args: ArgsCreateDraft,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Post | Promise<Post>;

    deletePost: (
      parent: undefined,
      args: ArgsDeletePost,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Post | null | Promise<Post | null>;

    publish: (
      parent: undefined,
      args: ArgsPublish,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Post | null | Promise<Post | null>;
  }
}

export namespace SubscriptionResolvers {
  export const defaultResolvers = {};

  export type PostsResolver = {
    subscribe: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => AsyncIterator<Post | null> | Promise<AsyncIterator<Post | null>>;
    resolve?: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Post | null | Promise<Post | null>;
  };

  export interface Type {
    posts: {
      subscribe: (
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => AsyncIterator<Post | null> | Promise<AsyncIterator<Post | null>>;
      resolve?: (
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Post | null | Promise<Post | null>;
    };
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Post: PostResolvers.Type;
  Mutation: MutationResolvers.Type;
  Subscription: SubscriptionResolvers.Type;
}
