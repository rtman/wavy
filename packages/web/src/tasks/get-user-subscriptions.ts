import { ApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';
import {
  ApiSuccess,
  ApiFail,
  Query,
  QueryGetUserSubscriptionsArgs,
} from 'commonTypes';

type Input = QueryGetUserSubscriptionsArgs;
type Output = Pick<Query, 'getUserSubscriptions'>['getUserSubscriptions'];

export const getUserSubscriptions = async (
  input: Input,
  apolloClient: ApolloClient<object>
): Promise<ApiSuccess<Output> | ApiFail> => {
  try {
    const result = await apolloClient.query<
      Pick<Query, 'getUserSubscriptions'>
    >({
      query: GET_USER_SUBSCRIPTIONS,
      variables: input,
    });

    if (result.errors) {
      const fail: ApiFail = { ok: false, error: result.errors[0] };
      return fail;
    }
    const success: ApiSuccess<Output> = {
      ok: true,
      data: result.data.getUserSubscriptions,
    };

    return success;
  } catch (error_) {
    const fail: ApiFail = { ok: false, error: error_ };

    return fail;
  }
};

const GET_USER_SUBSCRIPTIONS = gql`
  query GetUserSubscriptions($userId: String!) {
    getUserSubscriptions(userId: $userId) {
      id
      entity
      type
      sortBy
      payload
      userId
      title
      data {
        ... on Album {
          id
          title
          type
          createdAt
          profileImageUrlThumb
          artist {
            id
            name
          }
          label {
            id
            name
          }
          songs {
            id
            title
            urlHigh
            artist {
              name
            }
          }
        }
        ... on Artist {
          id
          name
          type
          createdAt
          profileImageUrlThumb
          albums {
            id
            songs {
              id
              title
              urlHigh
              artist {
                name
              }
            }
          }
        }
        ... on Label {
          id
          name
          type
          createdAt
          profileImageUrlThumb
          albums {
            id
            songs {
              id
              title
              urlHigh
              artist {
                name
              }
            }
          }
        }
        ... on Playlist {
          id
          title
          type
          createdAt
          profileImageUrlThumb
          # user {
          #   id
          #   firstName
          #   lastName
          # }
        }
        ... on Song {
          id
          title
          type
          createdAt
          urlHigh
          album {
            id
            title
            profileImageUrlThumb
            label {
              id
              name
            }
          }
          artist {
            id
            name
          }
        }
        ... on User {
          id
          firstName
          type
          createdAt
          profileImageUrlThumb
        }
      }
    }
  }
`;
