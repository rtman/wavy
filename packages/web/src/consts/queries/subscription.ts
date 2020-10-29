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
        }
        ... on Artist {
          id
          name
          type
          createdAt
        }
        ... on Label {
          id
          name
          type
          createdAt
        }
        ... on Playlist {
          id
          title
          type
          createdAt
        }
        ... on Song {
          id
          title
          type
          createdAt
        }
        ... on User {
          id
          firstName
          type
          createdAt
        }
      }
    }
  }
`;
