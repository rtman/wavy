import { gql } from '@apollo/client';

export const GET_USER_SUBSCRIPTIONS = gql`
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
