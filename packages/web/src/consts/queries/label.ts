import { gql } from 'apollo-boost';

export const NEW_LABELS = gql`
  query NewLabels {
    newLabels {
      id
      name
      description
      profileImageUrlLarge
      createdAt
      updatedAt
      artists {
        createdAt
        artist {
          name
          id
          description
          profileImageUrlLarge
        }
      }
      albums {
        id
        title
        profileImageUrlLarge
        description
        label {
          id
          name
          profileImageUrlLarge
        }
        artist {
          id
          name
          profileImageUrlLarge
        }
      }
      songs {
        createdAt
        id
        title
        label {
          id
          name
          profileImageUrlLarge
        }
        artist {
          name
          id
          profileImageUrlLarge
        }
        urlHigh
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
      profileImageUrlLarge
      artistConnections {
        artist {
          id
          name
        }
      }
      createdAt
      updatedAt
      artists {
        createdAt
        artist {
          name
          id
          description
          profileImageUrlLarge
        }
      }
      albums {
        id
        title
        profileImageUrlLarge
        description
        label {
          id
          name
          profileImageUrlLarge
        }
        artist {
          id
          name
          profileImageUrlLarge
        }
      }
      songs {
        createdAt
        id
        title
        label {
          id
          name
          profileImageUrlLarge
        }
        artist {
          name
          id
          profileImageUrlLarge
        }
        urlHigh
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
    }
  }
`;
