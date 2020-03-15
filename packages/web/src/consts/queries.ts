import { gql } from 'apollo-boost';

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

export const ALBUM_ALL = gql`
  query AlbumWithSongsArtistsJoined($id: ID!) {
    albumWithSongsArtistsJoined(id: $id) {
      title
      image
      description
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
  query PlaylistsByUserId($userId: ID!) {
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
