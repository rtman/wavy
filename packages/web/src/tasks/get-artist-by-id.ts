import { ApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';
import { ApiFail, ApiSuccess, Artist, Query, QueryArtistByIdArgs } from 'types';

type Input = QueryArtistByIdArgs;
type Output = Artist;

export const getArtistById = async (
  input: Input,
  // eslint-disable-next-line @typescript-eslint/ban-types
  apolloClient: ApolloClient<object>
): Promise<ApiSuccess<Output> | ApiFail> => {
  try {
    const result = await apolloClient.query<
      Pick<Query, 'artistById'>,
      QueryArtistByIdArgs
    >({
      query: ARTIST_BY_ID,
      variables: input,
    });

    if (result.errors) {
      const fail: ApiFail = { ok: false, error: result.errors[0] };

      return fail;
    }
    const success: ApiSuccess<Output> = {
      ok: true,
      data: result.data.artistById,
    };

    return success;
  } catch (error_) {
    // FIXME: disabled eslint
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const fail: ApiFail = { ok: false, error: error_ };

    return fail;
  }
};

const ARTIST_BY_ID = gql`
  query ArtistById($artistId: String!) {
    artistById(artistId: $artistId) {
      id
      name
      description
      profileImageUrlLarge
      profileImageUrlSmall
      profileImageUrlThumb
      albums {
        id
        title
        profileImageUrlLarge
        profileImageUrlSmall
        profileImageUrlThumb
        active
        label {
          id
          name
          profileImageUrlLarge
          profileImageUrlSmall
          profileImageUrlThumb
        }
        songs {
          id
          title
          urlHigh
          playCount
          active
          label {
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
          # usersRecentlyPlayed {
          #   createdAt
          #   user {
          #     id
          #     firstName
          #     lastName
          #   }
          # }
        }
      }
      usersFollowing {
        createdAt
        user {
          id
          firstName
          lastName
        }
      }
      supportingArtistOn {
        createdAt
        song {
          id
          title
          urlHigh
          album {
            id
            title
            profileImageUrlLarge
            profileImageUrlSmall
            profileImageUrlThumb
          }
        }
      }
    }
  }
`;
