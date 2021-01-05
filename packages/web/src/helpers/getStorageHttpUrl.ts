import firebase from 'firebase';

export const getStorageHttpUrl = async (googleStorageUri: string) => {
  const fileRef = firebase.storage().refFromURL(googleStorageUri);
  const resolvedUrl = (await fileRef.getDownloadURL()) as string;

  return resolvedUrl;
};
