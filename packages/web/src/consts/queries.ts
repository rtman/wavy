import { gql } from 'apollo-boost';

export const NEW_ARTISTS = gql`
  query NewArtists {
    newArtists {
      id
      name
      description
      imageUrl
      albums {
        id
        title
        imageUrl
        label {
          id
          name
          imageUrl
        }
        songs {
          id
          title
          url
          imageUrl
          playCount
          label {
            id
            name
            imageUrl
          }
          supportingArtists {
            createdAt
            artist {
              id
              name
              imageUrl
            }
          }
          # usersRecentlyPlayed {
          #   createdAt
          #   user {
          #     id
          #     firstName
          #     lastName
          #   }
          # }
        }
      }
      songs {
        id
        title
        url
        imageUrl
        playCount
        label {
          id
          name
          imageUrl
        }
        artist {
          id
          name
          imageUrl
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
    }
  }
`;

export const ARTISTS_BY_ID = gql`
  query ArtistsByID($ids: [ID]!) {
    artistsById(ids: $ids) {
      id
      name
      imageUrl
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
      imageUrl
      albums {
        id
        title
        imageUrl
        label {
          id
          name
          imageUrl
        }
        songs {
          id
          title
          url
          imageUrl
          playCount
          label {
            id
            name
            imageUrl
          }
          supportingArtists {
            createdAt
            artist {
              id
              name
              imageUrl
            }
          }
          # usersRecentlyPlayed {
          #   createdAt
          #   user {
          #     id
          #     firstName
          #     lastName
          #   }
          # }
        }
      }
      songs {
        id
        title
        url
        imageUrl
        playCount
        label {
          id
          name
          imageUrl
        }
        artist {
          id
          name
          imageUrl
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
    }
  }
`;

export const ALBUM_BY_ID = gql`
  query AlbumById($id: String!) {
    albumById(id: $id) {
      id
      title
      imageUrl
      description
      songs {
        id
        title
        url
        imageUrl
        artistId
        albumId
        label {
          id
          name
          imageUrl
        }
        artist {
          id
          name
        }
        supportingArtists {
          createdAt
          artist {
            id
            name
            imageUrl
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
        imageUrl
        albums {
          title
          id
          imageUrl
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
      imageUrl
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
          imageUrl
          artist {
            id
            name
            imageUrl
          }
          album {
            id
            title
            imageUrl
          }
          label {
            id
            name
            imageUrl
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
      imageUrl
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
          imageUrl
          artist {
            id
            name
            imageUrl
          }
          album {
            id
            title
            imageUrl
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
        imageUrl
      }
      album {
        id
        title
        imageUrl
      }
      label {
        id
        name
        imageUrl
      }
      url
      imageUrl
      releaseDate
    }
  }
`;

export const SEARCH_ARTISTS_QUERY = gql`
  query SearchArtists($query: String!) {
    searchArtists(query: $query) {
      id
      name
      imageUrl
    }
  }
`;

export const SEARCH_ALBUMS_QUERY = gql`
  query SearchAlbums($query: String!) {
    searchAlbums(query: $query) {
      id
      title
      imageUrl
      artist {
        id
        name
        imageUrl
      }
      label {
        id
        name
        imageUrl
      }
    }
  }
`;

export const SEARCH_PLAYLISTS_QUERY = gql`
  query SearchPlaylists($query: String!) {
    searchPlaylists(query: $query) {
      id
      title
      imageUrl
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
      imageUrl
    }
  }
`;

export const NEW_LABELS = gql`
  query NewLabels {
    newLabels {
      id
      name
      description
      imageUrl
      createdAt
      updatedAt
      artists {
        createdAt
        artist {
          name
          id
          description
          imageUrl
        }
      }
      albums {
        id
        title
        imageUrl
        description
        label {
          id
          name
          imageUrl
        }
        artist {
          id
          name
          imageUrl
        }
      }
      songs {
        createdAt
        id
        title
        label {
          id
          name
          imageUrl
        }
        artist {
          name
          id
          imageUrl
        }
        imageUrl
        url
      }
    }
  }
`;

export const LABEL_BY_ID = gql`
  query LabelById($id: String!) {
    labelById(id: $id) {
      id
      name
      description
      imageUrl
      createdAt
      updatedAt
      artists {
        createdAt
        artist {
          name
          id
          description
          imageUrl
        }
      }
      albums {
        id
        title
        imageUrl
        description
        label {
          id
          name
          imageUrl
        }
        artist {
          id
          name
          imageUrl
        }
      }
      songs {
        createdAt
        id
        title
        label {
          id
          name
          imageUrl
        }
        artist {
          name
          id
          imageUrl
        }
        imageUrl
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
      imageUrl
      label {
        id
        name
        imageUrl
      }
      artist {
        id
        name
        imageUrl
      }
      album {
        id
        title
        imageUrl
      }
    }
  }
`;

export const USER_ID_EXISTS = gql`
  query userIdExists($id: String!) {
    userIdExists(id: $id)
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
      artists {
        artistId
        userId
        createdAt
        updatedAt
        artist {
          id
          name
          imageUrl
        }
      }
      labels {
        labelId
        userId
        createdAt
        updatedAt
        label {
          id
          name
          imageUrl
        }
      }
      following {
        createdAt
        artist {
          id
          name
          imageUrl
          songs {
            id
            title
            url
            imageUrl
            playCount
          }
        }
      }
      favourites {
        createdAt
        song {
          id
          title
          imageUrl
          url
          label {
            id
            name
            imageUrl
          }
          album {
            id
            title
            imageUrl
            label {
              id
              name
              imageUrl
            }
          }
          artist {
            id
            name
            imageUrl
          }
          supportingArtists {
            createdAt
            artist {
              id
              name
              imageUrl
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
          imageUrl
          description
          songs {
            song {
              id
              title
              url
              imageUrl
              playCount
            }
          }
        }
      }
    }
  }
`;
