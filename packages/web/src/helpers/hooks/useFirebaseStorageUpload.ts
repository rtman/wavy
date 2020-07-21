import * as firebase from 'firebase';
// import { useSnackbar } from 'notistack';
import { uuid } from 'uuidv4';

export const useFirebaseStorageUpload = () => {
  //   const { enqueueSnackbar } = useSnackbar();

  const uploadFile = (props: {
    rootDir?: string;
    parentDir?: string;
    childDir?: string;
    file: File;
  }) => {
    const { rootDir, parentDir, childDir, file } = props;

    const id = uuid();
    const fileNameWithoutExtension = file.name.substring(
      0,
      file.name.lastIndexOf('.')
    );
    const fileExtension = file.name.substring(
      file.name.lastIndexOf('.'),
      file.name.length
    );

    const storageRef = firebase.storage().ref();

    let storagePath = '';
    rootDir ? (storagePath += `${rootDir}/`) : (storagePath += '');
    parentDir ? (storagePath += `${parentDir}/`) : (storagePath += '');
    childDir ? (storagePath += `${childDir}/`) : (storagePath += '');

    storagePath += `${id}/${fileNameWithoutExtension}.${fileExtension}`;

    const fileStorageRef = storageRef.child(storagePath);
    const uploadTask = fileStorageRef.put(file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('*debug* Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('*debug* Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('*debug* Upload is running');
            return {
              progress,
              error: undefined,
              complete: false,
              running: true,
              data: undefined,
            };
        }
      },
      (error) => {
        const firebaseError = error as firebase.FirebaseError;

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (firebaseError.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object

            break;

          case 'storage/canceled':
            // User canceled the upload
            break;

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
        return {
          progress: undefined,
          error: error,
          complete: false,
          running: false,
          data: undefined,
        };
      },
      () => {
        // Upload completed successfully, now we can get the download URL

        console.log('*debug* upload complete');

        const downloadUrl = uploadTask.snapshot.ref.getDownloadURL();
        const gsUrl = uploadTask.snapshot.ref.toString();

        return {
          progress: 100,
          error: undefined,
          complete: true,
          running: false,
          data: { id, downloadUrl, gsUrl },
        };
      }
    );
    return uploadTask;
  };

  return uploadFile;
};
