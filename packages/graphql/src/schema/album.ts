import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    albums: [Album]
    albumById(id: ID!): Album
    # albumWithSongsArtistsJoined(id: ID!): AlbumWithSongsArtistsJoinedFormatted
    searchAlbums(query: String!): [Album]
  }

  extend type Mutation {
    createNewAlbum(title: String!, artistId: ID!, title: String!): Album!
    deleteAlbum(id: ID!): Int!
  }

  type Album {
    id: ID
    artistId: ID
    artist: Artist
    title: String
    songs: [Song]
    image: String
    description: String
    createdAt: Date
    updatedAt: Date
  }
`;
