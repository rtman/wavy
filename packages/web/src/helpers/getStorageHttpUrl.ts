import firebase from 'firebase';

export const getStorageHttpUrl = async (googleStorageUri: string) => {
  const fileRef = firebase.storage().refFromURL(googleStorageUri);
  const resolvedUrl: Promise<string> = await fileRef.getDownloadURL();

  return resolvedUrl;
};
