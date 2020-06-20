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

export const UPDATE_RECENTLY_PLAYED = gql`
  mutation UpdateRecentlyPlayed($input: UpdateRecentlyPlayedArgs!) {
    updateRecentlyPlayed(input: $input)
  }
`;

export const UPDATE_SONG_PLAY_COUNT = gql`
  mutation UpdateSongPlayCount($input: UpdatePlayCountArgs!) {
    updateSongPlayCount(input: $input)
  }
`;

export const CREATE_ARTIST = gql`
  mutation CreateArtist($input: CreateArtistArgs!) {
    createArtist(input: $input)
  }
`;
