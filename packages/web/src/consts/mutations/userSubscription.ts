import { gql } from '@apollo/client';

export const NEW_USER_SUBSCRIPTION = gql`
  mutation NewUserSubscription($input: NewUserSubscriptionArgs!) {
    newUserSubscription(input: $input)
  }
`;

export const BULK_NEW_USER_SUBSCRIPTION = gql`
  mutation BulkNewUserSubscription($input: [NewUserSubscriptionArgs!]!) {
    bulkNewUserSubscription(input: $input)
  }
`;

export const UPDATE_USER_SUBSCRIPTION = gql`
  mutation UpdateUserSubscription($input: UpdateUserSubscriptionArgs!) {
    getUserSubscriptions(input: $input)
  }
`;

export const DELETE_USER_SUBSCRIPTION = gql`
  mutation DeleteUserSubscription($subscriptionId: String!) {
    getUserSubscriptions(subscriptionId: $subscriptionId)
  }
`;
