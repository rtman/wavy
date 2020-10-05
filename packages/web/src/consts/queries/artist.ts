import { gql } from 'apollo-boost';

export const ARTISTS = gql`
  query Artists {
    artists {
      id
      name
    }
  }
`;

export const ARTISTS_BY_ID = gql`
  query ArtistsByID($artistIds: [ID]!) {
    artistsById(artistIds: $artistIds) {
      id
      name
      profileImageUrlLarge
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
      profileImageUrlLarge
      artistConnections {
        id
        name
      }
      albums {
        id
        title
        profileImageUrlLarge
        label {
          id
          name
          profileImageUrlLarge
        }
        songs {
          id
          title
          urlHigh
          playCount
          label {
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
          urlHigh
          album {
            id
            title
            profileImageUrlLarge
          }
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
      profileImageUrlLarge
      albums {
        id
        title
        profileImageUrlLarge
        label {
          id
          name
          profileImageUrlLarge
        }
        songs {
          id
          title
          urlHigh
          playCount
          supportingArtists {
            createdAt
            artist {
              id
              name
              profileImageUrlLarge
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
        urlHigh
        playCount
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
          urlHigh
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
      profileImageUrlLarge
    }
  }
`;
