import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  Upload: any,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Mutation = {
   __typename?: 'Mutation',
  _?: Maybe<Scalars['Boolean']>,
  createPlaylist: Playlist,
  updatePlaylistInfo?: Maybe<Playlist>,
  addPlaylistSongs: Scalars['Boolean'],
  removePlaylistSongs: Scalars['Boolean'],
  deletePlaylist: Scalars['Boolean'],
  createUser: User,
  deleteUser: Scalars['Boolean'],
};


export type MutationCreatePlaylistArgs = {
  playlist_title: Scalars['String'],
  playlist_description?: Maybe<Scalars['String']>
};


export type MutationUpdatePlaylistInfoArgs = {
  playlist_id: Scalars['ID'],
  playlist_title?: Maybe<Scalars['String']>,
  playlist_description?: Maybe<Scalars['String']>,
  playlist_image?: Maybe<Scalars['String']>
};


export type MutationAddPlaylistSongsArgs = {
  playlist_id: Scalars['ID'],
  song_ids: Array<Maybe<Scalars['ID']>>
};


export type MutationRemovePlaylistSongsArgs = {
  playlist_id: Scalars['ID'],
  song_ids: Array<Maybe<Scalars['ID']>>
};


export type MutationDeletePlaylistArgs = {
  playlist_id: Scalars['ID']
};


export type MutationCreateUserArgs = {
  user_id: Scalars['String'],
  user_firstName: Scalars['String'],
  user_lastName: Scalars['String'],
  user_email: Scalars['String'],
  user_password: Scalars['String'],
  user_favourites?: Maybe<Array<Maybe<Scalars['ID']>>>,
  user_following?: Maybe<Array<Maybe<Scalars['ID']>>>,
  user_recentlyPlayed?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']
};

export type Playlist = {
   __typename?: 'Playlist',
  playlist_id?: Maybe<Scalars['ID']>,
  playlist_title?: Maybe<Scalars['String']>,
  playlist_description?: Maybe<Scalars['String']>,
  playlist_image?: Maybe<Scalars['String']>,
  playlist_songs?: Maybe<Array<Maybe<Scalars['ID']>>>,
  playlist_createdAt?: Maybe<Scalars['Date']>,
  playlist_updatedAt?: Maybe<Scalars['Date']>,
};

export type Query = {
   __typename?: 'Query',
  _?: Maybe<Scalars['Boolean']>,
  playlists?: Maybe<Array<Maybe<Playlist>>>,
  playlistsByIds?: Maybe<Array<Maybe<Playlist>>>,
  playlistsByUserId?: Maybe<Array<Maybe<Playlist>>>,
  searchPlaylists?: Maybe<Array<Maybe<Playlist>>>,
  users?: Maybe<Array<Maybe<User>>>,
  userById?: Maybe<User>,
  userByIdWithPlaylists?: Maybe<UserWithPLaylists>,
  searchUsers?: Maybe<Array<Maybe<User>>>,
};


export type QueryPlaylistsByIdsArgs = {
  ids: Array<Maybe<Scalars['ID']>>
};


export type QueryPlaylistsByUserIdArgs = {
  userId: Scalars['String']
};


export type QuerySearchPlaylistsArgs = {
  query: Scalars['String']
};


export type QueryUserByIdArgs = {
  user_id: Scalars['String']
};


export type QueryUserByIdWithPlaylistsArgs = {
  user_id: Scalars['String']
};


export type QuerySearchUsersArgs = {
  query: Scalars['String']
};

export type Subscription = {
   __typename?: 'Subscription',
  _?: Maybe<Scalars['Boolean']>,
};


export type User = {
   __typename?: 'User',
  user_id?: Maybe<Scalars['String']>,
  user_firstName?: Maybe<Scalars['String']>,
  user_lastName?: Maybe<Scalars['String']>,
  user_email?: Maybe<Scalars['String']>,
  user_password?: Maybe<Scalars['String']>,
  user_favourites?: Maybe<Array<Maybe<Scalars['ID']>>>,
  user_following?: Maybe<Array<Maybe<Scalars['ID']>>>,
  user_recentlyPlayed?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type UserWithPLaylists = {
   __typename?: 'UserWithPLaylists',
  user_id?: Maybe<Scalars['String']>,
  user_firstName?: Maybe<Scalars['String']>,
  user_lastName?: Maybe<Scalars['String']>,
  user_email?: Maybe<Scalars['String']>,
  user_password?: Maybe<Scalars['String']>,
  user_favourites?: Maybe<Array<Maybe<Scalars['ID']>>>,
  user_following?: Maybe<Array<Maybe<Scalars['ID']>>>,
  user_recentlyPlayed?: Maybe<Array<Maybe<Scalars['ID']>>>,
  user_playlists?: Maybe<Array<Maybe<Playlist>>>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
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
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn = (obj: any, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Playlist: ResolverTypeWrapper<Playlist>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  User: ResolverTypeWrapper<User>,
  UserWithPLaylists: ResolverTypeWrapper<UserWithPLaylists>,
  Mutation: ResolverTypeWrapper<{}>,
  Subscription: ResolverTypeWrapper<{}>,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Boolean: Scalars['Boolean'],
  Playlist: Playlist,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Date: Scalars['Date'],
  User: User,
  UserWithPLaylists: UserWithPLaylists,
  Mutation: {},
  Subscription: {},
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  createPlaylist?: Resolver<ResolversTypes['Playlist'], ParentType, ContextType, RequireFields<MutationCreatePlaylistArgs, 'playlist_title'>>,
  updatePlaylistInfo?: Resolver<Maybe<ResolversTypes['Playlist']>, ParentType, ContextType, RequireFields<MutationUpdatePlaylistInfoArgs, 'playlist_id'>>,
  addPlaylistSongs?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAddPlaylistSongsArgs, 'playlist_id' | 'song_ids'>>,
  removePlaylistSongs?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemovePlaylistSongsArgs, 'playlist_id' | 'song_ids'>>,
  deletePlaylist?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePlaylistArgs, 'playlist_id'>>,
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'user_id' | 'user_firstName' | 'user_lastName' | 'user_email' | 'user_password'>>,
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>,
};

export type PlaylistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Playlist'] = ResolversParentTypes['Playlist']> = {
  playlist_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  playlist_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  playlist_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  playlist_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  playlist_songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  playlist_createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  playlist_updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  playlists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType>,
  playlistsByIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType, RequireFields<QueryPlaylistsByIdsArgs, 'ids'>>,
  playlistsByUserId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType, RequireFields<QueryPlaylistsByUserIdArgs, 'userId'>>,
  searchPlaylists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType, RequireFields<QuerySearchPlaylistsArgs, 'query'>>,
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
  userById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByIdArgs, 'user_id'>>,
  userByIdWithPlaylists?: Resolver<Maybe<ResolversTypes['UserWithPLaylists']>, ParentType, ContextType, RequireFields<QueryUserByIdWithPlaylistsArgs, 'user_id'>>,
  searchUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QuerySearchUsersArgs, 'query'>>,
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _?: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, "_", ParentType, ContextType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user_firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user_lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user_password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user_favourites?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  user_following?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  user_recentlyPlayed?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type UserWithPLaylistsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserWithPLaylists'] = ResolversParentTypes['UserWithPLaylists']> = {
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user_firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user_lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user_password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user_favourites?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  user_following?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  user_recentlyPlayed?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  user_playlists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  Playlist?: PlaylistResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
  UserWithPLaylists?: UserWithPLaylistsResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
