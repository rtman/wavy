import { gql } from 'apollo-boost';

export const SEARCH_ALL = gql`
  query searchAll($query: String!) {
    searchAll(query: $query) {
      albums {
        id
        title
        profileImageUrlLarge
        profileImageUrlSmall
        profileImageUrlThumb
        artist {
          id
          name
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
      artists {
        id
        name
        profileImageUrlLarge
        profileImageUrlSmall
        profileImageUrlThumb
      }
      labels {
        id
        name
        profileImageUrlLarge
        profileImageUrlSmall
        profileImageUrlThumb
      }
      playlists {
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
      songs {
        id
        title
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
        urlHigh
      }
    }
  }
`;
