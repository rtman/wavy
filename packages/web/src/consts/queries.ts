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
