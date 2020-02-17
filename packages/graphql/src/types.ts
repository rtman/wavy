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
  description?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
};

export type AlbumSongsArtist = {
   __typename?: 'AlbumSongsArtist',
  title?: Maybe<Scalars['String']>,
  artist_id?: Maybe<Scalars['ID']>,
  artists?: Maybe<Array<Maybe<Artist>>>,
  song_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  songs?: Maybe<Array<Maybe<Song>>>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
};

export type Artist = {
   __typename?: 'Artist',
  name?: Maybe<Scalars['String']>,
  album_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  song_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  description?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
};

export type ArtistSongs = {
   __typename?: 'ArtistSongs',
  name?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  artist_id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
  album_id?: Maybe<Scalars['ID']>,
  album_title?: Maybe<Scalars['String']>,
  album_image?: Maybe<Scalars['String']>,
  song_id?: Maybe<Scalars['ID']>,
  song_title?: Maybe<Scalars['String']>,
  song_url?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
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
  createNewSong: Song,
  updateSongTitle: Song,
  deleteSong: Scalars['Boolean'],
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


export type MutationCreateNewSongArgs = {
  title: Scalars['String'],
  artist_id: Scalars['ID'],
  album_id: Scalars['ID'],
  genres?: Maybe<Array<Scalars['String']>>,
  url: Scalars['String'],
  image: Scalars['String'],
  duration: Scalars['Int'],
  date: Scalars['Date']
};


export type MutationUpdateSongTitleArgs = {
  id: Scalars['ID'],
  title: Scalars['String']
};


export type MutationDeleteSongArgs = {
  id: Scalars['ID']
};

export type Query = {
   __typename?: 'Query',
  _?: Maybe<Scalars['Boolean']>,
  artists?: Maybe<Array<Maybe<Artist>>>,
  artist?: Maybe<Artist>,
  artistAll?: Maybe<Array<Maybe<ArtistSongs>>>,
  searchArtists?: Maybe<Array<Maybe<Artist>>>,
  albums?: Maybe<Array<Maybe<Album>>>,
  album?: Maybe<Album>,
  searchAlbums?: Maybe<Array<Maybe<Album>>>,
  songs?: Maybe<Array<Maybe<Song>>>,
  song?: Maybe<Song>,
  searchSongs?: Maybe<Array<Maybe<Song>>>,
  searchSongsWithArtistsAlbums?: Maybe<Array<Maybe<SongArtistAlbum>>>,
};


export type QueryArtistArgs = {
  id: Scalars['ID']
};


export type QueryArtistAllArgs = {
  id: Scalars['ID']
};


export type QuerySearchArtistsArgs = {
  query: Scalars['String']
};


export type QueryAlbumArgs = {
  id: Scalars['ID']
};


export type QuerySearchAlbumsArgs = {
  query: Scalars['String']
};


export type QuerySongArgs = {
  id: Scalars['ID']
};


export type QuerySearchSongsArgs = {
  query: Scalars['String']
};


export type QuerySearchSongsWithArtistsAlbumsArgs = {
  query: Scalars['String']
};

export type Song = {
   __typename?: 'Song',
  title?: Maybe<Scalars['String']>,
  artist_id?: Maybe<Scalars['ID']>,
  album_id?: Maybe<Scalars['ID']>,
  genres?: Maybe<Array<Maybe<Scalars['String']>>>,
  url?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Date']>,
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
};

export type SongArtistAlbum = {
   __typename?: 'SongArtistAlbum',
  title?: Maybe<Scalars['String']>,
  artist_name?: Maybe<Scalars['String']>,
  artist_id?: Maybe<Scalars['ID']>,
  album_id?: Maybe<Scalars['ID']>,
  album_title?: Maybe<Scalars['String']>,
  genres?: Maybe<Array<Maybe<Scalars['String']>>>,
  url?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Date']>,
  song_id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['Date']>,
  updatedAt?: Maybe<Scalars['Date']>,
};

export type Subscription = {
   __typename?: 'Subscription',
  _?: Maybe<Scalars['Boolean']>,
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
  ArtistSongs: ResolverTypeWrapper<ArtistSongs>,
  Album: ResolverTypeWrapper<Album>,
  Song: ResolverTypeWrapper<Song>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  SongArtistAlbum: ResolverTypeWrapper<SongArtistAlbum>,
  Mutation: ResolverTypeWrapper<{}>,
  Subscription: ResolverTypeWrapper<{}>,
  AlbumSongsArtist: ResolverTypeWrapper<AlbumSongsArtist>,
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
  ArtistSongs: ArtistSongs,
  Album: Album,
  Song: Song,
  Int: Scalars['Int'],
  SongArtistAlbum: SongArtistAlbum,
  Mutation: {},
  Subscription: {},
  AlbumSongsArtist: AlbumSongsArtist,
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  song_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type AlbumSongsArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlbumSongsArtist'] = ResolversParentTypes['AlbumSongsArtist']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>,
  song_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  album_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  song_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type ArtistSongsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistSongs'] = ResolversParentTypes['ArtistSongs']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  album_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  album_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  album_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  song_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  song_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  song_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
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
  createNewSong?: Resolver<ResolversTypes['Song'], ParentType, ContextType, RequireFields<MutationCreateNewSongArgs, 'title' | 'artist_id' | 'album_id' | 'url' | 'image' | 'duration' | 'date'>>,
  updateSongTitle?: Resolver<ResolversTypes['Song'], ParentType, ContextType, RequireFields<MutationUpdateSongTitleArgs, 'id' | 'title'>>,
  deleteSong?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteSongArgs, 'id'>>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>,
  artist?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType, RequireFields<QueryArtistArgs, 'id'>>,
  artistAll?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArtistSongs']>>>, ParentType, ContextType, RequireFields<QueryArtistAllArgs, 'id'>>,
  searchArtists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType, RequireFields<QuerySearchArtistsArgs, 'query'>>,
  albums?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType>,
  album?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<QueryAlbumArgs, 'id'>>,
  searchAlbums?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType, RequireFields<QuerySearchAlbumsArgs, 'query'>>,
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>,
  song?: Resolver<Maybe<ResolversTypes['Song']>, ParentType, ContextType, RequireFields<QuerySongArgs, 'id'>>,
  searchSongs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType, RequireFields<QuerySearchSongsArgs, 'query'>>,
  searchSongsWithArtistsAlbums?: Resolver<Maybe<Array<Maybe<ResolversTypes['SongArtistAlbum']>>>, ParentType, ContextType, RequireFields<QuerySearchSongsWithArtistsAlbumsArgs, 'query'>>,
};

export type SongResolvers<ContextType = any, ParentType extends ResolversParentTypes['Song'] = ResolversParentTypes['Song']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  album_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
};

export type SongArtistAlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['SongArtistAlbum'] = ResolversParentTypes['SongArtistAlbum']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  artist_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  album_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  album_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  song_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
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

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>,
  AlbumSongsArtist?: AlbumSongsArtistResolvers<ContextType>,
  Artist?: ArtistResolvers<ContextType>,
  ArtistSongs?: ArtistSongsResolvers<ContextType>,
  Date?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Song?: SongResolvers<ContextType>,
  SongArtistAlbum?: SongArtistAlbumResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  Upload?: GraphQLScalarType,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
