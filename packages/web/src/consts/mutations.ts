import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $id: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      id: $id
    ) {
      id
      firstName
      lastName
      email
      password
    }
  }
`;

export const CREATE_PLAYLIST = gql`
  mutation CreatePlaylist(
    $userId: String!
    $title: String!
    $description: String
  ) {
    createPlaylist(userId: $userId, title: $title, description: $description) {
      id
    }
  }
`;

export const UPDATE_PLAYLIST_INFO = gql`
  mutation UpdatePlaylistInfo(
    $title: String!
    $description: String!
    $id: ID!
  ) {
    updatePlaylistInfo(title: $title, description: $description, id: $id) {
      title
      description
    }
  }
`;

export const ADD_PLAYLIST_SONGS = gql`
  mutation AddPlaylistSongs($id: ID!, $songIds: [ID]!) {
    addPlaylistSongs(id: $id, songIds: $songIds)
  }
`;

export const REMOVE_PLAYLIST_SONGS = gql`
  mutation RemovePlaylistSongs($id: ID!, $songIds: [ID]!) {
    removePlaylistSongs(id: $id, songIds: $songIds)
  }
`;

export const UPDATE_FOLLOWING = gql`
  mutation UpdateFollowing($id: String!, $artistId: ID!) {
    updateFollowing(id: $id, artistId: $artistId)
  }
`;

export const UPDATE_FAVOURITES = gql`
  mutation UpdateFavourites($id: String!, $songId: ID!) {
    updateFavourites(id: $id, songId: $songId)
  }
`;

export const UPDATE_RECENTLY_PLAYED = gql`
  mutation UpdateRecentlyPlayed($id: String!, $songId: ID!) {
    updateRecentlyPLayed(id: $id, songId: $songId)
  }
`;
