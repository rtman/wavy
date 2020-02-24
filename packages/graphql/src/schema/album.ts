import {gql} from 'apollo-server-express';

export default gql`
  extend type Query {
    albums: [Album]
    album(id: ID!): Album
    albumAll(id: ID!): AlbumSongsArtist
    searchAlbums(query: String!): [Album]
  }

  extend type Mutation {
    createNewAlbum(title: String!, artist_id: ID!, image: String!): Album!
    deleteAlbum(id: ID!): Boolean!
  }

  type Album {
    title: String
    artist_id: ID
    song_ids: [ID]
    songs: [Song]
    description: String
    image: String
    id: ID
    createdAt: Date
    updatedAt: Date
  }

  type AlbumSongsArtist {
    title: String
    description: String
    image: String
    id: ID
    artist_id: ID
    artists: [Artist]
    song_ids: [ID]
    songs: [Song]
    createdAt: Date
    updatedAt: Date
  }

  type AlbumSongsJoined {
    album_id: ID
    album_title: String
    album_image: String
    album_description: String
    createdAt: Date
    updatedAt: Date
    artist_name: String
    artist_image: String
    artist_id: ID
    song_id: ID
    genres: [String]
    song_title: String
    song_url: String
    duration: Int
    song_image: String
    song_date: Date
    song_createdAt: Date
    song_updatedAt: Date
  }

  type AlbumAllResult {
    title: String
    image: String
    description: String
    artist_name: String
    artist_id: String
    artist_image: String
    songs: [Album]
  }
`;
