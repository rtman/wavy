import { gql } from 'apollo-boost';

export const TAGS = gql`
  query Tags {
    tags {
      id
      title
    }
  }
`;
