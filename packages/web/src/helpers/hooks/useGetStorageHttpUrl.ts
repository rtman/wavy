import { useEffect, useState } from 'react';
import firebase from 'firebase';

export const useGetStorageHttpUrl = (googleStorageUri: string) => {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    const getStorageHttpUrl = async () => {
      const fileRef = firebase.storage().refFromURL(googleStorageUri);
      const resolvedUrl = await fileRef.getDownloadURL();
      setUrl(resolvedUrl);
    };

    getStorageHttpUrl();
  });

  return url;
};