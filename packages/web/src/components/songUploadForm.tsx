import {
  IconButton,
  LinearProgress,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import DeleteIcon from '@material-ui/icons/Delete';
import { Flex, TagInput } from 'components';
import * as helpers from 'helpers';
import React, { useEffect } from 'react';
import { Control, Controller } from 'react-hook-form';
import { ArrayField } from 'react-hook-form/dist/types/form';
import { Artist } from 'types';

import { SongForUpload } from '../screens/artistCreateRelease';

interface SongUploadFormProps {
  artists?: Artist[];
  creatorId: string;
  releaseId: string;
  songData: SongForUpload;
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: Partial<ArrayField<Record<string, any>, 'id'>>;
  index: number;
  setUploadStatusCallback: (
    uploadStatus: helpers.hooks.UploadStatus,
    index: number
  ) => void;
  control: Control;
  setValue: any;
  removeSong: (index: number) => void;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export const SongUploadForm = (props: SongUploadFormProps) => {
  const {
    artists,
    creatorId,
    releaseId,
    setUploadStatusCallback,
    setValue,
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

  console.log('*debug* uploadStatus', uploadStatus);

  useEffect(() => {
    setUploadStatusCallback(uploadStatus, index);
    // Disabling for now,  including setUploadStatusCallback in the deps array causes constant re rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadStatus, index]);

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

          <Controller
            render={(controllerProps) => (
              <Autocomplete
                {...controllerProps}
                multiple={true}
                options={artists ?? []}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Supporting Artists"
                    variant="outlined"
                  />
                )}
                value={controllerProps.value}
                onChange={(e: any, values: any) =>
                  setValue(`songs[${index}].supportingArtists`, values)
                }
              />
            )}
            name="country"
            control={control}
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
