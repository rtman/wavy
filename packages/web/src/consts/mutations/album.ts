import { gql } from 'apollo-boost';

export const CREATE_ALBUM = gql`
  mutation CreateAlbum($input: CreateAlbumArgs!) {
    createAlbum(input: $input) {
      id
    }
  }
`;
