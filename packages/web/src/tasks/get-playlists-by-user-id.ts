import { ApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';
import {
  ApiFail,
  ApiSuccess,
  Playlist,
  Query,
  QueryPlaylistsByUserIdArgs,
} from 'types';

type Input = QueryPlaylistsByUserIdArgs;
type Output = Playlist[];

export const getPlaylistsByUserId = async (
  input: Input,
  // eslint-disable-next-line @typescript-eslint/ban-types
  apolloClient: ApolloClient<object>
): Promise<ApiSuccess<Output> | ApiFail> => {
  try {
    const result = await apolloClient.query<
      Pick<Query, 'playlistsByUserId'>,
      QueryPlaylistsByUserIdArgs
    >({
      query: PLAYLISTS_BY_USER_ID,
      variables: input,
      fetchPolicy: 'network-only',
    });

    if (result.errors) {
      const fail: ApiFail = { ok: false, error: result.errors[0] };

      return fail;
    }
    const success: ApiSuccess<Output> = {
      ok: true,
      data: result.data.playlistsByUserId,
    };

    return success;
  } catch (error_) {
    // FIXME: disabled eslint
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const fail: ApiFail = { ok: false, error: error_ };

    return fail;
  }
};

const PLAYLISTS_BY_USER_ID = gql`
  query playlistsByUserId($userId: String!) {
    playlistsByUserId(userId: $userId) {
      id
      title
      profileImageUrlLarge
      profileImageUrlSmall
      profileImageUrlThumb
      description
      songs {
        song {
          id
          title
          urlHigh
          playCount
          album {
            id
            title
            profileImageUrlLarge
            profileImageUrlSmall
            profileImageUrlThumb
          }
        }
      }
    }
  }
`;
