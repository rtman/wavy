import { gql } from 'apollo-boost';

export const UPDATE_SONG_PLAY_COUNT = gql`
  mutation UpdateSongPlayCount($input: UpdatePlayCountArgs!) {
    updateSongPlayCount(input: $input)
  }
`;

export const USER_PLAYED_SONG = gql`
  mutation UserPlayedSong($input: UserPlayedSongArgs!) {
    userPlayedSong(input: $input)
  }
`;
