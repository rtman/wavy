import { gql } from 'apollo-boost';

export const ARTISTS_BY_ID = gql`
  query ArtistsByID($ids: [ID]!) {
    artistsById(ids: $ids) {
      id
      name
      image
      description
      album_ids
    }
  }
`;

export const ARTIST_ALL = gql`
  query ArtistWithSongsAlbumsJoined($id: ID!) {
    artistWithSongsAlbumsJoined(id: $id) {
      name
      image
      description
      albums {
        id
        title
        image
        songs {
          id
          title
          artist_name
          album_title
          artist_id
          album_id
          image
          url
        }
      }
    }
  }
`;

export const ALBUM_BY_ID = gql`
  query AlbumById($id: ID!) {
    albumById(id: $id) {
      album_title
      album_image
      album_description
      album_songs {
        songId
        song_title
        song_image
        song_url
      }
      album_artist {
        artist_name
        artist_id
        artist_image
      }
    }
  }
`;

export const PLAYLIST_BY_ID_WITH_SONGS_QUERY = gql`
  query PlaylistByIdWithSongs($id: ID!) {
    playlistByIdWithSongs(id: $id) {
      title
      description
      image
      user_ids
      songs {
        id
        album_id
        artist_id
        artist_name
        title
        image
        url
      }
    }
  }
`;

export const PLAYLISTS_BY_USER_ID = gql`
  query PlaylistsByUserId($userId: String!) {
    playlistsByUserId(userId: $userId) {
      id
      title
      description
      image
      user_ids
      songs
    }
  }
`;

export const SEARCH_SONGS_QUERY = gql`
  query SearchSongs($query: String!) {
    searchSongs(query: $query) {
      id
      title
      artist_id
      artist_name
      album_title
      album_id
      genres
      url
      image
      date
    }
  }
`;

export const SONGS_BY_ID_QUERY = gql`
  query SongsByIdWithAlbumArtistsJoined($ids: [ID]!) {
    songsByIdWithAlbumArtistsJoined(ids: $ids) {
      artist_id
      title
      album_id
      genres
      url
      image
      date
      id
      createdAt
      updatedAt
      artist_name
      album_title
    }
  }
`;

export const USER_BY_ID = gql`
  query UserById($id: String!) {
    userById(id: $id) {
      id
      firstName
      lastName
      email
      following
      favourites
      recentlyPlayed
      playlists
    }
  }
`;

export const USER_BY_ID_WITH_PLAYLISTS_JOINED = gql`
  query UserByIdWithPlaylistsJoined($id: String!) {
    userByIdWithPlaylistsJoined(id: $id) {
      id
      firstName
      lastName
      email
      following
      favourites
      recentlyPlayed
      playlists {
        id
        title
        description
        songs
        user_ids
      }
    }
  }
`;
