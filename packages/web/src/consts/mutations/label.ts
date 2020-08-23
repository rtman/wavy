import { gql } from 'apollo-boost';

export const CREATE_LABEL = gql`
  mutation CreateLabel($input: CreateLabelArgs!) {
    createLabel(input: $input) {
      id
    }
  }
`;
