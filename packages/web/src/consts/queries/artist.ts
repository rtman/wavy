import { gql } from 'apollo-boost';

export const ARTISTS_BY_ID = gql`
  query ArtistsByID($artistIds: [ID]!) {
    artistsById(artistIds: $artistIds) {
      id
      name
      imageUrl
      description
      album_ids
    }
  }
`;

export const ARTIST_BY_ID = gql`
  query ArtistById($artistId: String!) {
    artistById(artistId: $artistId) {
      id
      name
      description
      imageUrl
      albums {
        id
        title
        imageUrl
        label {
          id
          name
          imageUrl
        }
        songs {
          id
          title
          url
          imageUrl
          playCount
          label {
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
          # usersRecentlyPlayed {
          #   createdAt
          #   user {
          #     id
          #     firstName
          #     lastName
          #   }
          # }
        }
      }
      songs {
        id
        title
        url
        imageUrl
        playCount
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
      }
      usersFollowing {
        createdAt
        user {
          id
          firstName
          lastName
        }
      }
      supportingArtistOn {
        createdAt
        song {
          id
          title
          url
        }
      }
    }
  }
`;

export const NEW_ARTISTS = gql`
  query NewArtists {
    newArtists {
      id
      name
      description
      imageUrl
      albums {
        id
        title
        imageUrl
        label {
          id
          name
          imageUrl
        }
        songs {
          id
          title
          url
          imageUrl
          playCount
          label {
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
          # usersRecentlyPlayed {
          #   createdAt
          #   user {
          #     id
          #     firstName
          #     lastName
          #   }
          # }
        }
      }
      songs {
        id
        title
        url
        imageUrl
        playCount
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
      }
      usersFollowing {
        createdAt
        user {
          id
          firstName
          lastName
        }
      }
      supportingArtistOn {
        createdAt
        song {
          id
          title
          url
        }
      }
    }
  }
`;

export const SEARCH_ARTISTS_QUERY = gql`
  query SearchArtists($query: String!) {
    searchArtists(query: $query) {
      id
      name
      imageUrl
    }
  }
`;
