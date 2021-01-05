import { ApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';
import {
  ApiFail,
  ApiSuccess,
  Artist,
  Query,
  QueryGetUnclaimedArtistsArgs,
} from 'types';

const GET_UNCLAIMED_ARTSITS = gql`
  mutation GetUnclaimedArtistsByEmail($email: String!) {
    getUnclaimedArtistsByEmail(email: $email) {
      id
      name
      claimantEmail
      claimCode
    }
  }
`;

type Input = QueryGetUnclaimedArtistsArgs;
type Output = Artist[];

export const getUnclaimedArtists = async (
  input: Input,
  // eslint-disable-next-line @typescript-eslint/ban-types
  apolloClient: ApolloClient<object>
): Promise<ApiSuccess<Output> | ApiFail> => {
  try {
    const result = await apolloClient.query<
      Pick<Query, 'getUnclaimedArtists'>,
      QueryGetUnclaimedArtistsArgs
    >({
      query: GET_UNCLAIMED_ARTSITS,
      variables: input,
    });

    if (result.errors) {
      const fail: ApiFail = { ok: false, error: result.errors[0] };

      return fail;
    }
    const success: ApiSuccess<Output> = {
      ok: true,
      data: result.data.getUnclaimedArtists,
    };

    return success;
  } catch (error_) {
    // FIXME: disabled eslint
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const fail: ApiFail = { ok: false, error: error_ };

    return fail;
  }
};
