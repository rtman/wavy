import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
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

export type AddPlaylistSongsArgs = {
  playlistId: Scalars['ID'];
  songIds: Array<Scalars['ID']>;
};

export type AddSongsToAlbumArgs = {
  albumId: Scalars['String'];
  artistId: Scalars['String'];
  labelId?: Maybe<Scalars['String']>;
  songsToAdd: Array<NewSongArgs>;
  userName: Scalars['String'];
};

export type Album = {
  __typename?: 'Album';
  id: Scalars['ID'];
  artistId: Scalars['ID'];
  artist: Artist;
  title: Scalars['String'];
  songs: Array<Song>;
  labelId?: Maybe<Scalars['ID']>;
  label?: Maybe<Label>;
  profileImageStoragePathLarge: Scalars['String'];
  profileImageStoragePathSmall: Scalars['String'];
  profileImageStoragePathThumb: Scalars['String'];
  profileImageUrlLarge: Scalars['String'];
  profileImageUrlSmall: Scalars['String'];
  profileImageUrlThumb: Scalars['String'];
  description: Scalars['String'];
  releaseDate: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  processing: Scalars['Boolean'];
};

export type Artist = {
  __typename?: 'Artist';
  id: Scalars['ID'];
  name: Scalars['String'];
  albums: Array<Album>;
  songs: Array<Song>;
  profileImageStoragePathLarge: Scalars['String'];
  profileImageStoragePathSmall: Scalars['String'];
  profileImageStoragePathThumb: Scalars['String'];
  profileImageUrlLarge: Scalars['String'];
  profileImageUrlSmall: Scalars['String'];
  profileImageUrlThumb: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<ArtistLabel>>;
  usersFollowing?: Maybe<Array<UserArtistFollowing>>;
  followers: Scalars['Float'];
  supportingArtistOn?: Maybe<Array<SongArtistSupportingArtist>>;
  users?: Maybe<Array<UserArtist>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ArtistLabel = {
  __typename?: 'ArtistLabel';
  artistId: Scalars['ID'];
  labelId: Scalars['ID'];
  artist: Artist;
  label: Label;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

/** Create a new album */
export type CreateAlbumArgs = {
  albumId: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  artistId?: Maybe<Scalars['String']>;
  artistName?: Maybe<Scalars['String']>;
  artistEmail?: Maybe<Scalars['String']>;
  newArtist?: Maybe<Scalars['Boolean']>;
  userName?: Maybe<Scalars['String']>;
  variousArtists?: Maybe<Scalars['Boolean']>;
  labelId?: Maybe<Scalars['String']>;
  profileImageStoragePath: Scalars['String'];
  releaseDate: Scalars['DateTime'];
};

export type CreateArtistArgs = {
  artistId: Scalars['String'];
  userId: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  profileImageStoragePath: Scalars['String'];
};

export type CreateLabelArgs = {
  labelId: Scalars['String'];
  userId: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  profileImageStoragePath: Scalars['String'];
};

export type CreatePlaylistArgs = {
  userId: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  profileImageStoragePath?: Maybe<Scalars['String']>;
};

export type CreateSongArgs = {
  title: Scalars['String'];
  artistId: Scalars['String'];
  profileImageStoragePath: Scalars['String'];
  imageUrl: Scalars['String'];
};

/** Create a new user */
export type CreateUserArgs = {
  userId: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type DeletePlaylistArgs = {
  userId: Scalars['String'];
  playlistId: Scalars['ID'];
};

export type Label = {
  __typename?: 'Label';
  id: Scalars['ID'];
  name: Scalars['String'];
  profileImageStoragePathLarge: Scalars['String'];
  profileImageStoragePathSmall: Scalars['String'];
  profileImageStoragePathThumb: Scalars['String'];
  profileImageUrlLarge: Scalars['String'];
  profileImageUrlSmall: Scalars['String'];
  profileImageUrlThumb: Scalars['String'];
  description: Scalars['String'];
  artists?: Maybe<Array<ArtistLabel>>;
  albums?: Maybe<Array<Album>>;
  songs?: Maybe<Array<Song>>;
  users?: Maybe<Array<UserLabel>>;
  usersFollowing?: Maybe<Array<UserLabelFollowing>>;
  followers: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ListeningStats = {
  __typename?: 'ListeningStats';
  songId: Scalars['ID'];
  albumId: Scalars['ID'];
  artistId: Scalars['ID'];
  labelId: Scalars['ID'];
  userId: Scalars['String'];
  plays: Scalars['Float'];
  skips: Scalars['Float'];
  city: Scalars['String'];
  country: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export enum ListeningStatsQueryField {
  SongId = 'songId',
  AlbumId = 'albumId',
  ArtistId = 'artistId',
  LabelId = 'labelId',
  UserId = 'userId',
}

export type Mutation = {
  __typename?: 'Mutation';
  createAlbum: Album;
  addSongsToAlbum: Scalars['Boolean'];
  testProcessAudio: Scalars['Boolean'];
  deleteAlbum: Scalars['Boolean'];
  createArtist: Artist;
  deleteArtist: Scalars['Boolean'];
  createLabel: Label;
  deleteLabel: Scalars['Boolean'];
  userPlayedSong: Scalars['Boolean'];
  userSkippedSong: Scalars['Boolean'];
  createSong: Song;
  updateSongTitle: Scalars['Boolean'];
  deleteSong: Scalars['Boolean'];
  updateSongPlayCount: Scalars['Boolean'];
  createPlaylist: Playlist;
  updatePlaylistInfo: Scalars['Boolean'];
  testProcessImage: Scalars['Boolean'];
  addPlaylistSongs: Scalars['Boolean'];
  removePlaylistSongs: Scalars['Boolean'];
  deletePlaylist: Scalars['Boolean'];
  createUser: User;
  updateArtistFollowing: Scalars['Boolean'];
  updateLabelFollowing: Scalars['Boolean'];
  updateFollowing: Scalars['Boolean'];
  updateFavourites: Scalars['Boolean'];
  updatePlaylists: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
};

export type MutationCreateAlbumArgs = {
  input: CreateAlbumArgs;
};

export type MutationAddSongsToAlbumArgs = {
  input: AddSongsToAlbumArgs;
};

export type MutationTestProcessAudioArgs = {
  storagePath: Scalars['String'];
};

export type MutationDeleteAlbumArgs = {
  albumId: Scalars['String'];
};

export type MutationCreateArtistArgs = {
  input: CreateArtistArgs;
};

export type MutationDeleteArtistArgs = {
  artistId: Scalars['String'];
};

export type MutationCreateLabelArgs = {
  input: CreateLabelArgs;
};

export type MutationDeleteLabelArgs = {
  labelId: Scalars['String'];
};

export type MutationUserPlayedSongArgs = {
  input: UserPlayedSongArgs;
};

export type MutationUserSkippedSongArgs = {
  input: UserSkippedSongArgs;
};

export type MutationCreateSongArgs = {
  input: CreateSongArgs;
};

export type MutationUpdateSongTitleArgs = {
  input: UpdateSongTitleArgs;
};

export type MutationDeleteSongArgs = {
  songId: Scalars['String'];
};

export type MutationUpdateSongPlayCountArgs = {
  input: UpdatePlayCountArgs;
};

export type MutationCreatePlaylistArgs = {
  input: CreatePlaylistArgs;
};

export type MutationUpdatePlaylistInfoArgs = {
  input: UpdatePlaylistInfoArgs;
};

export type MutationTestProcessImageArgs = {
  input: UpdatePlaylistInfoArgs;
};

export type MutationAddPlaylistSongsArgs = {
  input: AddPlaylistSongsArgs;
};

export type MutationRemovePlaylistSongsArgs = {
  input: RemovePlaylistSongsArgs;
};

export type MutationDeletePlaylistArgs = {
  input: DeletePlaylistArgs;
};

export type MutationCreateUserArgs = {
  input: CreateUserArgs;
};

export type MutationUpdateArtistFollowingArgs = {
  input: UpdateArtistFollowingArgs;
};

export type MutationUpdateLabelFollowingArgs = {
  input: UpdateLabelFollowingArgs;
};

export type MutationUpdateFollowingArgs = {
  input: UpdateFollowingArgs;
};

export type MutationUpdateFavouritesArgs = {
  input: UpdateFavouritesArgs;
};

export type MutationUpdatePlaylistsArgs = {
  input: UpdatePlaylistsArgs;
};

export type MutationDeleteUserArgs = {
  userId: Scalars['String'];
};

export type NewSongArgs = {
  title: Scalars['String'];
  storagePath: Scalars['String'];
  supportingArtist?: Maybe<Array<SupportingArtistInput>>;
};

export type Playlist = {
  __typename?: 'Playlist';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  profileImageStoragePathLarge?: Maybe<Scalars['String']>;
  profileImageStoragePathSmall?: Maybe<Scalars['String']>;
  profileImageStoragePathThumb?: Maybe<Scalars['String']>;
  profileImageUrlLarge?: Maybe<Scalars['String']>;
  profileImageUrlSmall?: Maybe<Scalars['String']>;
  profileImageUrlThumb?: Maybe<Scalars['String']>;
  songs?: Maybe<Array<SongPlaylist>>;
  users?: Maybe<Array<UserPlaylist>>;
  usersFollowing?: Maybe<Array<UserPlaylistFollowing>>;
  followers: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  albums: Array<Album>;
  albumById: Album;
  searchAlbums: Array<Album>;
  artists: Array<Artist>;
  newArtists: Array<Artist>;
  artistById: Artist;
  artistsById: Array<Artist>;
  searchArtists: Array<Artist>;
  labels: Array<Label>;
  newLabels: Array<Label>;
  labelById: Label;
  searchLabels: Array<Label>;
  queryStatsByField: Array<ListeningStats>;
  queryStatsByFieldForNumberOfMonths: Array<ListeningStats>;
  queryStatsForCompoundQuery: Array<ListeningStats>;
  searchAll: Search;
  songs: Array<Song>;
  songById: Song;
  songsById: Array<Song>;
  searchSongs: Array<Song>;
  topSongs: Array<Song>;
  topSongsByTagId: Array<Song>;
  topSongsByTagName: Array<Song>;
  playlists: Array<Playlist>;
  playlistById: Playlist;
  playlistsById: Array<Playlist>;
  playlistsByUserId: Array<Playlist>;
  searchPlaylists: Array<Playlist>;
  userIdExists: Scalars['Boolean'];
  users: Scalars['Boolean'];
  userById: User;
  playHistory: Array<Song>;
  usersTopSongs: Array<Song>;
  login: User;
};

export type QueryAlbumByIdArgs = {
  albumId: Scalars['String'];
};

export type QuerySearchAlbumsArgs = {
  query: Scalars['String'];
};

export type QueryArtistByIdArgs = {
  artistId: Scalars['String'];
};

export type QueryArtistsByIdArgs = {
  artistIds: Array<Scalars['String']>;
};

export type QuerySearchArtistsArgs = {
  query: Scalars['String'];
};

export type QueryLabelByIdArgs = {
  labelId: Scalars['String'];
};

export type QuerySearchLabelsArgs = {
  query: Scalars['String'];
};

export type QueryQueryStatsByFieldArgs = {
  input: QueryStatsByField;
};

export type QueryQueryStatsByFieldForNumberOfMonthsArgs = {
  input: QueryStatsByFieldAndNumberOfMonths;
};

export type QueryQueryStatsForCompoundQueryArgs = {
  input: QueryStatsForCompoundQuery;
};

export type QuerySearchAllArgs = {
  query: Scalars['String'];
};

export type QuerySongByIdArgs = {
  songId: Scalars['String'];
};

export type QuerySongsByIdArgs = {
  songIds: Array<Scalars['String']>;
};

export type QuerySearchSongsArgs = {
  query: Scalars['String'];
};

export type QueryTopSongsByTagIdArgs = {
  tagId: Scalars['String'];
};

export type QueryTopSongsByTagNameArgs = {
  tagName: Scalars['String'];
};

export type QueryPlaylistByIdArgs = {
  playlistId: Scalars['String'];
};

export type QueryPlaylistsByIdArgs = {
  playlistIds: Array<Scalars['String']>;
};

export type QueryPlaylistsByUserIdArgs = {
  userId: Scalars['String'];
};

export type QuerySearchPlaylistsArgs = {
  query: Scalars['String'];
};

export type QueryUserIdExistsArgs = {
  userId: Scalars['String'];
};

export type QueryUserByIdArgs = {
  userId: Scalars['String'];
};

export type QueryPlayHistoryArgs = {
  userId: Scalars['String'];
};

export type QueryUsersTopSongsArgs = {
  userId: Scalars['String'];
};

export type QueryLoginArgs = {
  password: Scalars['String'];
  userId: Scalars['String'];
};

export type QueryStatsByField = {
  field: ListeningStatsQueryField;
  value: Scalars['String'];
};

export type QueryStatsByFieldAndNumberOfMonths = {
  field: ListeningStatsQueryField;
  value: Scalars['String'];
  numberOfMonths: Scalars['Float'];
};

export type QueryStatsForCompoundQuery = {
  field1: ListeningStatsQueryField;
  value1: Scalars['String'];
  field2: ListeningStatsQueryField;
  value2: Scalars['String'];
};

export type RemovePlaylistSongsArgs = {
  playlistId: Scalars['ID'];
  songIds: Array<Scalars['ID']>;
};

export type Search = {
  __typename?: 'Search';
  albums: Array<Album>;
  artists: Array<Artist>;
  labels: Array<Label>;
  playlists: Array<Playlist>;
  songs: Array<Song>;
};

export type Song = {
  __typename?: 'Song';
  id: Scalars['ID'];
  artistId: Scalars['ID'];
  artist: Artist;
  albumId: Scalars['ID'];
  album: Album;
  labelId?: Maybe<Scalars['ID']>;
  label?: Maybe<Label>;
  title: Scalars['String'];
  storagePathHigh: Scalars['String'];
  storagePathMedium: Scalars['String'];
  storagePathLow: Scalars['String'];
  urlHigh: Scalars['String'];
  urlMedium: Scalars['String'];
  urlLow: Scalars['String'];
  playCount: Scalars['Float'];
  supportingArtists?: Maybe<Array<SongArtistSupportingArtist>>;
  playlists?: Maybe<Array<SongPlaylist>>;
  usersFavourited?: Maybe<Array<UserSongFavourites>>;
  tags?: Maybe<Array<SongTag>>;
  tagSearchString: Scalars['String'];
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

export type SongTag = {
  __typename?: 'SongTag';
  songId: Scalars['ID'];
  tagId: Scalars['ID'];
  song: Song;
  tag: Tag;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type SupportingArtistInput = {
  new: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  title: Scalars['String'];
  songs?: Maybe<Array<SongTag>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UpdateArtistFollowingArgs = {
  userId: Scalars['String'];
  artistId: Scalars['String'];
};

export type UpdateFavouritesArgs = {
  userId: Scalars['String'];
  songId: Scalars['String'];
};

export type UpdateFollowingArgs = {
  userId: Scalars['String'];
  id: Scalars['String'];
  type: UpdateFollowingType;
};

export enum UpdateFollowingType {
  Artist = 'artist',
  Label = 'label',
  Playlist = 'playlist',
}

export type UpdateLabelFollowingArgs = {
  userId: Scalars['String'];
  labelId: Scalars['String'];
};

export type UpdatePlayCountArgs = {
  songId: Scalars['String'];
};

export type UpdatePlaylistInfoArgs = {
  playlistId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  profileImageStoragePath?: Maybe<Scalars['String']>;
};

export type UpdatePlaylistsArgs = {
  userId: Scalars['String'];
  playlistId: Scalars['String'];
};

export type UpdateSongTitleArgs = {
  title: Scalars['String'];
  songId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  songFavourites?: Maybe<Array<UserSongFavourites>>;
  artistFollows?: Maybe<Array<UserArtistFollowing>>;
  labelFollows?: Maybe<Array<UserLabelFollowing>>;
  playlistFollows?: Maybe<Array<UserPlaylistFollowing>>;
  playlists?: Maybe<Array<UserPlaylist>>;
  artists?: Maybe<Array<UserArtist>>;
  labels?: Maybe<Array<UserLabel>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserArtist = {
  __typename?: 'UserArtist';
  userId: Scalars['ID'];
  artistId: Scalars['ID'];
  user: User;
  artist: Artist;
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

export type UserLabel = {
  __typename?: 'UserLabel';
  userId: Scalars['ID'];
  labelId: Scalars['ID'];
  user: User;
  label: Label;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserLabelFollowing = {
  __typename?: 'UserLabelFollowing';
  userId: Scalars['ID'];
  labelId: Scalars['ID'];
  user: User;
  label: Label;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserPlayedSongArgs = {
  userId: Scalars['String'];
  songId: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
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

export type UserPlaylistFollowing = {
  __typename?: 'UserPlaylistFollowing';
  userId: Scalars['ID'];
  playlistId: Scalars['ID'];
  user: User;
  playlist: Playlist;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserSkippedSongArgs = {
  userId: Scalars['String'];
  songId: Scalars['String'];
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
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

export type IsTypeOfResolverFn<T = {}> = (
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
  Label: ResolverTypeWrapper<Label>;
  ArtistLabel: ResolverTypeWrapper<ArtistLabel>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  UserLabel: ResolverTypeWrapper<UserLabel>;
  User: ResolverTypeWrapper<User>;
  UserSongFavourites: ResolverTypeWrapper<UserSongFavourites>;
  UserArtistFollowing: ResolverTypeWrapper<UserArtistFollowing>;
  UserLabelFollowing: ResolverTypeWrapper<UserLabelFollowing>;
  UserPlaylistFollowing: ResolverTypeWrapper<UserPlaylistFollowing>;
  Playlist: ResolverTypeWrapper<Playlist>;
  SongPlaylist: ResolverTypeWrapper<SongPlaylist>;
  UserPlaylist: ResolverTypeWrapper<UserPlaylist>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  UserArtist: ResolverTypeWrapper<UserArtist>;
  SongArtistSupportingArtist: ResolverTypeWrapper<SongArtistSupportingArtist>;
  SongTag: ResolverTypeWrapper<SongTag>;
  Tag: ResolverTypeWrapper<Tag>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  QueryStatsByField: QueryStatsByField;
  ListeningStatsQueryField: ListeningStatsQueryField;
  ListeningStats: ResolverTypeWrapper<ListeningStats>;
  QueryStatsByFieldAndNumberOfMonths: QueryStatsByFieldAndNumberOfMonths;
  QueryStatsForCompoundQuery: QueryStatsForCompoundQuery;
  Search: ResolverTypeWrapper<Search>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateAlbumArgs: CreateAlbumArgs;
  AddSongsToAlbumArgs: AddSongsToAlbumArgs;
  NewSongArgs: NewSongArgs;
  SupportingArtistInput: SupportingArtistInput;
  CreateArtistArgs: CreateArtistArgs;
  CreateLabelArgs: CreateLabelArgs;
  UserPlayedSongArgs: UserPlayedSongArgs;
  UserSkippedSongArgs: UserSkippedSongArgs;
  CreateSongArgs: CreateSongArgs;
  UpdateSongTitleArgs: UpdateSongTitleArgs;
  UpdatePlayCountArgs: UpdatePlayCountArgs;
  CreatePlaylistArgs: CreatePlaylistArgs;
  UpdatePlaylistInfoArgs: UpdatePlaylistInfoArgs;
  AddPlaylistSongsArgs: AddPlaylistSongsArgs;
  RemovePlaylistSongsArgs: RemovePlaylistSongsArgs;
  DeletePlaylistArgs: DeletePlaylistArgs;
  CreateUserArgs: CreateUserArgs;
  UpdateArtistFollowingArgs: UpdateArtistFollowingArgs;
  UpdateLabelFollowingArgs: UpdateLabelFollowingArgs;
  UpdateFollowingArgs: UpdateFollowingArgs;
  UpdateFollowingType: UpdateFollowingType;
  UpdateFavouritesArgs: UpdateFavouritesArgs;
  UpdatePlaylistsArgs: UpdatePlaylistsArgs;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Album: Album;
  ID: Scalars['ID'];
  Artist: Artist;
  String: Scalars['String'];
  Song: Song;
  Label: Label;
  ArtistLabel: ArtistLabel;
  DateTime: Scalars['DateTime'];
  UserLabel: UserLabel;
  User: User;
  UserSongFavourites: UserSongFavourites;
  UserArtistFollowing: UserArtistFollowing;
  UserLabelFollowing: UserLabelFollowing;
  UserPlaylistFollowing: UserPlaylistFollowing;
  Playlist: Playlist;
  SongPlaylist: SongPlaylist;
  UserPlaylist: UserPlaylist;
  Float: Scalars['Float'];
  UserArtist: UserArtist;
  SongArtistSupportingArtist: SongArtistSupportingArtist;
  SongTag: SongTag;
  Tag: Tag;
  Boolean: Scalars['Boolean'];
  QueryStatsByField: QueryStatsByField;
  ListeningStats: ListeningStats;
  QueryStatsByFieldAndNumberOfMonths: QueryStatsByFieldAndNumberOfMonths;
  QueryStatsForCompoundQuery: QueryStatsForCompoundQuery;
  Search: Search;
  Mutation: {};
  CreateAlbumArgs: CreateAlbumArgs;
  AddSongsToAlbumArgs: AddSongsToAlbumArgs;
  NewSongArgs: NewSongArgs;
  SupportingArtistInput: SupportingArtistInput;
  CreateArtistArgs: CreateArtistArgs;
  CreateLabelArgs: CreateLabelArgs;
  UserPlayedSongArgs: UserPlayedSongArgs;
  UserSkippedSongArgs: UserSkippedSongArgs;
  CreateSongArgs: CreateSongArgs;
  UpdateSongTitleArgs: UpdateSongTitleArgs;
  UpdatePlayCountArgs: UpdatePlayCountArgs;
  CreatePlaylistArgs: CreatePlaylistArgs;
  UpdatePlaylistInfoArgs: UpdatePlaylistInfoArgs;
  AddPlaylistSongsArgs: AddPlaylistSongsArgs;
  RemovePlaylistSongsArgs: RemovePlaylistSongsArgs;
  DeletePlaylistArgs: DeletePlaylistArgs;
  CreateUserArgs: CreateUserArgs;
  UpdateArtistFollowingArgs: UpdateArtistFollowingArgs;
  UpdateLabelFollowingArgs: UpdateLabelFollowingArgs;
  UpdateFollowingArgs: UpdateFollowingArgs;
  UpdateFavouritesArgs: UpdateFavouritesArgs;
  UpdatePlaylistsArgs: UpdatePlaylistsArgs;
};

export type AlbumResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  artistId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  artist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  songs?: Resolver<Array<ResolversTypes['Song']>, ParentType, ContextType>;
  labelId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['Label']>, ParentType, ContextType>;
  profileImageStoragePathLarge?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageStoragePathSmall?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageStoragePathThumb?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageUrlLarge?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageUrlSmall?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageUrlThumb?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  processing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ArtistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  albums?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType>;
  songs?: Resolver<Array<ResolversTypes['Song']>, ParentType, ContextType>;
  profileImageStoragePathLarge?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageStoragePathSmall?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageStoragePathThumb?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageUrlLarge?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageUrlSmall?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageUrlThumb?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  labels?: Resolver<
    Maybe<Array<ResolversTypes['ArtistLabel']>>,
    ParentType,
    ContextType
  >;
  usersFollowing?: Resolver<
    Maybe<Array<ResolversTypes['UserArtistFollowing']>>,
    ParentType,
    ContextType
  >;
  followers?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  supportingArtistOn?: Resolver<
    Maybe<Array<ResolversTypes['SongArtistSupportingArtist']>>,
    ParentType,
    ContextType
  >;
  users?: Resolver<
    Maybe<Array<ResolversTypes['UserArtist']>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ArtistLabelResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArtistLabel'] = ResolversParentTypes['ArtistLabel']
> = {
  artistId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  labelId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  artist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['Label'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type LabelResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Label'] = ResolversParentTypes['Label']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImageStoragePathLarge?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageStoragePathSmall?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageStoragePathThumb?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageUrlLarge?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageUrlSmall?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  profileImageUrlThumb?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  artists?: Resolver<
    Maybe<Array<ResolversTypes['ArtistLabel']>>,
    ParentType,
    ContextType
  >;
  albums?: Resolver<
    Maybe<Array<ResolversTypes['Album']>>,
    ParentType,
    ContextType
  >;
  songs?: Resolver<
    Maybe<Array<ResolversTypes['Song']>>,
    ParentType,
    ContextType
  >;
  users?: Resolver<
    Maybe<Array<ResolversTypes['UserLabel']>>,
    ParentType,
    ContextType
  >;
  usersFollowing?: Resolver<
    Maybe<Array<ResolversTypes['UserLabelFollowing']>>,
    ParentType,
    ContextType
  >;
  followers?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ListeningStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ListeningStats'] = ResolversParentTypes['ListeningStats']
> = {
  songId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  albumId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  artistId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  labelId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plays?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  skips?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lng?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createAlbum?: Resolver<
    ResolversTypes['Album'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateAlbumArgs, 'input'>
  >;
  addSongsToAlbum?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationAddSongsToAlbumArgs, 'input'>
  >;
  testProcessAudio?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationTestProcessAudioArgs, 'storagePath'>
  >;
  deleteAlbum?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAlbumArgs, 'albumId'>
  >;
  createArtist?: Resolver<
    ResolversTypes['Artist'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateArtistArgs, 'input'>
  >;
  deleteArtist?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteArtistArgs, 'artistId'>
  >;
  createLabel?: Resolver<
    ResolversTypes['Label'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateLabelArgs, 'input'>
  >;
  deleteLabel?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteLabelArgs, 'labelId'>
  >;
  userPlayedSong?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUserPlayedSongArgs, 'input'>
  >;
  userSkippedSong?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUserSkippedSongArgs, 'input'>
  >;
  createSong?: Resolver<
    ResolversTypes['Song'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSongArgs, 'input'>
  >;
  updateSongTitle?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSongTitleArgs, 'input'>
  >;
  deleteSong?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSongArgs, 'songId'>
  >;
  updateSongPlayCount?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSongPlayCountArgs, 'input'>
  >;
  createPlaylist?: Resolver<
    ResolversTypes['Playlist'],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePlaylistArgs, 'input'>
  >;
  updatePlaylistInfo?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePlaylistInfoArgs, 'input'>
  >;
  testProcessImage?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationTestProcessImageArgs, 'input'>
  >;
  addPlaylistSongs?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationAddPlaylistSongsArgs, 'input'>
  >;
  removePlaylistSongs?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationRemovePlaylistSongsArgs, 'input'>
  >;
  deletePlaylist?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeletePlaylistArgs, 'input'>
  >;
  createUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'input'>
  >;
  updateArtistFollowing?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateArtistFollowingArgs, 'input'>
  >;
  updateLabelFollowing?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateLabelFollowingArgs, 'input'>
  >;
  updateFollowing?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateFollowingArgs, 'input'>
  >;
  updateFavourites?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateFavouritesArgs, 'input'>
  >;
  updatePlaylists?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePlaylistsArgs, 'input'>
  >;
  deleteUser?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'userId'>
  >;
};

export type PlaylistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Playlist'] = ResolversParentTypes['Playlist']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  profileImageStoragePathLarge?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  profileImageStoragePathSmall?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  profileImageStoragePathThumb?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  profileImageUrlLarge?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  profileImageUrlSmall?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  profileImageUrlThumb?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
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
  usersFollowing?: Resolver<
    Maybe<Array<ResolversTypes['UserPlaylistFollowing']>>,
    ParentType,
    ContextType
  >;
  followers?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
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
    RequireFields<QueryAlbumByIdArgs, 'albumId'>
  >;
  searchAlbums?: Resolver<
    Array<ResolversTypes['Album']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchAlbumsArgs, 'query'>
  >;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  newArtists?: Resolver<
    Array<ResolversTypes['Artist']>,
    ParentType,
    ContextType
  >;
  artistById?: Resolver<
    ResolversTypes['Artist'],
    ParentType,
    ContextType,
    RequireFields<QueryArtistByIdArgs, 'artistId'>
  >;
  artistsById?: Resolver<
    Array<ResolversTypes['Artist']>,
    ParentType,
    ContextType,
    RequireFields<QueryArtistsByIdArgs, 'artistIds'>
  >;
  searchArtists?: Resolver<
    Array<ResolversTypes['Artist']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchArtistsArgs, 'query'>
  >;
  labels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType>;
  newLabels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType>;
  labelById?: Resolver<
    ResolversTypes['Label'],
    ParentType,
    ContextType,
    RequireFields<QueryLabelByIdArgs, 'labelId'>
  >;
  searchLabels?: Resolver<
    Array<ResolversTypes['Label']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchLabelsArgs, 'query'>
  >;
  queryStatsByField?: Resolver<
    Array<ResolversTypes['ListeningStats']>,
    ParentType,
    ContextType,
    RequireFields<QueryQueryStatsByFieldArgs, 'input'>
  >;
  queryStatsByFieldForNumberOfMonths?: Resolver<
    Array<ResolversTypes['ListeningStats']>,
    ParentType,
    ContextType,
    RequireFields<QueryQueryStatsByFieldForNumberOfMonthsArgs, 'input'>
  >;
  queryStatsForCompoundQuery?: Resolver<
    Array<ResolversTypes['ListeningStats']>,
    ParentType,
    ContextType,
    RequireFields<QueryQueryStatsForCompoundQueryArgs, 'input'>
  >;
  searchAll?: Resolver<
    ResolversTypes['Search'],
    ParentType,
    ContextType,
    RequireFields<QuerySearchAllArgs, 'query'>
  >;
  songs?: Resolver<Array<ResolversTypes['Song']>, ParentType, ContextType>;
  songById?: Resolver<
    ResolversTypes['Song'],
    ParentType,
    ContextType,
    RequireFields<QuerySongByIdArgs, 'songId'>
  >;
  songsById?: Resolver<
    Array<ResolversTypes['Song']>,
    ParentType,
    ContextType,
    RequireFields<QuerySongsByIdArgs, 'songIds'>
  >;
  searchSongs?: Resolver<
    Array<ResolversTypes['Song']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchSongsArgs, 'query'>
  >;
  topSongs?: Resolver<Array<ResolversTypes['Song']>, ParentType, ContextType>;
  topSongsByTagId?: Resolver<
    Array<ResolversTypes['Song']>,
    ParentType,
    ContextType,
    RequireFields<QueryTopSongsByTagIdArgs, 'tagId'>
  >;
  topSongsByTagName?: Resolver<
    Array<ResolversTypes['Song']>,
    ParentType,
    ContextType,
    RequireFields<QueryTopSongsByTagNameArgs, 'tagName'>
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
    RequireFields<QueryPlaylistByIdArgs, 'playlistId'>
  >;
  playlistsById?: Resolver<
    Array<ResolversTypes['Playlist']>,
    ParentType,
    ContextType,
    RequireFields<QueryPlaylistsByIdArgs, 'playlistIds'>
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
  userIdExists?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<QueryUserIdExistsArgs, 'userId'>
  >;
  users?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userById?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<QueryUserByIdArgs, 'userId'>
  >;
  playHistory?: Resolver<
    Array<ResolversTypes['Song']>,
    ParentType,
    ContextType,
    RequireFields<QueryPlayHistoryArgs, 'userId'>
  >;
  usersTopSongs?: Resolver<
    Array<ResolversTypes['Song']>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersTopSongsArgs, 'userId'>
  >;
  login?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<QueryLoginArgs, 'password' | 'userId'>
  >;
};

export type SearchResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Search'] = ResolversParentTypes['Search']
> = {
  albums?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType>;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  labels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType>;
  playlists?: Resolver<
    Array<ResolversTypes['Playlist']>,
    ParentType,
    ContextType
  >;
  songs?: Resolver<Array<ResolversTypes['Song']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
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
  labelId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['Label']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  storagePathHigh?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  storagePathMedium?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  storagePathLow?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  urlHigh?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  urlMedium?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  urlLow?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
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
  tags?: Resolver<
    Maybe<Array<ResolversTypes['SongTag']>>,
    ParentType,
    ContextType
  >;
  tagSearchString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SongTagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SongTag'] = ResolversParentTypes['SongTag']
> = {
  songId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tagId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  song?: Resolver<ResolversTypes['Song'], ParentType, ContextType>;
  tag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  songs?: Resolver<
    Maybe<Array<ResolversTypes['SongTag']>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
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
  songFavourites?: Resolver<
    Maybe<Array<ResolversTypes['UserSongFavourites']>>,
    ParentType,
    ContextType
  >;
  artistFollows?: Resolver<
    Maybe<Array<ResolversTypes['UserArtistFollowing']>>,
    ParentType,
    ContextType
  >;
  labelFollows?: Resolver<
    Maybe<Array<ResolversTypes['UserLabelFollowing']>>,
    ParentType,
    ContextType
  >;
  playlistFollows?: Resolver<
    Maybe<Array<ResolversTypes['UserPlaylistFollowing']>>,
    ParentType,
    ContextType
  >;
  playlists?: Resolver<
    Maybe<Array<ResolversTypes['UserPlaylist']>>,
    ParentType,
    ContextType
  >;
  artists?: Resolver<
    Maybe<Array<ResolversTypes['UserArtist']>>,
    ParentType,
    ContextType
  >;
  labels?: Resolver<
    Maybe<Array<ResolversTypes['UserLabel']>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserArtistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserArtist'] = ResolversParentTypes['UserArtist']
> = {
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  artistId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  artist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserLabelResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserLabel'] = ResolversParentTypes['UserLabel']
> = {
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  labelId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['Label'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserLabelFollowingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserLabelFollowing'] = ResolversParentTypes['UserLabelFollowing']
> = {
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  labelId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['Label'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserPlaylistFollowingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserPlaylistFollowing'] = ResolversParentTypes['UserPlaylistFollowing']
> = {
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  playlistId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  playlist?: Resolver<ResolversTypes['Playlist'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>;
  Artist?: ArtistResolvers<ContextType>;
  ArtistLabel?: ArtistLabelResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Label?: LabelResolvers<ContextType>;
  ListeningStats?: ListeningStatsResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Playlist?: PlaylistResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Search?: SearchResolvers<ContextType>;
  Song?: SongResolvers<ContextType>;
  SongArtistSupportingArtist?: SongArtistSupportingArtistResolvers<ContextType>;
  SongPlaylist?: SongPlaylistResolvers<ContextType>;
  SongTag?: SongTagResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserArtist?: UserArtistResolvers<ContextType>;
  UserArtistFollowing?: UserArtistFollowingResolvers<ContextType>;
  UserLabel?: UserLabelResolvers<ContextType>;
  UserLabelFollowing?: UserLabelFollowingResolvers<ContextType>;
  UserPlaylist?: UserPlaylistResolvers<ContextType>;
  UserPlaylistFollowing?: UserPlaylistFollowingResolvers<ContextType>;
  UserSongFavourites?: UserSongFavouritesResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
