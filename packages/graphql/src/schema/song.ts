import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    songs: [Song]
    song(id: ID!): Song
    searchSongs(query: String!): [Song]
    searchSongsWithArtists(query: String!): [SongArtist]
  }

  extend type Mutation {
    createNewSong(
      title: String!
      artist: String!
      album: String!
      genre: String!
      url: String!
      artwork: String!
      duration: Int!
      date: Date!
    ): Song!
    updateSongTitle(id: ID!, title: String!): Song!
    deleteSong(id: ID!): Boolean!
  }

  type Song {
    title: String
    artist_id: ID
    album: String
    genre: String
    url: String
    artwork: String
    duration: Int
    date: Date
    id: ID
    createdAt: Date
    updatedAt: Date
  }

  type SongArtist {
    title: String
    artist_name: String
    artist_id: ID
    album: String
    genre: String
    url: String
    artwork: String
    duration: Int
    date: Date
    song_id: ID
    createdAt: Date
    updatedAt: Date
  }
`;
