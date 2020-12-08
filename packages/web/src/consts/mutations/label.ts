import { gql } from '@apollo/client';

export const CREATE_LABEL = gql`
  mutation CreateLabel($input: CreateLabelArgs!) {
    createLabel(input: $input) {
      id
    }
  }
`;
