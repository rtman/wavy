import { ApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';
import {
  ApiSuccess,
  ApiFail,
  Mutation,
  MutationDeleteUserSubscriptionArgs,
} from 'types';

const DELETE_USER_SUBSCRIPTION = gql`
  mutation DeleteUserSubscription($subscriptionId: String!) {
    deleteUserSubscription(subscriptionId: $subscriptionId)
  }
`;

type Input = MutationDeleteUserSubscriptionArgs;
type Output = boolean;

export const deleteUserSubscription = async (
  input: Input,
  apolloClient: ApolloClient<object>
): Promise<ApiSuccess<Output> | ApiFail> => {
  try {
    const result = await apolloClient.mutate<
      Pick<Mutation, 'deleteUserSubscription'>,
      MutationDeleteUserSubscriptionArgs
    >({
      mutation: DELETE_USER_SUBSCRIPTION,
      variables: input,
    });

    if (result.errors) {
      const fail: ApiFail = { ok: false, error: result.errors[0] };
      return fail;
    }
    // This error is pretty bad, need a way to forward error codes from graphql to here. Most likely will need a union type for the gql return type
    if (result?.data?.deleteUserSubscription === undefined) {
      const fail: ApiFail = { ok: false, error: 'An error occurred' };
      return fail;
    }

    const success: ApiSuccess<Output> = {
      ok: true,
      data: result.data.deleteUserSubscription,
    };

    return success;
  } catch (error_) {
    const fail: ApiFail = { ok: false, error: error_ };

    return fail;
  }
};
