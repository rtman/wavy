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
  id?: Maybe<Scalars['ID']>,
  artistId?: Maybe<Scalars['ID']>,
  artist?: Maybe<Artist>,
  title?: Maybe<Scalars['String']>,
  songs?: Maybe<Array<Maybe<Song>>>,
  image?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
};

export type Artist = {
   __typename?: 'Artist',
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  albums?: Maybe<Array<Maybe<Album>>>,
  songs?: Maybe<Array<Maybe<Song>>>,
  image?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  usersFollowing?: Maybe<Array<Maybe<User>>>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Mutation = {
   __typename?: 'Mutation',
  _?: Maybe<Scalars['Boolean']>,
  createNewArtist: Artist,
  deleteArtist: Scalars['Int'],
  createNewAlbum: Album,
  deleteAlbum: Scalars['Int'],
  createPlaylist: Playlist,
  updatePlaylistInfo?: Maybe<Playlist>,
  addPlaylistSongs: Scalars['Boolean'],
  removePlaylistSongs: Scalars['Boolean'],
  deletePlaylist: Scalars['Int'],
  createNewSong: Song,
  updateSongTitle: Song,
  deleteSong: Scalars['Int'],
  createUser: User,
  updateFollowing: Scalars['Boolean'],
  updateFavourites: Scalars['Boolean'],
  updatePlaylists: Scalars['Boolean'],
  updateRecentlyPlayed: Scalars['Boolean'],
  deleteUser: Scalars['Int'],
};


export type MutationCreateNewArtistArgs = {
  name: Scalars['String'],
  image?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>
};


export type MutationDeleteArtistArgs = {
  id: Scalars['ID']
};


export type MutationCreateNewAlbumArgs = {
  title: Scalars['String'],
  artistId: Scalars['ID']
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID']
};


export type MutationCreatePlaylistArgs = {
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>
};


export type MutationUpdatePlaylistInfoArgs = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>
};


export type MutationAddPlaylistSongsArgs = {
  id: Scalars['ID'],
  songIds: Array<Maybe<Scalars['ID']>>
};


export type MutationRemovePlaylistSongsArgs = {
  id: Scalars['ID'],
  songIds: Array<Maybe<Scalars['ID']>>
};


export type MutationDeletePlaylistArgs = {
  id: Scalars['ID']
};


export type MutationCreateNewSongArgs = {
  title: Scalars['String'],
  artistId: Scalars['ID'],
  albumId: Scalars['ID'],
  genres?: Maybe<Array<Scalars['String']>>,
  url: Scalars['String'],
  image: Scalars['String'],
  releaseDate: Scalars['Date']
};


export type MutationUpdateSongTitleArgs = {
  id: Scalars['ID'],
  title: Scalars['String']
};


export type MutationDeleteSongArgs = {
  id: Scalars['ID']
};


export type MutationCreateUserArgs = {
  id: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
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
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  songs?: Maybe<Array<Maybe<Song>>>,
  users?: Maybe<Array<Maybe<User>>>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
};

export type Query = {
   __typename?: 'Query',
  _?: Maybe<Scalars['Boolean']>,
  artists?: Maybe<Array<Maybe<Artist>>>,
  artistById?: Maybe<Artist>,
  artistsById?: Maybe<Array<Maybe<Artist>>>,
  searchArtists?: Maybe<Array<Maybe<Artist>>>,
  albums?: Maybe<Array<Maybe<Album>>>,
  albumById?: Maybe<Album>,
  searchAlbums?: Maybe<Array<Maybe<Album>>>,
  playlists?: Maybe<Array<Maybe<Playlist>>>,
  playlistById?: Maybe<Playlist>,
  playlistsByUserId?: Maybe<Array<Maybe<Playlist>>>,
  searchPlaylists?: Maybe<Array<Maybe<Playlist>>>,
  songs?: Maybe<Array<Maybe<Song>>>,
  songById?: Maybe<Song>,
  searchSongs?: Maybe<Array<Maybe<Song>>>,
  users?: Maybe<Array<Maybe<User>>>,
  userById?: Maybe<User>,
  searchUsers?: Maybe<Array<Maybe<User>>>,
};


export type QueryArtistByIdArgs = {
  id: Scalars['ID']
};


export type QueryArtistsByIdArgs = {
  ids: Array<Maybe<Scalars['ID']>>
};


export type QuerySearchArtistsArgs = {
  query: Scalars['String']
};


export type QueryAlbumByIdArgs = {
  id: Scalars['ID']
};


export type QuerySearchAlbumsArgs = {
  query: Scalars['String']
};


export type QueryPlaylistByIdArgs = {
  id: Scalars['ID']
};


export type QueryPlaylistsByUserIdArgs = {
  userId: Scalars['String']
};


export type QuerySearchPlaylistsArgs = {
  query: Scalars['String']
};


export type QuerySongByIdArgs = {
  id: Scalars['ID']
};


export type QuerySearchSongsArgs = {
  query: Scalars['String']
};


export type QueryUserByIdArgs = {
  id: Scalars['String']
};


export type QuerySearchUsersArgs = {
  query: Scalars['String']
};

