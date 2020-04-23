import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AddPlaylistSongs = {
  id: Scalars['String'];
  songIds: Array<Scalars['String']>;
};

export type Album = {
  __typename?: 'Album';
  id: Scalars['ID'];
  artist: Artist;
  title: Scalars['String'];
  songs: Array<Song>;
  image: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Artist = {
  __typename?: 'Artist';
  id: Scalars['ID'];
  name: Scalars['String'];
  albums: Array<Album>;
  songs: Array<Song>;
  image: Scalars['String'];
  description: Scalars['String'];
  usersFollowing?: Maybe<Array<UserArtistFollowing>>;
  supportingArtistOn?: Maybe<Array<SongArtistSupportingArtist>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

/** Create a new album */
export type CreateAlbum = {
  title: Scalars['String'];
  description: Scalars['String'];
  artistId: Scalars['String'];
  image: Scalars['String'];
};

/** Create a new artist */
export type CreateArtist = {
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
};

export type CreatePlaylist = {
  title: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
};

export type CreateSong = {
  title: Scalars['String'];
  artistId: Scalars['String'];
  image: Scalars['String'];
};

/** Create a new user */
export type CreateUserArgs = {
  id: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAlbum: Album;
  deleteAlbum: Album;
  createArtist: Artist;
  deleteArtist: Artist;
  createSong: Song;
  updateSongTitle: Song;
  deleteSong: Song;
  createPlaylist: Playlist;
  updatePlaylistInfo: Playlist;
  addPlaylistSongs: Playlist;
  removePlaylistSongs: Playlist;
  deletePlaylist: Playlist;
  createUser: User;
  updateFollowing: Scalars['Boolean'];
  updateFavourites: User;
  updatePlaylists: User;
  updateRecentlyPlayed: User;
  deleteUser: User;
};

export type MutationCreateAlbumArgs = {
  data: CreateAlbum;
};

export type MutationDeleteAlbumArgs = {
  id: Scalars['String'];
};

export type MutationCreateArtistArgs = {
  data: CreateArtist;
};

export type MutationDeleteArtistArgs = {
  id: Scalars['String'];
};

export type MutationCreateSongArgs = {
  data: CreateSong;
};

export type MutationUpdateSongTitleArgs = {
  data: UpdateSongTitle;
};

export type MutationDeleteSongArgs = {
  id: Scalars['String'];
};

export type MutationCreatePlaylistArgs = {
  data: CreatePlaylist;
};

export type MutationUpdatePlaylistInfoArgs = {
  data: UpdatePlaylistInfo;
};

export type MutationAddPlaylistSongsArgs = {
  data: AddPlaylistSongs;
};

export type MutationRemovePlaylistSongsArgs = {
  data: RemovePlaylistSongs;
};

export type MutationDeletePlaylistArgs = {
  id: Scalars['String'];
};

export type MutationCreateUserArgs = {
  data: CreateUserArgs;
};

export type MutationUpdateFollowingArgs = {
  userId: Scalars['String'];
  artistId: Scalars['ID'];
};

export type MutationUpdateFavouritesArgs = {
  data: UpdateFavouritesArgs;
};

export type MutationUpdatePlaylistsArgs = {
  data: UpdatePlaylistsArgs;
};

export type MutationUpdateRecentlyPlayedArgs = {
  data: UpdateRecentlyPlayedArgs;
};

export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};

export type Playlist = {
  __typename?: 'Playlist';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  songs?: Maybe<Array<SongPlaylist>>;
  users?: Maybe<Array<UserPlaylist>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  albums: Array<Album>;
  albumById: Album;
  searchAlbums: Array<Album>;
  artists: Array<Artist>;
  artistById: Artist;
  artistsById: Array<Artist>;
  searchArtists: Array<Artist>;
  songs: Array<Song>;
  songById: Song;
  songsById: Array<Song>;
  searchSongs: Array<Song>;
  playlists: Array<Playlist>;
  playlistById: Playlist;
  playlistsById: Array<Playlist>;
  playlistsByUserId: Array<Playlist>;
  searchPlaylists: Array<Playlist>;
  userById: User;
};

export type QueryAlbumByIdArgs = {
  id: Scalars['String'];
};

export type QuerySearchAlbumsArgs = {
  query: Scalars['String'];
};

export type QueryArtistByIdArgs = {
  id: Scalars['String'];
};

export type QueryArtistsByIdArgs = {
  ids: Array<Scalars['String']>;
};

export type QuerySearchArtistsArgs = {
  query: Scalars['String'];
};

export type QuerySongByIdArgs = {
  id: Scalars['String'];
};

export type QuerySongsByIdArgs = {
  ids: Array<Scalars['String']>;
};

export type QuerySearchSongsArgs = {
  query: Scalars['String'];
};

export type QueryPlaylistByIdArgs = {
  id: Scalars['String'];
};

export type QueryPlaylistsByIdArgs = {
  ids: Array<Scalars['String']>;
};

export type QueryPlaylistsByUserIdArgs = {
  userId: Scalars['String'];
};

export type QuerySearchPlaylistsArgs = {
  query: Scalars['String'];
};

export type QueryUserByIdArgs = {
  id: Scalars['String'];
};

export type RemovePlaylistSongs = {
  id: Scalars['String'];
  songIds: Array<Scalars['String']>;
};

export type Song = {
  __typename?: 'Song';
  id: Scalars['ID'];
  artistId: Scalars['ID'];
  artist: Artist;
  albumId: Scalars['ID'];
  album: Album;
  title: Scalars['String'];
  url: Scalars['String'];
  image: Scalars['String'];
  releaseDate: Scalars['DateTime'];
  supportingArtists?: Maybe<Array<SongArtistSupportingArtist>>;
  playlists?: Maybe<Array<SongPlaylist>>;
  usersFavourited?: Maybe<Array<UserSongFavourites>>;
  usersRecentlyPlayed?: Maybe<Array<UserSongRecentlyPlayed>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type SongArtistSupportingArtist = {
  __typename?: 'SongArtistSupportingArtist';
  songId: Scalars['ID'];
  artistId: Scalars['ID'];
  song: Song;
  artist: Artist;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type SongPlaylist = {
  __typename?: 'SongPlaylist';
  songId: Scalars['ID'];
  playlistId: Scalars['ID'];
  song: Song;
  playlist: Playlist;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UpdateFavouritesArgs = {
  userId: Scalars['String'];
  songId: Scalars['ID'];
};

export type UpdatePlaylistInfo = {
  id: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
};

export type UpdatePlaylistsArgs = {
  userId: Scalars['String'];
  playlistId: Scalars['ID'];
};

export type UpdateRecentlyPlayedArgs = {
  userId: Scalars['String'];
  songId: Scalars['String'];
};

export type UpdateSongTitle = {
  title: Scalars['String'];
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  favourites?: Maybe<Array<UserSongFavourites>>;
  following?: Maybe<Array<UserArtistFollowing>>;
  recentlyPlayed?: Maybe<Array<UserSongRecentlyPlayed>>;
  playlists?: Maybe<Array<UserPlaylist>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserArtistFollowing = {
  __typename?: 'UserArtistFollowing';
  userId: Scalars['ID'];
  artistId: Scalars['ID'];
  user: User;
  artist: Artist;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserPlaylist = {
  __typename?: 'UserPlaylist';
  userId: Scalars['ID'];
  playlistId: Scalars['ID'];
  user: User;
  playlist: Playlist;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserSongFavourites = {
  __typename?: 'UserSongFavourites';
  userId: Scalars['String'];
  songId: Scalars['ID'];
  user: User;
  song: Song;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserSongRecentlyPlayed = {
  __typename?: 'UserSongRecentlyPlayed';
  userId: Scalars['ID'];
  songId: Scalars['ID'];
  user: User;
  song: Song;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

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

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
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
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

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
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Album: ResolverTypeWrapper<Album>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Artist: ResolverTypeWrapper<Artist>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Song: ResolverTypeWrapper<Song>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  SongArtistSupportingArtist: ResolverTypeWrapper<SongArtistSupportingArtist>;
  SongPlaylist: ResolverTypeWrapper<SongPlaylist>;
  Playlist: ResolverTypeWrapper<Playlist>;
  UserPlaylist: ResolverTypeWrapper<UserPlaylist>;
  User: ResolverTypeWrapper<User>;
  UserSongFavourites: ResolverTypeWrapper<UserSongFavourites>;
  UserArtistFollowing: ResolverTypeWrapper<UserArtistFollowing>;
  UserSongRecentlyPlayed: ResolverTypeWrapper<UserSongRecentlyPlayed>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateAlbum: CreateAlbum;
  CreateArtist: CreateArtist;
  CreateSong: CreateSong;
  UpdateSongTitle: UpdateSongTitle;
  CreatePlaylist: CreatePlaylist;
  UpdatePlaylistInfo: UpdatePlaylistInfo;
  AddPlaylistSongs: AddPlaylistSongs;
  RemovePlaylistSongs: RemovePlaylistSongs;
  CreateUserArgs: CreateUserArgs;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  UpdateFavouritesArgs: UpdateFavouritesArgs;
  UpdatePlaylistsArgs: UpdatePlaylistsArgs;
  UpdateRecentlyPlayedArgs: UpdateRecentlyPlayedArgs;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Album: Album;
  ID: Scalars['ID'];
  Artist: Artist;
  String: Scalars['String'];
  Song: Song;
  DateTime: Scalars['DateTime'];
  SongArtistSupportingArtist: SongArtistSupportingArtist;
  SongPlaylist: SongPlaylist;
  Playlist: Playlist;
  UserPlaylist: UserPlaylist;
  User: User;
  UserSongFavourites: UserSongFavourites;
  UserArtistFollowing: UserArtistFollowing;
  UserSongRecentlyPlayed: UserSongRecentlyPlayed;
  Mutation: {};
  CreateAlbum: CreateAlbum;
  CreateArtist: CreateArtist;
  CreateSong: CreateSong;
  UpdateSongTitle: UpdateSongTitle;
  CreatePlaylist: CreatePlaylist;
  UpdatePlaylistInfo: UpdatePlaylistInfo;
  AddPlaylistSongs: AddPlaylistSongs;
  RemovePlaylistSongs: RemovePlaylistSongs;
  CreateUserArgs: CreateUserArgs;
  Boolean: Scalars['Boolean'];
  UpdateFavouritesArgs: UpdateFavouritesArgs;
  UpdatePlaylistsArgs: UpdatePlaylistsArgs;
  UpdateRecentlyPlayedArgs: UpdateRecentlyPlayedArgs;
};

export type AlbumResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  artist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  songs?: Resolver<Array<ResolversTypes['Song']>, ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type ArtistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  albums?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType>;
  songs?: Resolver<Array<ResolversTypes['Song']>, ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  usersFollowing?: Resolver<
    Maybe<Array<ResolversTypes['UserArtistFollowing']>>,
    ParentType,
    ContextType
  >;
  supportingArtistOn?: Resolver<
    Maybe<Array<ResolversTypes['SongArtistSupportingArtist']>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createAlbum?: Resolver<
    ResolversTypes['Album'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateAlbumArgs, 'data'>
  >;
  deleteAlbum?: Resolver<
    ResolversTypes['Album'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAlbumArgs, 'id'>
  >;
  createArtist?: Resolver<
    ResolversTypes['Artist'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateArtistArgs, 'data'>
  >;
  deleteArtist?: Resolver<
    ResolversTypes['Artist'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteArtistArgs, 'id'>
  >;
  createSong?: Resolver<
    ResolversTypes['Song'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSongArgs, 'data'>
  >;
  updateSongTitle?: Resolver<
    ResolversTypes['Song'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSongTitleArgs, 'data'>
  >;
  deleteSong?: Resolver<
    ResolversTypes['Song'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSongArgs, 'id'>
  >;
  createPlaylist?: Resolver<
    ResolversTypes['Playlist'],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePlaylistArgs, 'data'>
  >;
  updatePlaylistInfo?: Resolver<
    ResolversTypes['Playlist'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePlaylistInfoArgs, 'data'>
  >;
  addPlaylistSongs?: Resolver<
    ResolversTypes['Playlist'],
    ParentType,
    ContextType,
    RequireFields<MutationAddPlaylistSongsArgs, 'data'>
  >;
  removePlaylistSongs?: Resolver<
    ResolversTypes['Playlist'],
    ParentType,
    ContextType,
    RequireFields<MutationRemovePlaylistSongsArgs, 'data'>
  >;
  deletePlaylist?: Resolver<
    ResolversTypes['Playlist'],
    ParentType,
    ContextType,
    RequireFields<MutationDeletePlaylistArgs, 'id'>
  >;
  createUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'data'>
  >;
  updateFollowing?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateFollowingArgs, 'userId' | 'artistId'>
  >;
  updateFavourites?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateFavouritesArgs, 'data'>
  >;
  updatePlaylists?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePlaylistsArgs, 'data'>
  >;
  updateRecentlyPlayed?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateRecentlyPlayedArgs, 'data'>
  >;
  deleteUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'id'>
  >;
};

export type PlaylistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Playlist'] = ResolversParentTypes['Playlist']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  songs?: Resolver<
    Maybe<Array<ResolversTypes['SongPlaylist']>>,
    ParentType,
    ContextType
  >;
  users?: Resolver<
    Maybe<Array<ResolversTypes['UserPlaylist']>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  albums?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType>;
  albumById?: Resolver<
    ResolversTypes['Album'],
    ParentType,
    ContextType,
    RequireFields<QueryAlbumByIdArgs, 'id'>
  >;
  searchAlbums?: Resolver<
    Array<ResolversTypes['Album']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchAlbumsArgs, 'query'>
  >;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  artistById?: Resolver<
    ResolversTypes['Artist'],
    ParentType,
    ContextType,
    RequireFields<QueryArtistByIdArgs, 'id'>
  >;
  artistsById?: Resolver<
    Array<ResolversTypes['Artist']>,
    ParentType,
    ContextType,
    RequireFields<QueryArtistsByIdArgs, 'ids'>
  >;
  searchArtists?: Resolver<
    Array<ResolversTypes['Artist']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchArtistsArgs, 'query'>
  >;
  songs?: Resolver<Array<ResolversTypes['Song']>, ParentType, ContextType>;
  songById?: Resolver<
    ResolversTypes['Song'],
    ParentType,
    ContextType,
    RequireFields<QuerySongByIdArgs, 'id'>
  >;
  songsById?: Resolver<
    Array<ResolversTypes['Song']>,
    ParentType,
    ContextType,
    RequireFields<QuerySongsByIdArgs, 'ids'>
  >;
  searchSongs?: Resolver<
    Array<ResolversTypes['Song']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchSongsArgs, 'query'>
  >;
  playlists?: Resolver<
    Array<ResolversTypes['Playlist']>,
    ParentType,
    ContextType
  >;
  playlistById?: Resolver<
    ResolversTypes['Playlist'],
    ParentType,
    ContextType,
    RequireFields<QueryPlaylistByIdArgs, 'id'>
  >;
  playlistsById?: Resolver<
    Array<ResolversTypes['Playlist']>,
    ParentType,
    ContextType,
    RequireFields<QueryPlaylistsByIdArgs, 'ids'>
  >;
  playlistsByUserId?: Resolver<
    Array<ResolversTypes['Playlist']>,
    ParentType,
    ContextType,
    RequireFields<QueryPlaylistsByUserIdArgs, 'userId'>
  >;
  searchPlaylists?: Resolver<
    Array<ResolversTypes['Playlist']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchPlaylistsArgs, 'query'>
  >;
  userById?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<QueryUserByIdArgs, 'id'>
  >;
};

export type SongResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Song'] = ResolversParentTypes['Song']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  artistId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  artist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType>;
  albumId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  album?: Resolver<ResolversTypes['Album'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  supportingArtists?: Resolver<
    Maybe<Array<ResolversTypes['SongArtistSupportingArtist']>>,
    ParentType,
    ContextType
  >;
  playlists?: Resolver<
    Maybe<Array<ResolversTypes['SongPlaylist']>>,
    ParentType,
    ContextType
  >;
  usersFavourited?: Resolver<
    Maybe<Array<ResolversTypes['UserSongFavourites']>>,
    ParentType,
    ContextType
  >;
  usersRecentlyPlayed?: Resolver<
    Maybe<Array<ResolversTypes['UserSongRecentlyPlayed']>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type SongArtistSupportingArtistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SongArtistSupportingArtist'] = ResolversParentTypes['SongArtistSupportingArtist']
> = {
  songId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  artistId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  song?: Resolver<ResolversTypes['Song'], ParentType, ContextType>;
  artist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type SongPlaylistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SongPlaylist'] = ResolversParentTypes['SongPlaylist']
> = {
  songId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  playlistId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  song?: Resolver<ResolversTypes['Song'], ParentType, ContextType>;
  playlist?: Resolver<ResolversTypes['Playlist'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  favourites?: Resolver<
    Maybe<Array<ResolversTypes['UserSongFavourites']>>,
    ParentType,
    ContextType
  >;
  following?: Resolver<
    Maybe<Array<ResolversTypes['UserArtistFollowing']>>,
    ParentType,
    ContextType
  >;
  recentlyPlayed?: Resolver<
    Maybe<Array<ResolversTypes['UserSongRecentlyPlayed']>>,
    ParentType,
    ContextType
  >;
  playlists?: Resolver<
    Maybe<Array<ResolversTypes['UserPlaylist']>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type UserArtistFollowingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserArtistFollowing'] = ResolversParentTypes['UserArtistFollowing']
> = {
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  artistId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  artist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type UserPlaylistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserPlaylist'] = ResolversParentTypes['UserPlaylist']
> = {
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  playlistId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  playlist?: Resolver<ResolversTypes['Playlist'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type UserSongFavouritesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserSongFavourites'] = ResolversParentTypes['UserSongFavourites']
> = {
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  songId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  song?: Resolver<ResolversTypes['Song'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type UserSongRecentlyPlayedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserSongRecentlyPlayed'] = ResolversParentTypes['UserSongRecentlyPlayed']
> = {
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  songId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  song?: Resolver<ResolversTypes['Song'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>;
  Artist?: ArtistResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Playlist?: PlaylistResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Song?: SongResolvers<ContextType>;
  SongArtistSupportingArtist?: SongArtistSupportingArtistResolvers<ContextType>;
  SongPlaylist?: SongPlaylistResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserArtistFollowing?: UserArtistFollowingResolvers<ContextType>;
  UserPlaylist?: UserPlaylistResolvers<ContextType>;
  UserSongFavourites?: UserSongFavouritesResolvers<ContextType>;
  UserSongRecentlyPlayed?: UserSongRecentlyPlayedResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
