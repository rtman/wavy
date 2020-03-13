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
  title?: Maybe<Scalars['String']>,
  artist_id?: Maybe<Scalars['ID']>,
  song_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  songs?: Maybe<Array<Maybe<Song>>>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
};

export type AlbumWithSongsArtistsJoined = {
   __typename?: 'AlbumWithSongsArtistsJoined',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  artist_id?: Maybe<Scalars['ID']>,
  artists?: Maybe<Array<Maybe<Artist>>>,
  song_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  songs?: Maybe<Array<Maybe<Song>>>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
};

export type AlbumWithSongsArtistsJoinedFormatted = {
   __typename?: 'AlbumWithSongsArtistsJoinedFormatted',
  title?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  description?: Maybe<Scalars['String']>,
  artist_name?: Maybe<Scalars['String']>,
  artist_id?: Maybe<Scalars['String']>,
  artist_image?: Maybe<Scalars['String']>,
  songs?: Maybe<Array<Maybe<Song>>>,
};

export type Artist = {
   __typename?: 'Artist',
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  album_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  song_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type ArtistWithSongsAlbumsJoinedFormatted = {
   __typename?: 'ArtistWithSongsAlbumsJoinedFormatted',
  name?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  description?: Maybe<Scalars['String']>,
  albums?: Maybe<Array<Maybe<Album>>>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Mutation = {
   __typename?: 'Mutation',
  _?: Maybe<Scalars['Boolean']>,
  createNewArtist: Artist,
  deleteArtist: Scalars['Boolean'],
  createNewAlbum: Album,
  deleteAlbum: Scalars['Boolean'],
  createPlaylist: Playlist,
  deletePlaylist: Scalars['Boolean'],
  createNewSong: Song,
  updateSongTitle: Song,
  deleteSong: Scalars['Boolean'],
  createUser: User,
  deleteUser: Scalars['Boolean'],
};


export type MutationCreateNewArtistArgs = {
  name: Scalars['String'],
  album_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  song_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  image?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>
};


export type MutationDeleteArtistArgs = {
  id: Scalars['ID']
};


export type MutationCreateNewAlbumArgs = {
  title: Scalars['String'],
  artist_id: Scalars['ID'],
  image: Scalars['String']
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID']
};


export type MutationCreatePlaylistArgs = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  user_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  songs?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type MutationDeletePlaylistArgs = {
  id: Scalars['ID']
};


export type MutationCreateNewSongArgs = {
  title: Scalars['String'],
  artist_id: Scalars['ID'],
  album_id: Scalars['ID'],
  genres?: Maybe<Array<Scalars['String']>>,
  url: Scalars['String'],
  image: Scalars['String'],
  date: Scalars['Date']
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
  password: Scalars['String'],
  favourites?: Maybe<Array<Maybe<Scalars['ID']>>>,
  following?: Maybe<Array<Maybe<Scalars['ID']>>>,
  recentlyPlayed?: Maybe<Array<Maybe<Scalars['ID']>>>,
  playlists?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']
};

export type Playlist = {
   __typename?: 'Playlist',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  user_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  songs?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type PlaylistWithSongsFormatted = {
   __typename?: 'PlaylistWithSongsFormatted',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  user_id?: Maybe<Array<Maybe<Scalars['ID']>>>,
  songs?: Maybe<Array<Maybe<Song>>>,
};

export type Query = {
   __typename?: 'Query',
  _?: Maybe<Scalars['Boolean']>,
  artists?: Maybe<Array<Maybe<Artist>>>,
  artistById?: Maybe<Artist>,
  artistWithSongsAlbumsJoined?: Maybe<ArtistWithSongsAlbumsJoinedFormatted>,
  searchArtists?: Maybe<Array<Maybe<Artist>>>,
  albums?: Maybe<Array<Maybe<Album>>>,
  albumById?: Maybe<Album>,
  albumWithSongsArtistsJoined?: Maybe<AlbumWithSongsArtistsJoinedFormatted>,
  searchAlbums?: Maybe<Array<Maybe<Album>>>,
  playlists?: Maybe<Array<Maybe<Playlist>>>,
  playlistsById?: Maybe<Array<Maybe<Playlist>>>,
  playlistsByIdWithSongs?: Maybe<PlaylistWithSongsFormatted>,
  searchPlaylists?: Maybe<Array<Maybe<Playlist>>>,
  songs?: Maybe<Array<Maybe<Song>>>,
  songById?: Maybe<Song>,
  songsByIdWithAlbumArtistsJoined?: Maybe<Array<Maybe<Song>>>,
  searchSongs?: Maybe<Array<Maybe<Song>>>,
  users?: Maybe<Array<Maybe<User>>>,
  userById?: Maybe<User>,
  searchUsers?: Maybe<Array<Maybe<User>>>,
};


export type QueryArtistByIdArgs = {
  id: Scalars['ID']
};


export type QueryArtistWithSongsAlbumsJoinedArgs = {
  id: Scalars['ID']
};


export type QuerySearchArtistsArgs = {
  query: Scalars['String']
};


export type QueryAlbumByIdArgs = {
  id: Scalars['ID']
};


export type QueryAlbumWithSongsArtistsJoinedArgs = {
  id: Scalars['ID']
};


export type QuerySearchAlbumsArgs = {
  query: Scalars['String']
};


export type QueryPlaylistsByIdArgs = {
  ids: Array<Maybe<Scalars['String']>>
};


export type QueryPlaylistsByIdWithSongsArgs = {
  ids: Array<Maybe<Scalars['ID']>>
};


export type QuerySearchPlaylistsArgs = {
  query: Scalars['String']
};


export type QuerySongByIdArgs = {
  id: Scalars['ID']
};


export type QuerySongsByIdWithAlbumArtistsJoinedArgs = {
  ids: Array<Maybe<Scalars['ID']>>
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
  title?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  artist_name?: Maybe<Scalars['String']>,
  artist_id?: Maybe<Scalars['ID']>,
  album_id?: Maybe<Scalars['ID']>,
  album_title?: Maybe<Scalars['String']>,
  genres?: Maybe<Array<Maybe<Scalars['String']>>>,
  date?: Maybe<Scalars['Date']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
};

export type SongsWithAlbumArtistsJoined = {
   __typename?: 'SongsWithAlbumArtistsJoined',
  song_title?: Maybe<Scalars['String']>,
  song_url?: Maybe<Scalars['String']>,
  song_image?: Maybe<Scalars['String']>,
  song_date?: Maybe<Scalars['Date']>,
  song_createdAt?: Maybe<Scalars['Date']>,
  song_updatedAt?: Maybe<Scalars['Date']>,
  song_id?: Maybe<Scalars['ID']>,
  song_genres?: Maybe<Array<Maybe<Scalars['String']>>>,
  artist_name?: Maybe<Scalars['String']>,
  artist_image?: Maybe<Scalars['String']>,
  artist_id?: Maybe<Scalars['ID']>,
  artist_description?: Maybe<Scalars['String']>,
  artist_createdAt?: Maybe<Scalars['Date']>,
  artist_updatedAt?: Maybe<Scalars['Date']>,
  album_id?: Maybe<Scalars['ID']>,
  album_title?: Maybe<Scalars['String']>,
  album_image?: Maybe<Scalars['String']>,
  album_description?: Maybe<Scalars['String']>,
  album_createdAt?: Maybe<Scalars['Date']>,
  album_updatedAt?: Maybe<Scalars['Date']>,
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
  favourites?: Maybe<Array<Maybe<Scalars['ID']>>>,
  following?: Maybe<Array<Maybe<Scalars['ID']>>>,
  recentlyPlayed?: Maybe<Array<Maybe<Scalars['ID']>>>,
  playlists?: Maybe<Array<Maybe<Scalars['ID']>>>,
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
  String: ResolverTypeWrapper<Scalars['String']>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  ArtistWithSongsAlbumsJoinedFormatted: ResolverTypeWrapper<ArtistWithSongsAlbumsJoinedFormatted>,
  Album: ResolverTypeWrapper<Album>,
  Song: ResolverTypeWrapper<Song>,
  AlbumWithSongsArtistsJoinedFormatted: ResolverTypeWrapper<AlbumWithSongsArtistsJoinedFormatted>,
  Playlist: ResolverTypeWrapper<Playlist>,
  PlaylistWithSongsFormatted: ResolverTypeWrapper<PlaylistWithSongsFormatted>,
  User: ResolverTypeWrapper<User>,
  Mutation: ResolverTypeWrapper<{}>,
  Subscription: ResolverTypeWrapper<{}>,
  SongsWithAlbumArtistsJoined: ResolverTypeWrapper<SongsWithAlbumArtistsJoined>,
  AlbumWithSongsArtistsJoined: ResolverTypeWrapper<AlbumWithSongsArtistsJoined>,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Boolean: Scalars['Boolean'],
  Artist: Artist,
  String: Scalars['String'],
  ID: Scalars['ID'],
  Date: Scalars['Date'],
  ArtistWithSongsAlbumsJoinedFormatted: ArtistWithSongsAlbumsJoinedFormatted,
  Album: Album,
  Song: Song,
  AlbumWithSongsArtistsJoinedFormatted: AlbumWithSongsArtistsJoinedFormatted,
  Playlist: Playlist,
  PlaylistWithSongsFormatted: PlaylistWithSongsFormatted,
  User: User,
  Mutation: {},
  Subscription: {},
  SongsWithAlbumArtistsJoined: SongsWithAlbumArtistsJoined,
  AlbumWithSongsArtistsJoined: AlbumWithSongsArtistsJoined,
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  song_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type AlbumWithSongsArtistsJoinedResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlbumWithSongsArtistsJoined'] = ResolversParentTypes['AlbumWithSongsArtistsJoined']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  artist_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>,
  song_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type AlbumWithSongsArtistsJoinedFormattedResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlbumWithSongsArtistsJoinedFormatted'] = ResolversParentTypes['AlbumWithSongsArtistsJoinedFormatted']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  album_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  song_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type ArtistWithSongsAlbumsJoinedFormattedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistWithSongsAlbumsJoinedFormatted'] = ResolversParentTypes['ArtistWithSongsAlbumsJoinedFormatted']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  albums?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  createNewArtist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType, RequireFields<MutationCreateNewArtistArgs, 'name'>>,
  deleteArtist?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteArtistArgs, 'id'>>,
  createNewAlbum?: Resolver<ResolversTypes['Album'], ParentType, ContextType, RequireFields<MutationCreateNewAlbumArgs, 'title' | 'artist_id' | 'image'>>,
  deleteAlbum?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteAlbumArgs, 'id'>>,
  createPlaylist?: Resolver<ResolversTypes['Playlist'], ParentType, ContextType, MutationCreatePlaylistArgs>,
  deletePlaylist?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePlaylistArgs, 'id'>>,
  createNewSong?: Resolver<ResolversTypes['Song'], ParentType, ContextType, RequireFields<MutationCreateNewSongArgs, 'title' | 'artist_id' | 'album_id' | 'url' | 'image' | 'date'>>,
  updateSongTitle?: Resolver<ResolversTypes['Song'], ParentType, ContextType, RequireFields<MutationUpdateSongTitleArgs, 'id' | 'title'>>,
  deleteSong?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteSongArgs, 'id'>>,
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'id' | 'firstName' | 'lastName' | 'email' | 'password'>>,
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>,
};

export type PlaylistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Playlist'] = ResolversParentTypes['Playlist']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type PlaylistWithSongsFormattedResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaylistWithSongsFormatted'] = ResolversParentTypes['PlaylistWithSongsFormatted']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user_id?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>,
  artistById?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType, RequireFields<QueryArtistByIdArgs, 'id'>>,
  artistWithSongsAlbumsJoined?: Resolver<Maybe<ResolversTypes['ArtistWithSongsAlbumsJoinedFormatted']>, ParentType, ContextType, RequireFields<QueryArtistWithSongsAlbumsJoinedArgs, 'id'>>,
  searchArtists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType, RequireFields<QuerySearchArtistsArgs, 'query'>>,
  albums?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType>,
  albumById?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<QueryAlbumByIdArgs, 'id'>>,
  albumWithSongsArtistsJoined?: Resolver<Maybe<ResolversTypes['AlbumWithSongsArtistsJoinedFormatted']>, ParentType, ContextType, RequireFields<QueryAlbumWithSongsArtistsJoinedArgs, 'id'>>,
  searchAlbums?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType, RequireFields<QuerySearchAlbumsArgs, 'query'>>,
  playlists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType>,
  playlistsById?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType, RequireFields<QueryPlaylistsByIdArgs, 'ids'>>,
  playlistsByIdWithSongs?: Resolver<Maybe<ResolversTypes['PlaylistWithSongsFormatted']>, ParentType, ContextType, RequireFields<QueryPlaylistsByIdWithSongsArgs, 'ids'>>,
  searchPlaylists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType, RequireFields<QuerySearchPlaylistsArgs, 'query'>>,
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  songById?: Resolver<Maybe<ResolversTypes['Song']>, ParentType, ContextType, RequireFields<QuerySongByIdArgs, 'id'>>,
  songsByIdWithAlbumArtistsJoined?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType, RequireFields<QuerySongsByIdWithAlbumArtistsJoinedArgs, 'ids'>>,
  searchSongs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType, RequireFields<QuerySearchSongsArgs, 'query'>>,
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
  userById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByIdArgs, 'id'>>,
  searchUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QuerySearchUsersArgs, 'query'>>,
};

