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
        label {
          id
          name
          profileImageUrlLarge
          profileImageUrlSmall
          profileImageUrlThumb
        }
        artist {
          id
          name
          profileImageUrlLarge
          profileImageUrlSmall
          profileImageUrlThumb
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
          profileImageUrlSmall
          profileImageUrlThumb
        }
        artist {
          name
          id
          profileImageUrlLarge
          profileImageUrlSmall
          profileImageUrlThumb
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
      profileImageUrlSmall
      profileImageUrlThumb
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
        label {
          id
          name
          profileImageUrlLarge
          profileImageUrlSmall
          profileImageUrlThumb
        }
        artist {
          id
          name
          profileImageUrlLarge
          profileImageUrlSmall
          profileImageUrlThumb
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
          profileImageUrlSmall
          profileImageUrlThumb
        }
        artist {
          name
          id
          profileImageUrlLarge
          profileImageUrlSmall
          profileImageUrlThumb
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
      profileImageUrlSmall
      profileImageUrlThumb
    }
  }
`;
