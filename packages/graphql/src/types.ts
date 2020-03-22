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

export type Album = {
   __typename?: 'Album',
  album_id?: Maybe<Scalars['ID']>,
  album_artist_id?: Maybe<Scalars['ID']>,
  album_supporting_artists?: Maybe<Array<Maybe<Artist>>>,
  album_title?: Maybe<Scalars['String']>,
  album_songs?: Maybe<Array<Maybe<Song>>>,
  album_image?: Maybe<Scalars['String']>,
  album_description?: Maybe<Scalars['String']>,
  album_createdAt?: Maybe<Scalars['Date']>,
  album_updatedAt?: Maybe<Scalars['Date']>,
};

export type Artist = {
   __typename?: 'Artist',
  artist_id?: Maybe<Scalars['ID']>,
  artist_name?: Maybe<Scalars['String']>,
  artist_albums?: Maybe<Array<Maybe<Album>>>,
  artist_songs?: Maybe<Array<Maybe<Song>>>,
  artist_song_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  artist_image?: Maybe<Scalars['String']>,
  artist_description?: Maybe<Scalars['String']>,
  artist_createdAt?: Maybe<Scalars['Date']>,
  artist_updatedAt?: Maybe<Scalars['Date']>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Mutation = {
   __typename?: 'Mutation',
  _?: Maybe<Scalars['Boolean']>,
  createUser: User,
  updateFollowing: Scalars['Boolean'],
  updateFavourites: Scalars['Boolean'],
  updatePlaylists: Scalars['Boolean'],
  updateRecentlyPlayed: Scalars['Boolean'],
  deleteUser: Scalars['Int'],
};


export type MutationCreateUserArgs = {
  user_id: Scalars['String'],
  user_firstName: Scalars['String'],
  user_lastName: Scalars['String'],
  user_email: Scalars['String'],
  user_password: Scalars['String']
};


export type MutationUpdateFollowingArgs = {
  id: Scalars['String'],
  artistId: Scalars['ID']
};


export type MutationUpdateFavouritesArgs = {
  id: Scalars['String'],
  songId: Scalars['ID']
};


export type MutationUpdatePlaylistsArgs = {
  id: Scalars['String'],
  playlistId: Scalars['ID']
};


export type MutationUpdateRecentlyPlayedArgs = {
  id: Scalars['String'],
  songId: Scalars['ID']
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
  playlist_songs?: Maybe<Array<Maybe<Song>>>,
  playlist_createdAt?: Maybe<Scalars['Date']>,
  playlist_updatedAt?: Maybe<Scalars['Date']>,
};

export type Query = {
   __typename?: 'Query',
  _?: Maybe<Scalars['Boolean']>,
  users?: Maybe<Array<Maybe<User>>>,
  userById?: Maybe<User>,
  searchUsers?: Maybe<Array<Maybe<User>>>,
};


export type QueryUserByIdArgs = {
  user_id: Scalars['String']
};


export type QuerySearchUsersArgs = {
  query: Scalars['String']
};

export type Song = {
   __typename?: 'Song',
  song_id?: Maybe<Scalars['ID']>,
  song_title?: Maybe<Scalars['String']>,
  song_url?: Maybe<Scalars['String']>,
  song_artist_id?: Maybe<Scalars['ID']>,
  song_supporting_artists?: Maybe<Array<Maybe<Artist>>>,
  song_album_id?: Maybe<Scalars['ID']>,
  song_album?: Maybe<Album>,
  song_genres?: Maybe<Array<Maybe<Scalars['String']>>>,
  song_release_date?: Maybe<Scalars['Date']>,
  song_createdAt?: Maybe<Scalars['Date']>,
  song_updatedAt?: Maybe<Scalars['Date']>,
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
  user_favourites?: Maybe<Array<Maybe<Song>>>,
  user_following?: Maybe<Array<Maybe<Artist>>>,
  user_recentlyPlayed?: Maybe<Array<Maybe<Song>>>,
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
  User: ResolverTypeWrapper<User>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Song: ResolverTypeWrapper<Song>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Artist: ResolverTypeWrapper<Artist>,
  Album: ResolverTypeWrapper<Album>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  Playlist: ResolverTypeWrapper<Playlist>,
  Mutation: ResolverTypeWrapper<{}>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Subscription: ResolverTypeWrapper<{}>,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Boolean: Scalars['Boolean'],
  User: User,
  String: Scalars['String'],
  Song: Song,
  ID: Scalars['ID'],
  Artist: Artist,
  Album: Album,
  Date: Scalars['Date'],
  Playlist: Playlist,
  Mutation: {},
  Int: Scalars['Int'],
  Subscription: {},
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  album_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  album_artist_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  album_supporting_artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>,
  album_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  album_songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  album_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  album_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  album_createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  album_updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  artist_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  artist_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_albums?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType>,
  artist_songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  artist_song_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  artist_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  artist_updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'user_id' | 'user_firstName' | 'user_lastName' | 'user_email' | 'user_password'>>,
  updateFollowing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateFollowingArgs, 'id' | 'artistId'>>,
  updateFavourites?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateFavouritesArgs, 'id' | 'songId'>>,
  updatePlaylists?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdatePlaylistsArgs, 'id' | 'playlistId'>>,
  updateRecentlyPlayed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateRecentlyPlayedArgs, 'id' | 'songId'>>,
  deleteUser?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>,
};

export type PlaylistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Playlist'] = ResolversParentTypes['Playlist']> = {
  playlist_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  playlist_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  playlist_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  playlist_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  playlist_songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  playlist_createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  playlist_updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
  userById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByIdArgs, 'user_id'>>,
  searchUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QuerySearchUsersArgs, 'query'>>,
};

export type SongResolvers<ContextType = any, ParentType extends ResolversParentTypes['Song'] = ResolversParentTypes['Song']> = {
  song_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  song_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  song_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  song_artist_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  song_supporting_artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>,
  song_album_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  song_album?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType>,
  song_genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  song_release_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  song_createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  song_updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
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
  user_favourites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  user_following?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>,
  user_recentlyPlayed?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  user_playlists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>,
  Artist?: ArtistResolvers<ContextType>,
  Date?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  Playlist?: PlaylistResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Song?: SongResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
