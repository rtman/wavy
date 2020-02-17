import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    albums: [Album]
    album(id: ID!): Album
    searchAlbums(query: String!): [Album]
  }

  extend type Mutation {
    createNewAlbum(title: String!, artist_id: ID!, artwork: String!): Song!
    deleteAlbum(id: ID!): Boolean!
  }

  type Album {
    title: String
    artist_id: ID
    song_ids: [ID]
    description: String
    artwork: String
    id: ID
    createdAt: Date
    updatedAt: Date
  }

  type AlbumSongsArtist {
    title: String
    artist_id: ID
    artists: [Artist]
    song_ids: [ID]
    songs: [Song]
    description: String
    artwork: String
    id: ID
    createdAt: Date
    updatedAt: Date
  }
`;
