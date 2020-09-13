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

export const SEARCH_SONGS_QUERY = gql`
  query SearchSongs($query: String!) {
    searchSongs(query: $query) {
      id
      title
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
      label {
        id
        name
        profileImageUrlLarge
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

export const TOP_SONGS_BY_TAG_NAME = gql`
  query topSongsByTagName($tagName: String!) {
    topSongsByTagName(tagName: $tagName) {
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
