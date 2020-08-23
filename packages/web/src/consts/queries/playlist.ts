import { gql } from 'apollo-boost';

export const PLAYLIST_BY_ID = gql`
  query PlaylistById($playlistId: String!) {
    playlistById(playlistId: $playlistId) {
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
