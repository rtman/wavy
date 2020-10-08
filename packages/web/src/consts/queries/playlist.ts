import { gql } from 'apollo-boost';

export const PLAYLIST_BY_ID = gql`
  query PlaylistById($playlistId: String!) {
    playlistById(playlistId: $playlistId) {
      title
      description
      profileImageUrlLarge
      profileImageUrlSmall
      profileImageUrlThumb
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
          artist {
            id
            name
            profileImageUrlLarge
            profileImageUrlSmall
            profileImageUrlThumb
          }
          album {
            id
            title
            profileImageUrlLarge
            profileImageUrlSmall
            profileImageUrlThumb
          }
          label {
            id
            name
            profileImageUrlLarge
            profileImageUrlSmall
            profileImageUrlThumb
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
      profileImageUrlSmall
      profileImageUrlThumb
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
          artist {
            id
            name
            profileImageUrlLarge
            profileImageUrlSmall
            profileImageUrlThumb
          }
          album {
            id
            title
            profileImageUrlLarge
            profileImageUrlSmall
            profileImageUrlThumb
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
      profileImageUrlSmall
      profileImageUrlThumb
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
