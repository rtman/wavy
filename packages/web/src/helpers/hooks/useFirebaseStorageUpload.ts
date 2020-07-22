import * as firebase from 'firebase';
// import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';
import { uuid } from 'uuidv4';

export interface UploadStatus {
  progress?: number;
  error?: firebase.FirebaseError;
  complete: boolean;
  running: boolean;
  paused: boolean;
  data?: UploadCompleteData;
}

export interface UploadCompleteData {
  id: string;
  gsUrl: string;
  downloadUrl: string;
}

export interface UseFirebaseStorageUploadInputProps {
  rootDir?: string;
  parentDir?: string;
  childDir?: string;
  file?: File;
}

export const useFirebaseStorageUpload = (
  props: UseFirebaseStorageUploadInputProps
) => {
  //   const { enqueueSnackbar } = useSnackbar();
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>({
    progress: 0,
    error: undefined,
    complete: false,
    running: false,
    paused: false,
    data: undefined,
  });

  const uploadFile = useCallback(() => {
    const { rootDir, parentDir, childDir, file } = props;

    if (file) {
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
          const uploadProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('*debug* Upload is ' + uploadProgress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('*debug* Upload is paused');
              setUploadStatus({
                progress: uploadProgress,
                error: undefined,
                complete: false,
                running: false,
                paused: true,
                data: undefined,
              });
              break;

            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('*debug* Upload is running');
              setUploadStatus({
                progress: uploadProgress,
                error: undefined,
                complete: false,
                running: true,
                paused: false,
                data: undefined,
              });
              break;
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
          setUploadStatus({
            progress: undefined,
            error: firebaseError,
            complete: false,
            running: false,
            paused: false,
            data: undefined,
          });
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          const uploadComplete = async () => {
            console.log('*debug* upload complete');

            const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
            const gsUrl = uploadTask.snapshot.ref.toString();

            setUploadStatus({
              progress: 100,
              error: undefined,
              complete: true,
              running: false,
              paused: false,
              data: { id, downloadUrl, gsUrl },
            });
          };
          uploadComplete();
        }
      );
    }
  }, []);

  useEffect(() => {
    if (props.file) {
      uploadFile();
    }
  }, [props.file, uploadFile]);

  return { uploadStatus };
};
