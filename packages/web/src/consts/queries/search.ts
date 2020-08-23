import { gql } from 'apollo-boost';

export const SEARCH_ALL = gql`
  query searchAll($query: String!) {
    searchAll(query: $query) {
      albums {
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
      artists {
        id
        name
        imageUrl
      }
      labels {
        id
        name
        imageUrl
      }
      playlists {
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
      songs {
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
  }
`;
