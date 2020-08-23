import { gql } from 'apollo-boost';

export const SONGS_BY_ID_QUERY = gql`
  query SongsById($songIds: [String!]!) {
    songsById(songIds: $songIds) {
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

export const SEARCH_SONGS_QUERY = gql`
  query SearchSongs($query: String!) {
    searchSongs(query: $query) {
      id
      title
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
      label {
        id
        name
        imageUrl
      }
      url
      imageUrl
      releaseDate
    }
  }
`;

export const TOP_SONGS = gql`
  query topSongs {
    topSongs {
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
