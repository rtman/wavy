import { ApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';
import {
  ApiFail,
  ApiSuccess,
  Artist,
  Mutation,
  MutationClaimArtistArgs,
} from 'types';

const CLAIM_ARTIST = gql`
  mutation ClaimArtist($input: ClaimArtistArgs!) {
    claimArtist(input: $input) {
      id
      name
      claimed
    }
  }
`;

type Input = MutationClaimArtistArgs['input'];
type Output = Artist;

export const claimArtist = async (
  input: Input,
  // eslint-disable-next-line @typescript-eslint/ban-types
  apolloClient: ApolloClient<object>
): Promise<ApiSuccess<Output> | ApiFail> => {
  try {
    const result = await apolloClient.mutate<
      Pick<Mutation, 'claimArtist'>,
      MutationClaimArtistArgs
    >({
      mutation: CLAIM_ARTIST,
      variables: { input },
    });

    if (result.errors) {
      const fail: ApiFail = { ok: false, error: result.errors[0] };

      return fail;
    }
    // This error is pretty bad, need a way to forward error codes from graphql to here. Most likely will need a union type for the gql return type
    if (result?.data?.claimArtist === undefined) {
      const fail: ApiFail = { ok: false, error: 'An error occurred' };

      return fail;
    }

    const success: ApiSuccess<Output> = {
      ok: true,
      data: result.data.claimArtist,
    };

    return success;
  } catch (error_) {
    // FIXME: disabled eslint
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const fail: ApiFail = { ok: false, error: error_ };

    return fail;
  }
};
