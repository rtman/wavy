import { gql } from 'apollo-boost';

export const PLAY_HISTORY = gql`
  query playHistory($userId: String!) {
    playHistory(userId: $userId) {
      id
      title
      urlHigh
      label {
        id
        name
        profileImageUrlLarge
      }
      artist {
        id
        name
        profileImageUrlLarge
      }
      album {
        id
        title
        profileImageUrlLarge
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
      label {
        id
        name
        profileImageUrlLarge
      }
      artist {
        id
        name
        profileImageUrlLarge
      }
      album {
        id
        title
        profileImageUrlLarge
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
        }
      }
      artistFollows {
        createdAt
        artist {
          id
          name
          profileImageUrlLarge
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
          label {
            id
            name
            profileImageUrlLarge
          }
          album {
            id
            title
            profileImageUrlLarge
            label {
              id
              name
              profileImageUrlLarge
            }
          }
          artist {
            id
            name
            profileImageUrlLarge
          }
          supportingArtists {
            createdAt
            artist {
              id
              name
              profileImageUrlLarge
            }
          }
        }
      }
      playlists {
        createdAt
        updatedAt
        playlist {
          id
          title
          profileImageUrlLarge
          description
          songs {
            song {
              id
              title
              urlHigh
              playCount
              album {
                id
                title
                profileImageUrlLarge
              }
            }
          }
        }
      }
    }
  }
`;
