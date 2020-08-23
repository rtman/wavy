import { gql } from 'apollo-boost';

export const CREATE_PLAYLIST = gql`
  mutation CreatePlaylist($input: CreatePlaylistArgs!) {
    createPlaylist(input: $input) {
      id
    }
  }
`;

export const UPDATE_PLAYLIST_INFO = gql`
  mutation UpdatePlaylistInfo($input: UpdatePlaylistInfoArgs!) {
    updatePlaylistInfo(input: $input) {
      title
      description
    }
  }
`;

export const ADD_PLAYLIST_SONGS = gql`
  mutation AddPlaylistSongs($input: AddPlaylistSongsArgs!) {
    addPlaylistSongs(input: $input)
  }
`;

export const REMOVE_PLAYLIST_SONGS = gql`
  mutation RemovePlaylistSongs($input: RemovePlaylistSongsArgs!) {
    removePlaylistSongs(input: $input)
  }
`;
