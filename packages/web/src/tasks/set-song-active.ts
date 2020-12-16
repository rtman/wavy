import { ApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';
import {
  ApiFail,
  ApiSuccess,
  Mutation,
  MutationSetSongActiveArgs,
} from 'types';

const SET_SONG_ACTIVE = gql`
  mutation SetSongActive($songId: String!) {
    setSongActive(songId: $songId)
  }
`;

type Input = MutationSetSongActiveArgs;
type Output = boolean;

export const setSongActive = async (
  input: Input,
  apolloClient: ApolloClient<object>
): Promise<ApiSuccess<Output> | ApiFail> => {
  try {
    const result = await apolloClient.mutate<
      Pick<Mutation, 'setSongActive'>,
      MutationSetSongActiveArgs
    >({
      mutation: SET_SONG_ACTIVE,
      variables: input,
    });

    if (result.errors) {
      const fail: ApiFail = { ok: false, error: result.errors[0] };

      return fail;
    }
    const success: ApiSuccess<Output> = {
      ok: true,
      data: result.data?.setSongActive ?? false,
    };

    return success;
  } catch (error_) {
    const fail: ApiFail = { ok: false, error: error_ };

    return fail;
  }
};
