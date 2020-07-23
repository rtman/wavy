import {
  LinearProgress,
  IconButton,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Flex } from 'components';
import * as helpers from 'helpers';
import React, { useEffect } from 'react';
import { Control, Controller } from 'react-hook-form';

import { SongForUpload } from '../screens/createRelease/createRelease';

interface SongUploadFieldProps {
  creatorId: string;
  releaseId: string;
  songData: SongForUpload;
  // formData: Partial<Record<string, any>, 'id'>;
  formData: any;
  index: number;
  setUploadStatusCallback: (
    uploadStatus: helpers.hooks.UploadStatus,
    index: number
  ) => void;
  control: Control;
  removeSong: (index: number) => void;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export const SongUploadField = (props: SongUploadFieldProps) => {
  const {
    creatorId,
    releaseId,
    setUploadStatusCallback,
    index,
    control,
    formData,
    songData,
    removeSong,
  } = props;

  const classes = useStyles();

  const { uploadStatus } = helpers.hooks.useFirebaseStorageUpload({
    rootDir: creatorId,
    parentDir: 'albums',
    childDir: releaseId,
    file: songData.file,
  });

  // useEffect(() => {
  //   if (songData && songData.file) {
  //     uploadFile({
  //       rootDir: creatorId,
  //       parentDir: 'albums',
  //       file: songData.file,
  //     });
  //   }
  // }, [songData, uploadFile, creatorId]);

  // useEffect(() => {
  //   setUploadStatusCallback(uploadStatus, index);
  // }, [uploadStatus, setUploadStatusCallback, index]);

  console.log('*debug* uploadStatus', uploadStatus);

  return (
    <div className={classes.root} key={formData.id}>
      <LinearProgress variant="determinate" value={uploadStatus.progress} />
      <Flex>
        <Flex flexDirection="column">
          <Controller
            as={<TextField />}
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth={true}
            name={`songs[${index}].title`}
            label="Title"
            id={`songs[${index}].title`}
            autoComplete="title"
            control={control}
            defaultValue={formData.title} // make sure to set up
          />
        </Flex>

        <IconButton
          type="submit"
          color="primary"
          // className={classes.submit}
          onClick={() => removeSong(index)}
        >
          <DeleteIcon />
        </IconButton>
      </Flex>
    </div>
  );
};
