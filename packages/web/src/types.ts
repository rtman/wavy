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
  id: Scalars['ID'];
  songIds: Array<Scalars['ID']>;
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
  imageRef: Scalars['String'];
  imageUrl: Scalars['String'];
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
  imageRef: Scalars['String'];
  imageUrl: Scalars['String'];
  description: Scalars['String'];
  labels?: Maybe<Array<ArtistLabel>>;
  usersFollowing?: Maybe<Array<UserArtistFollowing>>;
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
  id: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  songsToAdd: Array<NewSongArgs>;
  artistId: Scalars['String'];
  imageRef: Scalars['String'];
  imageUrl: Scalars['String'];
};

export type CreateArtistArgs = {
  artistId: Scalars['String'];
  userId: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  imageRef: Scalars['String'];
  imageUrl: Scalars['String'];
};

export type CreateLabelArgs = {
  labelId: Scalars['String'];
  userId: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  imageRef: Scalars['String'];
  imageUrl: Scalars['String'];
};

export type CreatePlaylistArgs = {
  userId: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  imageRef?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
};

export type CreateSongArgs = {
  title: Scalars['String'];
  artistId: Scalars['String'];
  imageRef: Scalars['String'];
  imageUrl: Scalars['String'];
};

/** Create a new user */
export type CreateUserArgs = {
  id: Scalars['String'];
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
  imageRef: Scalars['String'];
  imageUrl: Scalars['String'];
  description: Scalars['String'];
  artists?: Maybe<Array<ArtistLabel>>;
  albums?: Maybe<Array<Album>>;
  songs?: Maybe<Array<Song>>;
  users?: Maybe<Array<UserLabel>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAlbum: Album;
  deleteAlbum: Scalars['Boolean'];
  createArtist: Artist;
  deleteArtist: Scalars['Boolean'];
  createLabel: Label;
  deleteLabel: Scalars['Boolean'];
  createSong: Song;
  updateSongTitle: Scalars['Boolean'];
  deleteSong: Scalars['Boolean'];
  updateSongPlayCount: Scalars['Boolean'];
  createPlaylist: Playlist;
  updatePlaylistInfo: Playlist;
  addPlaylistSongs: Scalars['Boolean'];
  removePlaylistSongs: Scalars['Boolean'];
  deletePlaylist: Scalars['Boolean'];
  createUser: User;
  updateFollowing: Scalars['Boolean'];
  updateFavourites: Scalars['Boolean'];
  updatePlaylists: Scalars['Boolean'];
  updateRecentlyPlayed: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
};

export type MutationCreateAlbumArgs = {
  input: CreateAlbumArgs;
};

export type MutationDeleteAlbumArgs = {
  id: Scalars['String'];
};

export type MutationCreateArtistArgs = {
  input: CreateArtistArgs;
};

export type MutationDeleteArtistArgs = {
  id: Scalars['String'];
};

export type MutationCreateLabelArgs = {
  input: CreateLabelArgs;
};

export type MutationDeleteLabelArgs = {
  id: Scalars['String'];
};

export type MutationCreateSongArgs = {
  input: CreateSongArgs;
};

export type MutationUpdateSongTitleArgs = {
  input: UpdateSongTitleArgs;
};

export type MutationDeleteSongArgs = {
  id: Scalars['String'];
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

export type MutationUpdateFollowingArgs = {
  input: UpdateFollowingArgs;
};

export type MutationUpdateFavouritesArgs = {
  input: UpdateFavouritesArgs;
};

export type MutationUpdatePlaylistsArgs = {
  input: UpdatePlaylistsArgs;
};

export type MutationUpdateRecentlyPlayedArgs = {
  input: UpdateRecentlyPlayedArgs;
};

export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};

export type NewSongArgs = {
  title: Scalars['String'];
  ref: Scalars['String'];
  url: Scalars['String'];
};

