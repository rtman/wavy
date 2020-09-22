import {
  FormControlLabel,
  IconButton,
  LinearProgress,
  makeStyles,
  Switch,
  TextField,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Autocomplete } from '@material-ui/lab';
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
  watch: any;
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
    watch,
  } = props;

  const classes = useStyles();

  const { uploadStatus } = helpers.hooks.useFirebaseStorageUpload({
    rootDir: creatorId,
    parentDir: 'albums',
    childDir: releaseId,
    file: songData.file,
  });

  const watchHasSupportingArtists = watch(
    `songs[${index}].hasSupportingArtists`
  );

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
            id={'title'}
            control={control}
            defaultValue={formData.title}
          />

          <Controller
            as={<TextField />}
            variant="outlined"
            margin="normal"
            required={false}
            fullWidth={true}
            name={`songs[${index}].isrc`}
            label="ISRC"
            id={'isrc'}
            control={control}
            defaultValue={formData.title}
          />

          <Controller
            control={control}
            name={`songs[${index}].hasSupportingArtists`}
            id={`songs[${index}].hasSupportingArtists`}
            defaultValue={false}
            as={
              <FormControlLabel
                value={`songs[${index}].hasSupportingArtists`}
                label="Supporting Artists"
                control={<Switch />}
              />
            }
          />

          {watchHasSupportingArtists ? (
            <Controller
              name={`songs[${index}].supportingArtists`}
              control={control}
              render={(controllerProps) => (
                <Autocomplete
                  {...controllerProps}
                  multiple={true}
                  options={artists ?? []}
                  getOptionLabel={(option) => option.name}
                  onChange={(e: any, values: any) =>
                    setValue(`songs[${index}].supportingArtists`, values)
                  }
                  defaultValue={[]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth={true}
                      label="Supporting Artists"
                      variant="outlined"
                    />
                  )}
                />
              )}
            />
          ) : null}
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