export type SongResolvers<ContextType = any, ParentType extends ResolversParentTypes['Song'] = ResolversParentTypes['Song']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  album_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  album_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type SongsWithAlbumArtistsJoinedResolvers<ContextType = any, ParentType extends ResolversParentTypes['SongsWithAlbumArtistsJoined'] = ResolversParentTypes['SongsWithAlbumArtistsJoined']> = {
  song_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  song_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  song_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  song_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  song_createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  song_updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  song_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  song_genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  artist_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  artist_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  artist_updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  album_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  album_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  album_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  album_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  album_createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  album_updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
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
  favourites?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  recentlyPlayed?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  playlists?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>,
  AlbumWithSongsArtistsJoined?: AlbumWithSongsArtistsJoinedResolvers<ContextType>,
  AlbumWithSongsArtistsJoinedFormatted?: AlbumWithSongsArtistsJoinedFormattedResolvers<ContextType>,
  Artist?: ArtistResolvers<ContextType>,
  ArtistWithSongsAlbumsJoinedFormatted?: ArtistWithSongsAlbumsJoinedFormattedResolvers<ContextType>,
  Date?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  Playlist?: PlaylistResolvers<ContextType>,
  PlaylistWithSongsFormatted?: PlaylistWithSongsFormattedResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Song?: SongResolvers<ContextType>,
  SongsWithAlbumArtistsJoined?: SongsWithAlbumArtistsJoinedResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
