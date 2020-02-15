import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  {[P in K]-?: NonNullable<T[P]>};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Upload: any;
};

export type Artist = {
  __typename?: 'Artist';
  name?: Maybe<Scalars['String']>;
  albums?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createNewSong: Song;
  updateSongTitle: Song;
  deleteSong: Scalars['Boolean'];
  createNewArtist: Artist;
  deleteArtist: Scalars['Boolean'];
};

export type MutationCreateNewSongArgs = {
  title: Scalars['String'];
  artist: Scalars['String'];
  album: Scalars['String'];
  genre: Scalars['String'];
  url: Scalars['String'];
  artwork: Scalars['String'];
  duration: Scalars['Int'];
  date: Scalars['Date'];
};

export type MutationUpdateSongTitleArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type MutationDeleteSongArgs = {
  id: Scalars['ID'];
};

export type MutationCreateNewArtistArgs = {
  name: Scalars['String'];
  description: Scalars['String'];
  albums: Maybe<Array<Scalars['String']>>;
};

export type MutationDeleteArtistArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  songs?: Maybe<Array<Maybe<Song>>>;
  song?: Maybe<Song>;
  searchSongs?: Maybe<Array<Maybe<Song>>>;
  searchSongsWithArtists?: Maybe<Array<Maybe<Song & Artist>>>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  artist?: Maybe<Artist>;
  searchArtists?: Maybe<Array<Maybe<Artist>>>;
  searchArtistsWithSongs?: Maybe<Array<Maybe<Song & Artist>>>;
};

export type QuerySongArgs = {
  id: Scalars['ID'];
};

export type QuerySearchSongsArgs = {
  query: Scalars['String'];
};

export type QueryArtistArgs = {
  id: Scalars['ID'];
};

export type QuerySearchArtistsArgs = {
  query: Scalars['String'];
};

export type Song = {
  __typename?: 'Song';
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  album?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  artwork?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    {[key in TKey]: TResult},
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    {[key in TKey]: TResult},
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes>;

export type isTypeOfResolverFn = (
  obj: any,
  info: GraphQLResolveInfo,
) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Song: ResolverTypeWrapper<Song>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Artist: ResolverTypeWrapper<Artist>;
  Mutation: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Boolean: Scalars['Boolean'];
  Song: Song;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Date: Scalars['Date'];
  ID: Scalars['ID'];
  Artist: Artist;
  Mutation: {};
  Subscription: {};
  CacheControlScope: CacheControlScope;
  Upload: Scalars['Upload'];
};

export type ArtistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn;
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createNewSong?: Resolver<
    ResolversTypes['Song'],
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateNewSongArgs,
      | 'title'
      | 'artist'
      | 'album'
      | 'genre'
      | 'url'
      | 'artwork'
      | 'duration'
      | 'date'
    >
  >;
  updateSongTitle?: Resolver<
    ResolversTypes['Song'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSongTitleArgs, 'id' | 'title'>
  >;
  deleteSong?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSongArgs, 'id'>
  >;
  createNewArtist?: Resolver<
    ResolversTypes['Artist'],
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateNewArtistArgs,
      'name' | 'description' | 'albums'
    >
  >;
  deleteArtist?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteArtistArgs, 'id'>
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  songs?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Song']>>>,
    ParentType,
    ContextType
  >;
  song?: Resolver<
    Maybe<ResolversTypes['Song']>,
    ParentType,
    ContextType,
    RequireFields<QuerySongArgs, 'id'>
  >;
  searchSongs?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Song']>>>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchSongsArgs, 'query'>
  >;
  searchSongsWithArtists?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Song']>>>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchSongsArgs, 'query'>
  >;
  artists?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Artist']>>>,
    ParentType,
    ContextType
  >;
  artist?: Resolver<
    Maybe<ResolversTypes['Artist']>,
    ParentType,
    ContextType,
    RequireFields<QueryArtistArgs, 'id'>
  >;
  searchArtists?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Artist']>>>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchArtistsArgs, 'query'>
  >;
  searchArtistsWithSongs?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Artist']>>>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchArtistsArgs, 'query'>
  >;
};

export type SongResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Song'] = ResolversParentTypes['Song']
> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  album?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  artwork?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = {
  _?: SubscriptionResolver<
    Maybe<ResolversTypes['Boolean']>,
    '_',
    ParentType,
    ContextType
  >;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  Artist?: ArtistResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Song?: SongResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
