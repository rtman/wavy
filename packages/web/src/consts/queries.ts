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
  query ArtistById($id: String!) {
    artistById(id: $id) {
      id
      name
      description
      image
      albums {
        id
        title
        image
        songs {
          id
          title
          url
          image
          supportingArtists {
            createdAt
            artist {
              id
              name
              image
            }
          }
          usersRecentlyPlayed {
            createdAt
            user {
              id
              firstName
              lastName
            }
          }
        }
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
      }
      usersFollowing {
        createdAt
        user {
          id
          firstName
          lastName
        }
      }
      supportingArtistOn {
        createdAt
        song {
          id
          title
          url
        }
      }
      # songs {
      #   id,
      #   title,
      #   url,
      #   image
      #   album{
      #     id
      #     title,
      #     image
      #   }
      # }
    }
  }
`;

export const ALBUM_BY_ID = gql`
  query AlbumById($id: String!) {
    albumById(id: $id) {
      id
      title
      image
      description
      songs {
        id
        title
        url
        image
        artistId
        albumId
        artist {
          id
          name
        }
        supportingArtists {
          createdAt
          artist {
            id
            name
            image
          }
        }
        usersFavourited {
          createdAt
          user {
            id
            firstName
            lastName
          }
        }
      }
      artist {
        id
        name
        image
        albums {
          title
          id
          image
        }
      }
    }
  }
`;

export const PLAYLIST_BY_ID = gql`
  query PlaylistById($id: String!) {
    playlistById(id: $id) {
      title
      description
      image
      users {
        createdAt
        user {
          id
          firstName
          lastName
        }
      }
      songs {
        createdAt
        song {
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

export const PLAYLISTS_BY_USER_ID = gql`
  query PlaylistsByUserId($userId: String!) {
    playlistsByUserId(userId: $userId) {
      id
      title
      description
      image
      users {
        createdAt
        user {
          id
          firstName
          lastName
        }
      }
      songs {
        createdAt
        song {
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
      url
      image
      releaseDate
    }
  }
`;

export const SEARCH_ARTISTS_QUERY = gql`
  query SearchArtists($query: String!) {
    searchArtists(query: $query) {
      id
      name
      image
    }
  }
`;

export const SEARCH_ALBUMS_QUERY = gql`
  query SearchAlbums($query: String!) {
    searchAlbums(query: $query) {
      id
      title
      image
      artist {
        id
        name
        image
      }
    }
  }
`;

export const SEARCH_PLAYLISTS_QUERY = gql`
  query SearchPlaylists($query: String!) {
    searchPlaylists(query: $query) {
      id
      title
      image
      users {
        createdAt
        user {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export const SEARCH_LABELS_QUERY = gql`
  query SearchLabels($query: String!) {
    searchLabels(query: $query) {
      id
      name
      image
    }
  }
`;

export const LABEL_BY_ID = gql`
  query LabelById($id: String!) {
    labelById(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
      artists {
        createdAt
        artist {
          name
          id
          description
          image
        }
      }
      albums {
        id
        title
        image
        description
        artist {
          id
          name
          image
        }
      }
      songs {
        createdAt
        id
        title
        artist {
          name
          id
          image
        }
        image
        url
      }
    }
  }
`;

export const SONGS_BY_ID_QUERY = gql`
  query SongsById($ids: [String!]!) {
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
      password
      following {
        createdAt
        artist {
          id
          name
          image
        }
      }
      favourites {
        createdAt
        song {
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
          supportingArtists {
            createdAt
            artist {
              id
              name
              image
            }
          }
        }
      }
      playlists {
        createdAt
        updatedAt
        playlist {
          id
          title
          image
          description
        }
      }
    }
  }
`;
