import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    songs: [Song]
    songById(id: ID!): Song
    songsByIdWithAlbumArtistsJoined(ids: [ID]!): [SongsWithAlbumArtistsJoined]
    searchSongs(query: String!): [Song]
  }

  extend type Mutation {
    createNewSong(
      title: String!
      artist_id: ID!
      album_id: ID!
      genres: [String!]
      url: String!
      image: String!
      date: Date!
    ): Song!
    updateSongTitle(id: ID!, title: String!): Song!
    deleteSong(id: ID!): Boolean!
  }

  type Song {
    title: String
    id: ID
    url: String
    image: String
    artist_name: String
    artist_id: ID
    album_id: ID
    album_title: String
    genres: [String]
    date: Date
    createdAt: Date
    updatedAt: Date
  }
`;
