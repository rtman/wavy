import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    songs: [Song]
    songById(id: ID!): Song
    searchSongs(query: String!): [Song]
  }

  extend type Mutation {
    createNewSong(
      title: String!
      artistId: ID!
      albumId: ID!
      genres: [String!]
      url: String!
      image: String!
      releaseDate: Date!
    ): Song!
    updateSongTitle(id: ID!, title: String!): Song!
    deleteSong(id: ID!): Int!
  }

  type Song {
    id: ID
    title: String
    url: String
    image: String
    artistId: ID
    artist: Artist
    usersFavourited: [User]
    supportingArtists: [Artist]
    playlists: [Playlist]
    albumId: ID
    album: Album
    genres: [String]
    releaseDate: Date
    createdAt: Date
    updatedAt: Date
  }
`;
