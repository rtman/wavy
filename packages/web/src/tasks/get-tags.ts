import { ApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';
import { ApiSuccess, ApiFail, Query, Tag } from 'commonTypes';

export const TAGS = gql`
  query Tags {
    tags {
      id
      title
    }
  }
`;

type Output = Tag[];

export const getTags = async (
  apolloClient: ApolloClient<object>
): Promise<ApiSuccess<Output> | ApiFail> => {
  try {
    const result = await apolloClient.query<Pick<Query, 'tags'>>({
      query: TAGS,
    });

    if (result.errors) {
      const fail: ApiFail = { ok: false, error: result.errors[0] };
      return fail;
    }
    const success: ApiSuccess<Output> = {
      ok: true,
      data: result.data.tags,
    };

    return success;
  } catch (error_) {
    const fail: ApiFail = { ok: false, error: error_ };

    return fail;
  }
};
