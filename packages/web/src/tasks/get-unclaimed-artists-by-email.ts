import { ApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';
import {
  ApiSuccess,
  ApiFail,
  Query,
  QueryGetUnclaimedArtistsArgs,
  Artist,
} from 'commonTypes';

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

interface Input {
  claimantEmail: string;
  claimCode: string;
}

type Output = Artist[];

export const getUnclaimedArtists = async (
  input: Input,
  apolloClient: ApolloClient<object>
): Promise<ApiSuccess<Output> | ApiFail> => {
  try {
    const result = await apolloClient.query<
      Pick<Query, 'getUnclaimedArtists'>,
      QueryGetUnclaimedArtistsArgs
    >({
      query: GET_UNCLAIMED_ARTSITS,
      variables: { input: input },
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
    const fail: ApiFail = { ok: false, error: error_ };

    return fail;
  }
};
