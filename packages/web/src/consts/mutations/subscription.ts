import { gql } from 'apollo-boost';

export const NEW_SUBSCRIPTION = gql`
  mutation NewSubscription($input: NewSubscriptionArgs!) {
    newSubscription(input: $input)
  }
`;

export const BULK_NEW_SUBSCRIPTION = gql`
  mutation BulkNewSubscription($input: [NewSubscriptionArgs!]!) {
    bulkNewSubscription(input: $input)
  }
`;

export const UPDATE_SUBSCRIPTION = gql`
  mutation UpdateSubscription($input: UpdateSubscriptionArgs!) {
    getSubscriptions(input: $input)
  }
`;

export const DELETE_SUBSCRIPTION = gql`
  mutation DeleteSubscription($subscriptionId: String!) {
    getSubscriptions(subscriptionId: $subscriptionId)
  }
`;
