import { ApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';
import {
  ApiFail,
  ApiSuccess,
  Mutation,
  MutationBulkNewUserSubscriptionArgs,
} from 'types';

const BULK_NEW_USER_SUBSCRIPTION = gql`
  mutation BulkNewUserSubscription($input: [NewUserSubscriptionArgs!]!) {
    bulkNewUserSubscription(input: $input)
  }
`;

type Input = MutationBulkNewUserSubscriptionArgs['input'];
type Output = boolean;

export const bulkCreateUserSubscription = async (
  input: Input,
  // eslint-disable-next-line @typescript-eslint/ban-types
  apolloClient: ApolloClient<object>
): Promise<ApiSuccess<Output> | ApiFail> => {
  try {
    const result = await apolloClient.mutate<
      Pick<Mutation, 'bulkNewUserSubscription'>,
      MutationBulkNewUserSubscriptionArgs
    >({
      mutation: BULK_NEW_USER_SUBSCRIPTION,
      variables: { input },
    });

    if (result.errors) {
      const fail: ApiFail = { ok: false, error: result.errors[0] };

      return fail;
    }
    // This error is pretty bad, need a way to forward error codes from graphql to here. Most likely will need a union type for the gql return type
    if (result?.data?.bulkNewUserSubscription === undefined) {
      const fail: ApiFail = { ok: false, error: 'An error occurred' };

      return fail;
    }

    const success: ApiSuccess<Output> = {
      ok: true,
      data: result.data.bulkNewUserSubscription,
    };

    return success;
  } catch (error_) {
    // FIXME: disabled eslint
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const fail: ApiFail = { ok: false, error: error_ };

    return fail;
  }
};
