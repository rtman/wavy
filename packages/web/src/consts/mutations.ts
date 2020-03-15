import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
  mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $id: String!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, id: $id) {
      id
      firstName
      lastName
      email
      password
    }
  }
`;

export const UPDATE_PLAYLIST_INFO = gql`
  mutation UpdatePlaylistInfo($title: String!, $description: String!, $id: ID!) {
    updatePlaylistInfo(title: $title, description: $description, id: $id) {
      title
      description
    }
  }
`;

export const UPDATE_USER_FOLLOWING = gql`
  mutation UpdateUserFollowing($id: ID!, $artistId: ID!) {
    updateUserFollowing(id: $id, artistId: $artistId)
  }
`;

export const UPDATE_USER_FAVOURITES = gql`
  mutation UpdateUserFavourites($id: ID!, $songId: ID!) {
    updateUserFavourites(id: $id, songId: $songId)
  }
`;

export const UPDATE_USER_PLAYLISTS = gql`
  mutation UpdateUserPlaylists($id: ID!, $paylistId: ID!) {
    updateUserPlaylists(id: $id, paylistId: $paylistId)
  }
`;

export const UPDATE_USER_RECENTLY_PLAYED = gql`
  mutation UpdateUserRecentlyPlayed($id: ID!, $songId: ID!) {
    updateUserRecentlyPLayed(id: $id, songId: $songId)
  }
`;