export type Playlist = {
  __typename?: 'Playlist';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  imageRef?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
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
  newArtists: Array<Artist>;
  artistById: Artist;
  artistsById: Array<Artist>;
  searchArtists: Array<Artist>;
  labels: Array<Label>;
  newLabels: Array<Label>;
  labelById: Label;
  searchLabels: Array<Label>;
  songs: Array<Song>;
  songById: Song;
  songsById: Array<Song>;
  searchSongs: Array<Song>;
  playlists: Array<Playlist>;
  playlistById: Playlist;
  playlistsById: Array<Playlist>;
  playlistsByUserId: Array<Playlist>;
  searchPlaylists: Array<Playlist>;
  userIdExists: User;
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

export type QueryLabelByIdArgs = {
  id: Scalars['String'];
};

export type QuerySearchLabelsArgs = {
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

export type QueryUserIdExistsArgs = {
  id: Scalars['String'];
};

export type QueryUserByIdArgs = {
  id: Scalars['String'];
};

export type RemovePlaylistSongsArgs = {
  id: Scalars['ID'];
  songIds: Array<Scalars['ID']>;
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
  ref: Scalars['String'];
  url: Scalars['String'];
  imageRef: Scalars['String'];
  imageUrl: Scalars['String'];
  releaseDate: Scalars['DateTime'];
  playCount: Scalars['Float'];
  supportingArtists?: Maybe<Array<SongArtistSupportingArtist>>;
  playlists?: Maybe<Array<SongPlaylist>>;
  usersFavourited?: Maybe<Array<UserSongFavourites>>;
  usersRecentlyPlayed?: Maybe<Array<UserSongRecentlyPlayed>>;
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

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  title: Scalars['String'];
  songs?: Maybe<Array<SongTag>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UpdateFavouritesArgs = {
  userId: Scalars['String'];
  songId: Scalars['String'];
};

export type UpdateFollowingArgs = {
  userId: Scalars['String'];
  artistId: Scalars['String'];
};

export type UpdatePlayCountArgs = {
  id: Scalars['String'];
};

export type UpdatePlaylistInfoArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageRef?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
};

export type UpdatePlaylistsArgs = {
  userId: Scalars['String'];
  playlistId: Scalars['String'];
};

export type UpdateRecentlyPlayedArgs = {
  userId: Scalars['String'];
  songId: Scalars['String'];
};

export type UpdateSongTitleArgs = {
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
  UserSongRecentlyPlayed: ResolverTypeWrapper<UserSongRecentlyPlayed>;
  UserPlaylist: ResolverTypeWrapper<UserPlaylist>;
  Playlist: ResolverTypeWrapper<Playlist>;
  SongPlaylist: ResolverTypeWrapper<SongPlaylist>;
  UserArtist: ResolverTypeWrapper<UserArtist>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  SongArtistSupportingArtist: ResolverTypeWrapper<SongArtistSupportingArtist>;
  SongTag: ResolverTypeWrapper<SongTag>;
  Tag: ResolverTypeWrapper<Tag>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateAlbumArgs: CreateAlbumArgs;
  NewSongArgs: NewSongArgs;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateArtistArgs: CreateArtistArgs;
  CreateLabelArgs: CreateLabelArgs;
  CreateSongArgs: CreateSongArgs;
  UpdateSongTitleArgs: UpdateSongTitleArgs;
  UpdatePlayCountArgs: UpdatePlayCountArgs;
  CreatePlaylistArgs: CreatePlaylistArgs;
  UpdatePlaylistInfoArgs: UpdatePlaylistInfoArgs;
  AddPlaylistSongsArgs: AddPlaylistSongsArgs;
  RemovePlaylistSongsArgs: RemovePlaylistSongsArgs;
  DeletePlaylistArgs: DeletePlaylistArgs;
  CreateUserArgs: CreateUserArgs;
  UpdateFollowingArgs: UpdateFollowingArgs;
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
  Label: Label;
  ArtistLabel: ArtistLabel;
  DateTime: Scalars['DateTime'];
  UserLabel: UserLabel;
  User: User;
  UserSongFavourites: UserSongFavourites;
  UserArtistFollowing: UserArtistFollowing;
  UserSongRecentlyPlayed: UserSongRecentlyPlayed;
  UserPlaylist: UserPlaylist;
  Playlist: Playlist;
  SongPlaylist: SongPlaylist;
  UserArtist: UserArtist;
  Float: Scalars['Float'];
  SongArtistSupportingArtist: SongArtistSupportingArtist;
  SongTag: SongTag;
  Tag: Tag;
  Mutation: {};
  CreateAlbumArgs: CreateAlbumArgs;
  NewSongArgs: NewSongArgs;
  Boolean: Scalars['Boolean'];
  CreateArtistArgs: CreateArtistArgs;
  CreateLabelArgs: CreateLabelArgs;
  CreateSongArgs: CreateSongArgs;
  UpdateSongTitleArgs: UpdateSongTitleArgs;
  UpdatePlayCountArgs: UpdatePlayCountArgs;
  CreatePlaylistArgs: CreatePlaylistArgs;
  UpdatePlaylistInfoArgs: UpdatePlaylistInfoArgs;
  AddPlaylistSongsArgs: AddPlaylistSongsArgs;
  RemovePlaylistSongsArgs: RemovePlaylistSongsArgs;
  DeletePlaylistArgs: DeletePlaylistArgs;
  CreateUserArgs: CreateUserArgs;
  UpdateFollowingArgs: UpdateFollowingArgs;
  UpdateFavouritesArgs: UpdateFavouritesArgs;
  UpdatePlaylistsArgs: UpdatePlaylistsArgs;
  UpdateRecentlyPlayedArgs: UpdateRecentlyPlayedArgs;
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
  imageRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
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
  imageRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  imageRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  deleteAlbum?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAlbumArgs, 'id'>
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
    RequireFields<MutationDeleteArtistArgs, 'id'>
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
    RequireFields<MutationDeleteLabelArgs, 'id'>
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
    RequireFields<MutationDeleteSongArgs, 'id'>
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
    ResolversTypes['Playlist'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePlaylistInfoArgs, 'input'>
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
  updateRecentlyPlayed?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateRecentlyPlayedArgs, 'input'>
  >;
  deleteUser?: Resolver<
    ResolversTypes['Boolean'],
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
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  imageRef?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
    RequireFields<QueryAlbumByIdArgs, 'id'>
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
  labels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType>;
  newLabels?: Resolver<Array<ResolversTypes['Label']>, ParentType, ContextType>;
  labelById?: Resolver<
    ResolversTypes['Label'],
    ParentType,
    ContextType,
    RequireFields<QueryLabelByIdArgs, 'id'>
  >;
  searchLabels?: Resolver<
    Array<ResolversTypes['Label']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchLabelsArgs, 'query'>
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
  userIdExists?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<QueryUserIdExistsArgs, 'id'>
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
  labelId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['Label']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ref?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageRef?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
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
  usersRecentlyPlayed?: Resolver<
    Maybe<Array<ResolversTypes['UserSongRecentlyPlayed']>>,
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>;
  Artist?: ArtistResolvers<ContextType>;
  ArtistLabel?: ArtistLabelResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Label?: LabelResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Playlist?: PlaylistResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Song?: SongResolvers<ContextType>;
  SongArtistSupportingArtist?: SongArtistSupportingArtistResolvers<ContextType>;
  SongPlaylist?: SongPlaylistResolvers<ContextType>;
  SongTag?: SongTagResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserArtist?: UserArtistResolvers<ContextType>;
  UserArtistFollowing?: UserArtistFollowingResolvers<ContextType>;
  UserLabel?: UserLabelResolvers<ContextType>;
  UserPlaylist?: UserPlaylistResolvers<ContextType>;
  UserSongFavourites?: UserSongFavouritesResolvers<ContextType>;
  UserSongRecentlyPlayed?: UserSongRecentlyPlayedResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
