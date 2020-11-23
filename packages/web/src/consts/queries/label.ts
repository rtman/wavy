import { gql } from 'apollo-boost';

export const NEW_LABELS = gql`
  query NewLabels {
    newLabels {
      id
      name
      description
      profileImageUrlLarge
      profileImageUrlSmall
      profileImageUrlThumb
      createdAt
      updatedAt
    }
  }
`;

export const LABEL_BY_ID = gql`
  query LabelById($labelId: String!) {
    labelById(labelId: $labelId) {
      id
      name
      description
      profileImageUrlLarge
      profileImageUrlSmall
      profileImageUrlThumb
      createdAt
      updatedAt
      artists {
        createdAt
        artist {
          name
          id
          description
          profileImageUrlLarge
          profileImageUrlSmall
          profileImageUrlThumb
        }
      }
      albums {
        id
        title
        profileImageUrlLarge
        profileImageUrlSmall
        profileImageUrlThumb
        description
        songs {
          id
          title
          urlHigh
          playCount
        }
        artist {
          id
          name
          profileImageUrlLarge
          profileImageUrlSmall
          profileImageUrlThumb
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
      profileImageUrlLarge
      profileImageUrlSmall
      profileImageUrlThumb
    }
  }
`;
