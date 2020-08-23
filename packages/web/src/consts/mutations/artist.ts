import { gql } from 'apollo-boost';

export const CREATE_ARTIST = gql`
  mutation CreateArtist($input: CreateArtistArgs!) {
    createArtist(input: $input) {
      id
    }
  }
`;
