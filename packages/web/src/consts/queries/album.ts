import { gql } from 'apollo-boost';

export const ALBUM_BY_ID = gql`
  query AlbumById($albumId: String!) {
    albumById(albumId: $albumId) {
      id
      title
      profileImageUrlLarge
      profileImageUrlSmall
      profileImageUrlThumb
      description
      processing
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
          profileImageUrlSmall
          profileImageUrlThumb
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
            profileImageUrlSmall
            profileImageUrlThumb
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
        profileImageUrlSmall
        profileImageUrlThumb
        albums {
          title
          id
          profileImageUrlLarge
          profileImageUrlSmall
          profileImageUrlThumb
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
      profileImageUrlSmall
      profileImageUrlThumb
      artist {
        id
        name
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
    }
  }
`;
