import { gql } from 'apollo-boost';

export const ALBUM_BY_ID = gql`
  query AlbumById($albumId: String!) {
    albumById(albumId: $albumId) {
      id
      title
      profileImageUrlLarge
      description
      songs {
        id
        title
        urlHigh
        artistId
        albumId
        label {
          id
          name
          profileImageUrlLarge
        }
        artist {
          id
          name
        }
        supportingArtists {
          createdAt
          artist {
            id
            name
            profileImageUrlLarge
          }
        }
        usersFavourited {
          createdAt
          user {
            id
            firstName
            lastName
          }
        }
      }
      artist {
        id
        name
        profileImageUrlLarge
        albums {
          title
          id
          profileImageUrlLarge
        }
      }
    }
  }
`;

export const SEARCH_ALBUMS_QUERY = gql`
  query SearchAlbums($query: String!) {
    searchAlbums(query: $query) {
      id
      title
      profileImageUrlLarge
      artist {
        id
        name
        profileImageUrlLarge
      }
      label {
        id
        name
        profileImageUrlLarge
      }
    }
  }
`;
