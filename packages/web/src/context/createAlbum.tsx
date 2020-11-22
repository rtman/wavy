import { SongForUpload, UploadStatus } from 'commonTypes';
import React, { FunctionComponent, useCallback, useState } from 'react';
import {
  DropzoneInputProps,
  DropzoneRootProps,
  FileRejection,
  useDropzone,
} from 'react-dropzone';
import { createContext } from 'use-context-selector';
import { useSnackbar } from 'notistack';

interface CreateAlbumContextProps {
  addSong: (
    fileAccepted: File[],
    fileRejected: FileRejection[]
  ) => string | undefined;
  deleteSong: (index: number) => void;
  updateAllUploadStatuses: (newUploadStatuses: UploadStatus[]) => void;
  updateSongsForUpload: (song: SongForUpload[]) => void;
  songsForUpload: SongForUpload[];
  uploadStatuses: UploadStatus[];
  getRootProps: (props?: DropzoneRootProps | undefined) => DropzoneRootProps;
  getInputProps: (props?: DropzoneInputProps | undefined) => DropzoneInputProps;
  acceptedFiles: File[];
  fileRejections: FileRejection[];
}

export const CreateAlbumContext = createContext<
  CreateAlbumContextProps | undefined
>(undefined);

export const CreateAlbumProvider: FunctionComponent = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const [songsForUpload, setSongsForUpload] = useState<SongForUpload[]>([]);
  const [uploadStatuses, setUploadStatuses] = useState<UploadStatus[]>([]);

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    accept: 'audio/*',
  });

  const updateSongsForUpload = useCallback(
    (song: SongForUpload[]) => setSongsForUpload(song),
    []
  );

  const updateAllUploadStatuses = useCallback(
    (newUploadStatuses: UploadStatus[]) => {
      setUploadStatuses([...newUploadStatuses]);
    },
    []
  );

  const deleteSong = useCallback(
    (index: number) => {
      if (uploadStatuses[index]) {
        const upload = uploadStatuses[index];

        if (upload.complete && upload.task) {
          upload.task.snapshot.ref.delete();
        }

        if (upload.running && !upload.complete && upload.task) {
          upload.task.cancel();
        }

        const resolvedSongsForUpload = [...songsForUpload];
        resolvedSongsForUpload.splice(index, 1);
        updateSongsForUpload(resolvedSongsForUpload);

        const resolvedUploadStatuses = [...uploadStatuses];
        resolvedUploadStatuses.splice(index, 1);

        updateAllUploadStatuses(resolvedUploadStatuses);
      }
    },
    [
      updateAllUploadStatuses,
      songsForUpload,
      uploadStatuses,
      updateSongsForUpload,
    ]
  );

  const addSong = (fileAccepted: File[], fileRejected: FileRejection[]) => {
    if (fileRejected.length > 0) {
      enqueueSnackbar('Error! Wrong file type please try again', {
        variant: 'error',
        autoHideDuration: 4000,
      });
      return;
    }
    if (fileAccepted.length > 0 && updateSongsForUpload && songsForUpload) {
      const newFile = fileAccepted[0];
      const resolvedSongsForUpload = [...songsForUpload];
      let title = newFile.name.trim();
      if (newFile.name.lastIndexOf('.') !== -1) {
        title = newFile.name.substring(0, newFile.name.lastIndexOf('.')).trim();
      }
      resolvedSongsForUpload.push({
        title: newFile.name.trim(),
        file: newFile,
      });
      updateSongsForUpload(resolvedSongsForUpload);
      return title;
    }
    return;
  };

  console.log('*debug* createAlbumContext');

  return (
    <CreateAlbumContext.Provider
      value={{
        addSong,
        deleteSong,
        songsForUpload,
        updateAllUploadStatuses,
        updateSongsForUpload,
        uploadStatuses,
        getRootProps,
        getInputProps,
        acceptedFiles,
        fileRejections,
      }}
    >
      {props.children}
    </CreateAlbumContext.Provider>
  );
};
