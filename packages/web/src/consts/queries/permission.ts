import { gql } from '@apollo/client';

export const GET_PERMISSIONS = gql`
  query GetPermissions($id: String!) {
    getPermissions(id: $id) {
      requestor {
        entity {
          ... on Artist {
            id
            name
            profileImageUrlThumb
          }
          ... on Label {
            id
            name
            profileImageUrlThumb
          }
        }

        requestorId
        requesteeId
        requestorEntity
        requesteeEntity
        createdAt
        updatedAt
        createMusic
        createSupportingArtist
      }
      requestee {
        entity {
          ... on Artist {
            id
            name
          }
          ... on Label {
            id
            name
          }
        }
        requestorId
        requesteeId
        requestorEntity
        requesteeEntity
        createdAt
        updatedAt
        createMusic
        createSupportingArtist
      }
    }
  }
`;
