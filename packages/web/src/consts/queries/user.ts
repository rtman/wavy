import { gql } from 'apollo-boost';

export const PLAY_HISTORY = gql`
  query playHistory($userId: String!) {
    playHistory(userId: $userId) {
      id
      title
      url
      imageUrl
      label {
        id
        name
        imageUrl
      }
      artist {
        id
        name
        imageUrl
      }
      album {
        id
        title
        imageUrl
      }
    }
  }
`;

export const TOP_SONGS = gql`
  query topSongs($userId: String!) {
    topSongs(userId: $userId) {
      id
      title
      url
      imageUrl
      label {
        id
        name
        imageUrl
      }
      artist {
        id
        name
        imageUrl
      }
      album {
        id
        title
        imageUrl
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
          imageUrl
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
          imageUrl
        }
      }
      following {
        createdAt
        artist {
          id
          name
          imageUrl
          songs {
            id
            title
            url
            imageUrl
            playCount
          }
        }
      }
      favourites {
        createdAt
        song {
          id
          title
          imageUrl
          url
          label {
            id
            name
            imageUrl
          }
          album {
            id
            title
            imageUrl
            label {
              id
              name
              imageUrl
            }
          }
          artist {
            id
            name
            imageUrl
          }
          supportingArtists {
            createdAt
            artist {
              id
              name
              imageUrl
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
          imageUrl
          description
          songs {
            song {
              id
              title
              url
              imageUrl
              playCount
            }
          }
        }
      }
    }
  }
`;
