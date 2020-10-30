import { gql } from 'apollo-boost';

export const GET_SUBSCRIPTIONS = gql`
  query GetSubscriptions($userId: String!) {
    getSubscriptions(userId: $userId) {
      id
      entity
      type
      sortBy
      payload
      userId
      data {
        ... on Album {
          id
          title
          type
          createdAt
          profileImageUrlThumb
        }
        ... on Artist {
          id
          name
          type
          createdAt
          profileImageUrlThumb
        }
        ... on Label {
          id
          name
          type
          createdAt
          profileImageUrlThumb
        }
        ... on Playlist {
          id
          title
          type
          createdAt
          profileImageUrlThumb
        }
        ... on Song {
          id
          title
          type
          createdAt
          album {
            profileImageUrlThumb
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
