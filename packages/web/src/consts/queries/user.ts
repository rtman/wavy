import { gql } from '@apollo/client';

export const PLAY_HISTORY = gql`
  query playHistory($userId: String!) {
    playHistory(userId: $userId) {
      id
      title
      urlHigh
      artist {
        id
        name
        profileImageUrlLarge
        profileImageUrlSmall
        profileImageUrlThumb
      }
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
    }
  }
`;

export const USERS_TOP_SONGS = gql`
  query usersTopSongs($userId: String!) {
    usersTopSongs(userId: $userId) {
      id
      title
      urlHigh
      artist {
        id
        name
        profileImageUrlLarge
        profileImageUrlSmall
        profileImageUrlThumb
      }
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
    }
  }
`;

export const USER_ID_EXISTS = gql`
  query userIdExists($userId: String!) {
    userIdExists(userId: $userId)
  }
`;

export const USER_BY_ID = gql`
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
