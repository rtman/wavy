import {gql} from 'apollo-server-express';

export default gql`
  # extend type Query {
  # artists: [Artist]
  # artistById(id: ID!): Artist
  # artistsById(ids: [ID]!): [Artist]
  # # artistWithSongsAlbumsJoined(id: ID!): ArtistWithSongsAlbumsJoinedFormatted
  # searchArtists(query: String!): [Artist]
  # }

  # extend type Mutation {
  # createNewArtist(
  #   artist_name: String!
  #   artist_image: String
  #   artist_description: String
  # ): Artist!
  # deleteArtist(artist_id: ID!): Boolean!
  # }

  type Artist {
    artist_id: ID
    artist_name: String
    artist_albums: [Album]
    artist_songs: [Song]
    artist_song_ids: [ID]
    artist_image: String
    artist_description: String
    artist_createdAt: Date
    artist_updatedAt: Date
  }
`;
