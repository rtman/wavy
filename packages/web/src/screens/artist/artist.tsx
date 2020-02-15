import { Screen } from 'components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import firebase from 'firebase';

const ARTIST = gql`
  query Artist($id: ID!) {
    artist(id: $id) {
      name
      description
      image
      albums
    }
  }
`;

const getHttpUrl = async (googleStorageUri: string) => {
  const fileRef = firebase.storage().refFromURL(googleStorageUri);
  const url = await fileRef.getDownloadURL();
  return url;
};

export const Artist = () => {
  const { id } = useParams();
  const { loading, error, data, networkStatus } = useQuery(ARTIST, { variables: { id: id?.toString() } });
  const [imageUrl, setImageUrl] = useState<string>('');

  console.log('error', error);

  useEffect(() => {
    const runAysnc = async () => {
      if (data?.artist?.image) {
        const url = await getHttpUrl(data.artist.image);
        setImageUrl(url);
      }
    };
    runAysnc();
  }, [data]);

  return (
    <Screen>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <img style={{ width: '50%' }} src={imageUrl} />
          <div>{data.artist.name}</div>
          <div>{data.artist.description}</div>
          <div>{data.artist.albums}</div>
        </>
      )}
    </Screen>
  );
};