export type Song = {
   __typename?: 'Song',
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  artistId?: Maybe<Scalars['ID']>,
  artist?: Maybe<Artist>,
  usersFavourited?: Maybe<Array<Maybe<User>>>,
  supportingArtists?: Maybe<Array<Maybe<Artist>>>,
  playlists?: Maybe<Array<Maybe<Playlist>>>,
  albumId?: Maybe<Scalars['ID']>,
  album?: Maybe<Album>,
  genres?: Maybe<Array<Maybe<Scalars['String']>>>,
  releaseDate?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
};

export type Subscription = {
   __typename?: 'Subscription',
  _?: Maybe<Scalars['Boolean']>,
};


export type User = {
   __typename?: 'User',
  id?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  favourites?: Maybe<Array<Maybe<Song>>>,
  following?: Maybe<Array<Maybe<Artist>>>,
  recentlyPlayed?: Maybe<Array<Maybe<Song>>>,
  playlists?: Maybe<Array<Maybe<Playlist>>>,
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
  Artist: ResolverTypeWrapper<Artist>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Album: ResolverTypeWrapper<Album>,
  Song: ResolverTypeWrapper<Song>,
  User: ResolverTypeWrapper<User>,
  Playlist: ResolverTypeWrapper<Playlist>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
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
  Artist: Artist,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Album: Album,
  Song: Song,
  User: User,
  Playlist: Playlist,
  Date: Scalars['Date'],
  Mutation: {},
  Int: Scalars['Int'],
  Subscription: {},
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  artistId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  artist?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  albums?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType>,
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  usersFollowing?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  createNewArtist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType, RequireFields<MutationCreateNewArtistArgs, 'name'>>,
  deleteArtist?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteArtistArgs, 'id'>>,
  createNewAlbum?: Resolver<ResolversTypes['Album'], ParentType, ContextType, RequireFields<MutationCreateNewAlbumArgs, 'title' | 'artistId'>>,
  deleteAlbum?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteAlbumArgs, 'id'>>,
  createPlaylist?: Resolver<ResolversTypes['Playlist'], ParentType, ContextType, RequireFields<MutationCreatePlaylistArgs, 'title'>>,
  updatePlaylistInfo?: Resolver<Maybe<ResolversTypes['Playlist']>, ParentType, ContextType, RequireFields<MutationUpdatePlaylistInfoArgs, 'id'>>,
  addPlaylistSongs?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAddPlaylistSongsArgs, 'id' | 'songIds'>>,
  removePlaylistSongs?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemovePlaylistSongsArgs, 'id' | 'songIds'>>,
  deletePlaylist?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeletePlaylistArgs, 'id'>>,
  createNewSong?: Resolver<ResolversTypes['Song'], ParentType, ContextType, RequireFields<MutationCreateNewSongArgs, 'title' | 'artistId' | 'albumId' | 'url' | 'image' | 'releaseDate'>>,
  updateSongTitle?: Resolver<ResolversTypes['Song'], ParentType, ContextType, RequireFields<MutationUpdateSongTitleArgs, 'id' | 'title'>>,
  deleteSong?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteSongArgs, 'id'>>,
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'id' | 'firstName' | 'lastName' | 'email' | 'password'>>,
  updateFollowing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateFollowingArgs, 'id' | 'artistId'>>,
  updateFavourites?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateFavouritesArgs, 'id' | 'songId'>>,
  updatePlaylists?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdatePlaylistsArgs, 'id' | 'playlistId'>>,
  updateRecentlyPlayed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateRecentlyPlayedArgs, 'id' | 'songId'>>,
  deleteUser?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>,
};

export type PlaylistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Playlist'] = ResolversParentTypes['Playlist']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>,
  artistById?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType, RequireFields<QueryArtistByIdArgs, 'id'>>,
  artistsById?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType, RequireFields<QueryArtistsByIdArgs, 'ids'>>,
  searchArtists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType, RequireFields<QuerySearchArtistsArgs, 'query'>>,
  albums?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType>,
  albumById?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<QueryAlbumByIdArgs, 'id'>>,
  searchAlbums?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType, RequireFields<QuerySearchAlbumsArgs, 'query'>>,
  playlists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType>,
  playlistById?: Resolver<Maybe<ResolversTypes['Playlist']>, ParentType, ContextType, RequireFields<QueryPlaylistByIdArgs, 'id'>>,
  playlistsByUserId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType, RequireFields<QueryPlaylistsByUserIdArgs, 'userId'>>,
  searchPlaylists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType, RequireFields<QuerySearchPlaylistsArgs, 'query'>>,
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  songById?: Resolver<Maybe<ResolversTypes['Song']>, ParentType, ContextType, RequireFields<QuerySongByIdArgs, 'id'>>,
  searchSongs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType, RequireFields<QuerySearchSongsArgs, 'query'>>,
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
  userById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByIdArgs, 'id'>>,
  searchUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QuerySearchUsersArgs, 'query'>>,
};

export type SongResolvers<ContextType = any, ParentType extends ResolversParentTypes['Song'] = ResolversParentTypes['Song']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artistId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  artist?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType>,
  usersFavourited?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
  supportingArtists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>,
  playlists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType>,
  albumId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  album?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType>,
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  releaseDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _?: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, "_", ParentType, ContextType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  favourites?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>,
  recentlyPlayed?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  playlists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType>,
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
