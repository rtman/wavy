import { LinearProgress, makeStyles } from '@material-ui/core';
import { SongForUpload } from 'commonTypes';
import { CreateAlbumContext } from 'context';
import * as helpers from 'helpers';
import React, { memo, useEffect } from 'react';
import { useContextSelector } from 'use-context-selector';

interface UploaderProps {
  creatorId: string;
  releaseId: string;
  songData: SongForUpload;
  index: number;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export const Uploader = memo((props: UploaderProps) => {
  const classes = useStyles();
  const { creatorId, releaseId, songData, index } = props;

  const { uploadStatus } = helpers.hooks.useFirebaseStorageUpload({
    rootDir: creatorId,
    parentDir: 'albums',
    childDir: releaseId,
    file: songData.file,
  });

  const updateAllUploadStatuses = useContextSelector(
    CreateAlbumContext,
    (values) => values?.updateAllUploadStatuses
  );

  const uploadStatuses = useContextSelector(
    CreateAlbumContext,
    (values) => values?.uploadStatuses
  );

  useEffect(() => {
    if (updateAllUploadStatuses && uploadStatuses) {
      const clonedUploadStatuses = [...uploadStatuses];
      clonedUploadStatuses[index] = uploadStatus;
      updateAllUploadStatuses(clonedUploadStatuses);
    }
  }, [uploadStatus, updateAllUploadStatuses, index]);

  console.log('*debug* uploader - releaseId', releaseId);

  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={uploadStatus.progress} />
    </div>
  );
});

Uploader.whyDidYouRender = true;
