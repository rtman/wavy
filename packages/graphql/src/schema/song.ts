import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    songs: [Song]
    song(id: ID!): Song
    songsById(ids: [ID]!): [Song]
    searchSongs(query: String!): [Song]
    searchSongsWithArtistsAlbums(query: String!): [SongArtistAlbum]
  }

  extend type Mutation {
    createNewSong(
      title: String!
      artist_id: ID!
      album_id: ID!
      genres: [String!]
      url: String!
      image: String!
      duration: Int!
      date: Date!
    ): Song!
    updateSongTitle(id: ID!, title: String!): Song!
    deleteSong(id: ID!): Boolean!
  }

  type Song {
    title: String
    artist_id: ID
    artist_name: String
    album_title: String
    album_id: ID
    genres: [String]
    url: String
    image: String
    duration: Int
    date: Date
    id: ID
    createdAt: Date
    updatedAt: Date
  }

  type SongArtistAlbum {
    title: String
    artist_name: String
    artist_id: ID
    album_id: ID
    album_title: String
    genres: [String]
    url: String
    image: String
    duration: Int
    date: Date
    song_id: ID
    createdAt: Date
    updatedAt: Date
  }
`;
