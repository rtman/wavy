import { gql } from 'apollo-boost';

export const SONGS_BY_ID_QUERY = gql`
  query SongsById($songIds: [String!]!) {
    songsById(songIds: $songIds) {
      id
      title
      urlHigh
      label {
        id
        name
        profileImageUrlLarge
        profileImageUrlSmall
        profileImageUrlThumb
      }
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
      }
    }
  }
`;

export const SEARCH_SONGS_QUERY = gql`
  query SearchSongs($query: String!) {
    searchSongs(query: $query) {
      id
      title
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
      }
      label {
        id
        name
        profileImageUrlLarge
        profileImageUrlSmall
        profileImageUrlThumb
      }
      urlHigh
      releaseDate
    }
  }
`;

export const TOP_SONGS = gql`
  query topSongs {
    topSongs {
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

export const TOP_SONGS_BY_TAG_ID = gql`
  query topSongsByTag($tagId: String!) {
    topSongsByTag(tagId: $tagId) {
      id
      title
      urlHigh
      label {
        id
        name
        profileImageUrlLarge
        profileImageUrlSmall
        profileImageUrlThumb
      }
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
      }
    }
  }
`;

export const TOP_SONGS_BY_TAG_NAME = gql`
  query topSongsByTagName($tagName: String!) {
    topSongsByTagName(tagName: $tagName) {
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
