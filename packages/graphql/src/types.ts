export type Maybe<T> = T | null;
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

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createNewSong: Song;
  updateSongTitle: Song;
  deleteSong: Scalars['Boolean'];
};

export type MutationCreateNewSongArgs = {
  title: Scalars['String'];
  artist: Scalars['String'];
};

export type MutationUpdateSongTitleArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type MutationDeleteSongArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  songs?: Maybe<Array<Maybe<Song>>>;
  song?: Maybe<Song>;
};

export type QuerySongArgs = {
  id: Scalars['ID'];
};

export type Song = {
  __typename?: 'Song';
  title?: Maybe<Scalars['String']>;
  artist?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
};
