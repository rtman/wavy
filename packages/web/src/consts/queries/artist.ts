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
      profileImageUrlSmall
      profileImageUrlThumb
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
      profileImageUrlSmall
      profileImageUrlThumb
      albums {
        id
        title
        profileImageUrlLarge
        profileImageUrlSmall
        profileImageUrlThumb
        active
        label {
          id
          name
          profileImageUrlLarge
          profileImageUrlSmall
          profileImageUrlThumb
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
            profileImageUrlSmall
            profileImageUrlThumb
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
            profileImageUrlSmall
            profileImageUrlThumb
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
      profileImageUrlSmall
      profileImageUrlThumb
    }
  }
`;

export const SEARCH_ARTISTS_QUERY = gql`
  query SearchArtists($query: String!) {
    searchArtists(query: $query) {
      id
      name
      profileImageUrlLarge
      profileImageUrlSmall
      profileImageUrlThumb
    }
  }
`;
