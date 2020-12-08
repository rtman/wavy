import { gql } from '@apollo/client';

export const CREATE_ARTIST = gql`
  mutation CreateArtist($input: CreateArtistArgs!) {
    createArtist(input: $input) {
      id
    }
  }
`;

export const LABEL_CREATE_UNCLAIMED_ARTIST = gql`
  mutation LabelCreateUnclaimedArtist($input: LabelCreateUnclaimedArtistArgs!) {
    labelCreateUnclaimedArtist(input: $input)
  }
`;
