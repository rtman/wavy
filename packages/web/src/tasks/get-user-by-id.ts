import { ApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';
import { ApiFail, ApiSuccess, Query, QueryUserByIdArgs, User } from 'types';

type Input = QueryUserByIdArgs;
type Output = User;

export const getUserById = async (
  input: Input,
  // eslint-disable-next-line @typescript-eslint/ban-types
  apolloClient: ApolloClient<object>
): Promise<ApiSuccess<Output> | ApiFail> => {
  try {
    const result = await apolloClient.query<
      Pick<Query, 'userById'>,
      QueryUserByIdArgs
    >({
      query: USER_BY_ID,
      variables: input,
      fetchPolicy: 'network-only',
    });

    if (result.errors) {
      const fail: ApiFail = { ok: false, error: result.errors[0] };

      return fail;
    }
    const success: ApiSuccess<Output> = {
      ok: true,
      data: result.data.userById,
    };

    return success;
  } catch (error_) {
    // FIXME: disabled eslint
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const fail: ApiFail = { ok: false, error: error_ };

    return fail;
  }
};

const USER_BY_ID = gql`
  query userById($userId: String!) {
    userById(userId: $userId) {
      id
      firstName
      lastName
      email
      password
      artists {
        artistId
        userId
        createdAt
        updatedAt
        artist {
          id
          name
          profileImageUrlLarge
          profileImageUrlSmall
          profileImageUrlThumb
        }
      }
      labels {
        labelId
        userId
        createdAt
        updatedAt
        label {
          id
          name
          profileImageUrlLarge
          profileImageUrlSmall
          profileImageUrlThumb
        }
      }
      artistFollows {
        createdAt
        artist {
          id
          name
          profileImageUrlLarge
          profileImageUrlSmall
          profileImageUrlThumb
          songs {
            id
            title
            urlHigh
            playCount
          }
        }
      }
      songFavourites {
        createdAt
        song {
          id
          title
          urlHigh
          # label {
          #   id
          #   name
          #   profileImageUrlLarge
          #   profileImageUrlSmall
          #   profileImageUrlThumb
          # }
          album {
            id
            title
            profileImageUrlLarge
            profileImageUrlSmall
            profileImageUrlThumb
            label {
              id
              name
              profileImageUrlLarge
              profileImageUrlSmall
              profileImageUrlThumb
            }
          }
          artist {
            id
            name
            profileImageUrlLarge
            profileImageUrlSmall
            profileImageUrlThumb
          }
          supportingArtists {
            createdAt
            artist {
              id
              name
              profileImageUrlLarge
              profileImageUrlSmall
              profileImageUrlThumb
            }
          }
        }
      }
      # playlists {
      #   createdAt
      #   updatedAt
      #   playlist {
      #     id
      #     title
      #     profileImageUrlLarge
      #     profileImageUrlSmall
      #     profileImageUrlThumb
      #     description
      #     songs {
      #       song {
      #         id
      #         title
      #         urlHigh
      #         playCount
      #         album {
      #           id
      #           title
      #           profileImageUrlLarge
      #           profileImageUrlSmall
      #           profileImageUrlThumb
      #         }
      #       }
      #     }
      #   }
      # }
      subscriptions {
        id
        entity
        type
        sortBy
        payload
        createdAt
        updatedAt
      }
    }
  }
`;
