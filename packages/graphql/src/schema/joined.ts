import {gql} from 'apollo-server-express';

export default gql`
  # extend type Query {
  #   albumWithSongsArtistsJoined(id: ID!): SongsWithAlbumArtistsJoined
  #   artistsWithSongsAlbumsJoined(id: ID!): ArtistWithSongsAlbumsJoinedFormatted
  # }

  type SongsWithAlbumArtistsJoined {
    song_title: String
    song_url: String
    song_image: String
    song_date: Date
    song_createdAt: Date
    song_updatedAt: Date
    song_id: ID
    song_genres: [String]
    artist_name: String
    artist_image: String
    artist_id: ID
    artist_description: String
    artist_createdAt: Date
    artist_updatedAt: Date
    album_id: ID
    album_title: String
    album_image: String
    album_description: String
    album_createdAt: Date
    album_updatedAt: Date
  }

  type AlbumWithSongsArtistsJoined {
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

  type AlbumWithSongsArtistsJoinedFormatted {
    title: String
    image: String
    createdAt: Date
    updatedAt: Date
    description: String
    artist_name: String
    artist_id: String
    artist_image: String
    songs: [Song]
  }

  type ArtistWithSongsAlbumsJoinedFormatted {
    name: String
    image: String
    createdAt: Date
    updatedAt: Date
    description: String
    albums: [Album]
  }

  type PlaylistWithSongsJoined {
    playlist_title: String
    playlist_description: String
    playlist_image: String
    playlist_user_ids: [ID]
    song_title: String
    song_url: String
    song_image: String
    song_date: Date
    song_createdAt: Date
    song_updatedAt: Date
    song_id: ID
    song_genres: [String]
  }

  type PlaylistWithSongsJoinedFormatted {
    title: String
    description: String
    user_ids: [ID]
    image: String
    songs: [Song]
  }

  type UserWithPlaylistsJoined {
    id: String
    firstName: String
    lastName: String
    email: String
    password: String
    favourites: [ID]
    following: [ID]
    recentlyPlayed: [ID]
    playlists: [Playlist]
  }
`;
