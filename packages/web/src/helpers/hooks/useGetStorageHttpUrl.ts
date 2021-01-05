import firebase from 'firebase';
import { useEffect, useState } from 'react';

export const useGetStorageHttpUrl = (googleStorageUri: string) => {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    const getStorageHttpUrl = async () => {
      const fileRef = firebase.storage().refFromURL(googleStorageUri);
      const resolvedUrl = (await fileRef.getDownloadURL()) as string;

      setUrl(resolvedUrl);
    };

    void getStorageHttpUrl();
  });

  return url;
};
