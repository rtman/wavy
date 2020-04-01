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

export const ARTIST_BY_ID = gql`
  query ArtistById($id: ID!) {
    artistById(id: $id) {
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
          url
          image
          artist {
            id
            name
            image
          }
          album {
            id
            title
            image
          }
        }
      }
      songs {
        id
        title
        image
        url
        artist {
          id
          name
          image
        }
        album {
          id
          title
          image
        }
      }
    }
  }
`;

export const ALBUM_BY_ID = gql`
  query AlbumById($id: ID!) {
    albumById(id: $id) {
      title
      image
      description
      songs {
        id
        title
        image
        url
        artistId
        artist {
          id
          name
        }
        albumId
        album {
          id
          title
        }
      }
      artist {
        name
        id
        image
      }
    }
  }
`;

export const PLAYLIST_BY_ID = gql`
  query PlaylistById($id: ID!) {
    playlistById(id: $id) {
      title
      description
      image
      users {
        id
        firstName
        lastName
      }
      songs {
        id
        title
        image
        url
        album {
          id
          title
          image
        }
        artist {
          id
          name
          image
        }
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
      users {
        id
        firstName
        lastName
      }
      songs {
        id
        title
        url
        image
        artist {
          id
          name
          image
        }
        album {
          id
          title
          image
        }
      }
    }
  }
`;

export const SEARCH_SONGS_QUERY = gql`
  query SearchSongs($query: String!) {
    searchSongs(query: $query) {
      id
      title
      artist {
        id
        name
        image
      }
      album {
        id
        title
        image
      }
      genres
      url
      image
      releaseDate
    }
  }
`;

export const SONGS_BY_ID_QUERY = gql`
  query SongsById($ids: [ID]!) {
    songsById(ids: $ids) {
      id
      title
      url
      image
      artist {
        id
        name
        image
      }
      album {
        id
        title
        image
      }
    }
  }
`;

export const USER_BY_ID = gql`
  query userById($id: String!) {
    userById(id: $id) {
      id
      firstName
      lastName
      email
      following {
        id
        name
        image
      }
      favourites {
        id
        title
        image
        url
        artist {
          id
          name
          image
        }
        album {
          id
          title
          image
        }
      }
      recentlyPlayed {
        id
        title
        image
        url
        artist {
          id
          name
          image
        }
        album {
          id
          title
          image
        }
      }
      playlists {
        id
        title
        description
        users {
          id
          firstName
          lastName
        }
        songs {
          id
          title
          url
          image
          artist {
            id
            name
            image
          }
          album {
            id
            title
            image
          }
        }
      }
    }
  }
`;
