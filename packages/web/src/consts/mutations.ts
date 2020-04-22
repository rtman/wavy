import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
  mutation CreateUser($data: CreateUserArgs!) {
    createUser(data: $data) {
      id
      firstName
      lastName
      email
      password
    }
  }
`;

export const CREATE_PLAYLIST = gql`
  mutation CreatePlaylist($data: CreatePlaylistArgs!) {
    createPlaylist(data: $data) {
      id
    }
  }
`;

export const UPDATE_PLAYLIST_INFO = gql`
  mutation UpdatePlaylistInfo($data: UpdatePlaylistInfoArgs!) {
    updatePlaylistInfo(data: $data) {
      title
      description
    }
  }
`;

export const ADD_PLAYLIST_SONGS = gql`
  mutation AddPlaylistSongs($data: AddPlaylistSongsArgs!) {
    addPlaylistSongs(data: $data)
  }
`;

export const REMOVE_PLAYLIST_SONGS = gql`
  mutation RemovePlaylistSongs($data: RemovePlaylistSongsArgs!) {
    removePlaylistSongs(data: $data)
  }
`;

export const UPDATE_FOLLOWING = gql`
  mutation($data: UpdateFollowingArgs!) {
    updateFollowing(data: $data)
  }
`;

export const UPDATE_FAVOURITES = gql`
  mutation UpdateFavourites($data: UpdateFavouritesArgs!) {
    updateFavourites(data: $data)
  }
`;

export const UPDATE_RECENTLY_PLAYED = gql`
  mutation UpdateRecentlyPlayed($data: UpdateRecentlyPlayedArgs!) {
    updateRecentlyPLayed(data: $data)
  }
`;
