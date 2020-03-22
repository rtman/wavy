import {gql} from 'apollo-server-express';

export default gql`
  # extend type Query {
  # songs: [Song]
  # songById(song_id: ID!): Song
  # # songsByIdWithAlbumArtistsJoined(song_ids: [ID]!): [Song]
  # searchSongs(query: String!): [Song]
  # }

  # extend type Mutation {
  # createNewSong(
  #   song_title: String!
  #   song_artist_id: ID!
  #   song_album_id: ID!
  #   song_genres: [ID!]
  #   song_url: String!
  #   song_image: String!
  #   song_release_date: Date!
  # ): Song!
  # updateSongTitle(song_id: ID!, song_title: String!): Song!
  # deleteSong(song_id: ID!): Boolean!
  # }

  type Song {
    song_id: ID
    song_title: String
    song_url: String
    song_artist_id: ID
    song_supporting_artists: [Artist]
    song_album_id: ID
    song_album: Album
    song_genres: [String]
    song_release_date: Date
    song_createdAt: Date
    song_updatedAt: Date
  }
`;
