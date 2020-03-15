import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    artists: [Artist]
    artistById(id: ID!): Artist
    artistsById(ids: [ID]!): [Artist]
    artistWithSongsAlbumsJoined(id: ID!): ArtistWithSongsAlbumsJoinedFormatted
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
    description: String
    image: String
    id: ID
    createdAt: Date
    updatedAt: Date
    album_ids: [ID]
    song_ids: [ID]
  }
`;
