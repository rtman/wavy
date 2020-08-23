import { gql } from 'apollo-boost';

export const SEARCH_ALL = gql`
  query searchAll($query: String!) {
    searchAll(query: $query) {
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
