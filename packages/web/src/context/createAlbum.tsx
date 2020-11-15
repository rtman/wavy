import { SongForUpload, UploadStatus } from 'commonTypes';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';

interface CreateAlbumContextProps {
  // removeSong: (index: number) => void;
  updateAllUploadStatuses: (newUploadStatuses: UploadStatus[]) => void;
  updateSongsForUpload: (song: SongForUpload[]) => void;
  updateUploadStatus: (newUploadStatus: UploadStatus, index: number) => void;
  songsForUpload: SongForUpload[];
  uploadStatuses: UploadStatus[];
}

export const CreateAlbumContext = createContext<
  CreateAlbumContextProps | undefined
>(undefined);

export const CreateAlbumProvider: FunctionComponent = (props) => {
  const [songsForUpload, setSongsForUpload] = useState<SongForUpload[]>([]);
  const [uploadStatuses, setUploadStatuses] = useState<UploadStatus[]>([]);

  const updateSongsForUpload = useCallback(
    (song: SongForUpload[]) => setSongsForUpload(song),
    []
  );

  const updateUploadStatus = useCallback(
    (newUploadStatus: UploadStatus, index: number) => {
      const uploadStatusesCloned = [...uploadStatuses];
      uploadStatusesCloned[index] = newUploadStatus;
      setUploadStatuses([...uploadStatusesCloned]);
    },
    []
  );

  const updateAllUploadStatuses = useCallback(
    (newUploadStatuses: UploadStatus[]) => {
      setUploadStatuses([...newUploadStatuses]);
    },
    []
  );

  // const removeSong = (index: number) => {
  //   if (uploadStatuses[index]) {
  //     const upload = uploadStatuses[index];

  //     if (upload.complete && upload.task) {
  //       upload.task.snapshot.ref.delete();
  //     }

  //     if (upload.running && !upload.complete && upload.task) {
  //       upload.task.cancel();
  //     }

  //     const resolvedSongsForUpload = [...songsForUpload];
  //     resolvedSongsForUpload.splice(index, 1);
  //     updateSongsForUpload(resolvedSongsForUpload);

  //     const resolvedUploadStatuses = [...uploadStatuses];
  //     resolvedUploadStatuses.splice(index, 1);

  //     updateAllUploadStatuses(resolvedUploadStatuses);
  //   }
  // };

  console.log('*debug* createAlbumContext');

  return (
    <CreateAlbumContext.Provider
      value={{
        // removeSong,
        songsForUpload,
        updateAllUploadStatuses,
        updateSongsForUpload,
        updateUploadStatus,
        uploadStatuses,
      }}
    >
      {props.children}
    </CreateAlbumContext.Provider>
  );
};
