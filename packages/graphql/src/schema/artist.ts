import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    artists: [Artist]
    artist(id: ID!): Artist
    artistAll(id: ID!): ArtistAllResult
    searchArtists(query: String!): [Artist]
  }

  extend type Mutation {
    createNewArtist(
      name: String!
      album_ids: [ID]
      song_ids: [ID]
      image: String
      description: String
    ): Artist!
    deleteArtist(id: ID!): Boolean!
  }

  type Artist {
    name: String
    album_ids: [ID]
    song_ids: [ID]
    description: String
    image: String
    id: ID
    createdAt: Date
    updatedAt: Date
  }

  type ArtistSongsAlbumsJoined {
    name: String
    image: String
    artist_id: ID
    createdAt: Date
    updatedAt: Date
    album_id: ID
    album_title: String
    album_image: String
    song_id: ID
    genres: [String]
    song_title: String
    song_url: String
    duration: Int
    song_image: String
    song_date: Date
    song_createdAt: Date
    song_updatedAt: Date
    description: String
  }

  type ArtistAllResult {
    name: String
    image: String
    description: String
    albums: [Album]
  }
`;
