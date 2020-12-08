import { gql } from '@apollo/client';

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
        songs {
          id
          title
          urlHigh
        }
      }
      artists {
        id
        name
        profileImageUrlLarge
        profileImageUrlSmall
        profileImageUrlThumb
        albums {
          id
          title
          songs {
            id
            title
            urlHigh
          }
        }
      }
      labels {
        id
        name
        profileImageUrlLarge
        profileImageUrlSmall
        profileImageUrlThumb
        albums {
          id
          title
          songs {
            id
            title
            urlHigh
          }
        }
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
        songs {
          song {
            id
            title
            urlHigh
            albumId
          }
        }
      }
      songs {
        id
        title
        albumId
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
