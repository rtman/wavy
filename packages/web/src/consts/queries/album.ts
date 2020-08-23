import { gql } from 'apollo-boost';

export const ALBUM_BY_ID = gql`
  query AlbumById($albumId: String!) {
    albumById(albumId: $albumId) {
      id
      title
      imageUrl
      description
      songs {
        id
        title
        url
        imageUrl
        artistId
        albumId
        label {
          id
          name
          imageUrl
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
            imageUrl
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
        imageUrl
        albums {
          title
          id
          imageUrl
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
      imageUrl
      artist {
        id
        name
        imageUrl
      }
      label {
        id
        name
        imageUrl
      }
    }
  }
`;
