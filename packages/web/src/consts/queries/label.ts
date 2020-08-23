import { gql } from 'apollo-boost';

export const NEW_LABELS = gql`
  query NewLabels {
    newLabels {
      id
      name
      description
      imageUrl
      createdAt
      updatedAt
      artists {
        createdAt
        artist {
          name
          id
          description
          imageUrl
        }
      }
      albums {
        id
        title
        imageUrl
        description
        label {
          id
          name
          imageUrl
        }
        artist {
          id
          name
          imageUrl
        }
      }
      songs {
        createdAt
        id
        title
        label {
          id
          name
          imageUrl
        }
        artist {
          name
          id
          imageUrl
        }
        imageUrl
        url
      }
    }
  }
`;

export const LABEL_BY_ID = gql`
  query LabelById($labelId: String!) {
    labelById(labelId: $labelId) {
      id
      name
      description
      imageUrl
      createdAt
      updatedAt
      artists {
        createdAt
        artist {
          name
          id
          description
          imageUrl
        }
      }
      albums {
        id
        title
        imageUrl
        description
        label {
          id
          name
          imageUrl
        }
        artist {
          id
          name
          imageUrl
        }
      }
      songs {
        createdAt
        id
        title
        label {
          id
          name
          imageUrl
        }
        artist {
          name
          id
          imageUrl
        }
        imageUrl
        url
      }
    }
  }
`;

export const SEARCH_LABELS_QUERY = gql`
  query SearchLabels($query: String!) {
    searchLabels(query: $query) {
      id
      name
      imageUrl
    }
  }
`;
