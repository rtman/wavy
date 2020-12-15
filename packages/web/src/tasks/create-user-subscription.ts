import { ApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';
import {
  ApiFail,
  ApiSuccess,
  Mutation,
  MutationNewUserSubscriptionArgs,
} from 'types';

const NEW_USER_SUBSCRIPTION = gql`
  mutation NewUserSubscription($input: NewUserSubscriptionArgs!) {
    newUserSubscription(input: $input)
  }
`;

type Input = MutationNewUserSubscriptionArgs['input'];
type Output = boolean;

export const createUserSubscription = async (
  input: Input,
  apolloClient: ApolloClient<object>
): Promise<ApiSuccess<Output> | ApiFail> => {
  try {
    const result = await apolloClient.mutate<
      Pick<Mutation, 'newUserSubscription'>,
      MutationNewUserSubscriptionArgs
    >({
      mutation: NEW_USER_SUBSCRIPTION,
      variables: { input },
    });

    if (result.errors) {
      const fail: ApiFail = { ok: false, error: result.errors[0] };

      return fail;
    }
    // This error is pretty bad, need a way to forward error codes from graphql to here. Most likely will need a union type for the gql return type
    if (result?.data?.newUserSubscription === undefined) {
      const fail: ApiFail = { ok: false, error: 'An error occurred' };

      return fail;
    }

    const success: ApiSuccess<Output> = {
      ok: true,
      data: result.data.newUserSubscription,
    };

    return success;
  } catch (error_) {
    const fail: ApiFail = { ok: false, error: error_ };

    return fail;
  }
};
