import { gql } from 'apollo-boost';

export const PLAYLIST_BY_ID = gql`
  query PlaylistById($playlistId: String!) {
    playlistById(playlistId: $playlistId) {
      title
      description
      profileImageUrlLarge
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
          urlHigh
          profileImageUrlLarge
          artist {
            id
            name
            profileImageUrlLarge
          }
          album {
            id
            title
            profileImageUrlLarge
          }
          label {
            id
            name
            profileImageUrlLarge
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
      profileImageUrlLarge
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
          urlHigh
          profileImageUrlLarge
          artist {
            id
            name
            profileImageUrlLarge
          }
          album {
            id
            title
            profileImageUrlLarge
          }
        }
      }
    }
  }
`;

export const SEARCH_PLAYLISTS_QUERY = gql`
  query SearchPlaylists($query: String!) {
    searchPlaylists(query: $query) {
      id
      title
      profileImageUrlLarge
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
