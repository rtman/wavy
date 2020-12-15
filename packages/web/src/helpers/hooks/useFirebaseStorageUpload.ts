import { UploadStatus } from 'types';
import * as firebase from 'firebase';
// import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';

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
    task: undefined,
  });

  const { rootDir, parentDir, childDir, file } = props;

  useEffect(() => {
    const uploadFile = () => {
      if (file) {
        console.log('*debug* useFirebaseStorageUpload file', file);
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

        storagePath += `${fileNameWithoutExtension}.${fileExtension}`;

        const fileStorageRef = storageRef.child(storagePath);
        const uploadTask = fileStorageRef.put(file);

        uploadTask.on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const uploadProgress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                setUploadStatus({
                  progress: uploadProgress,
                  error: undefined,
                  complete: false,
                  running: false,
                  paused: true,
                  data: undefined,
                  task: uploadTask,
                });
                break;

              case firebase.storage.TaskState.RUNNING: // or 'running'
                setUploadStatus({
                  progress: uploadProgress,
                  error: undefined,
                  complete: false,
                  running: true,
                  paused: false,
                  data: undefined,
                  task: uploadTask,
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
              task: uploadTask,
            });
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            const uploadComplete = async () => {
              const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
              const fullStoragePath = uploadTask.snapshot.ref.toString();

              setUploadStatus({
                progress: 100,
                error: undefined,
                complete: true,
                running: false,
                paused: false,
                data: { id: childDir, downloadUrl, fullStoragePath },
                task: uploadTask,
              });
            };
            uploadComplete();
          }
        );
      }
    };
    if (file) {
      uploadFile();
    }
  }, [file, childDir, parentDir, rootDir]);

  return { uploadStatus };
};
