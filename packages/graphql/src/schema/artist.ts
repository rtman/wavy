import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    artists: [Artist]
    artist(id: ID!): Artist
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

  type ArtistAlbumsSongs {
    name: String
    album_ids: [ID]
    albums: [Album]
    song_ids: [ID]
    songs: [Song]
    description: String
    image: String
    id: ID
    createdAt: Date
    updatedAt: Date
  }
`;
