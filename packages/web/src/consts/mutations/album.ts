import { gql } from 'apollo-boost';

export const CREATE_ALBUM = gql`
  mutation CreateAlbum($input: CreateAlbumArgs!) {
    createAlbum(input: $input) {
      id
    }
  }
`;

export const ADD_SONGS_ALBUM = gql`
  mutation AddSongsToAlbum($input: AddSongsToAlbumArgs!) {
    addSongsToAlbum(input: $input)
  }
`;
