import {gql} from 'apollo-server-express';

export default gql`
  # extend type Query {
  # albums: [Album]
  # albumById(id: ID!): Album
  # # albumWithSongsArtistsJoined(id: ID!): AlbumWithSongsArtistsJoinedFormatted
  # searchAlbums(query: String!): [Album]
  # }

  # extend type Mutation {
  # createNewAlbum(
  #   album_title: String!
  #   album_artist_id: ID!
  #   album_title: String!
  # ): Album!
  # deleteAlbum(album_id: ID!): Boolean!
  # }

  type Album {
    album_id: ID
    album_artist_id: ID
    album_supporting_artists: [Artist]
    album_title: String
    album_songs: [Song]
    album_image: String
    album_description: String
    album_createdAt: Date
    album_updatedAt: Date
  }
`;
