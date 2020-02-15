import { Screen } from 'components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ARTIST = gql`
  query Artist($id: ID!) {
    artist(id: $id) {
      name
      description
      albums
    }
  }
`;

export const Artist = () => {
  const { id } = useParams();
  const { loading, error, data, networkStatus } = useQuery(ARTIST, { variables: { id: id?.toString() } });

  console.log('error', error);

  return (
    <Screen>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <div>{data.artist.name}</div>
          <div>{data.artist.description}</div>
          <div>{data.artist.albums}</div>
        </>
      )}
    </Screen>
  );
};
