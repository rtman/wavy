import { gql } from 'apollo-boost';

export const SEARCH_ALL = gql`
  query searchAll($query: String!) {
    searchAll(query: $query) {
      albums {
        id
        title
        profileImageUrlLarge
        artist {
          id
          name
          profileImageUrlLarge
        }
        label {
          id
          name
          profileImageUrlLarge
        }
      }
      artists {
        id
        name
        profileImageUrlLarge
      }
      labels {
        id
        name
        profileImageUrlLarge
      }
      playlists {
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
      songs {
        id
        title
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
        urlHigh
      }
    }
  }
`;
