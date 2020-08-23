import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserArgs!) {
    createUser(input: $input) {
      id
      firstName
      lastName
      email
      password
    }
  }
`;

export const UPDATE_FOLLOWING = gql`
  mutation($input: UpdateFollowingArgs!) {
    updateFollowing(input: $input)
  }
`;

export const UPDATE_FAVOURITES = gql`
  mutation UpdateFavourites($input: UpdateFavouritesArgs!) {
    updateFavourites(input: $input)
  }
`;
