import { useMutation } from '@apollo/client';
import {
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import { Flex, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import * as firebase from 'firebase';
import * as helpers from 'helpers';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import ImageUploader from 'react-images-upload';
import { useHistory } from 'react-router-dom';
import { Mutation, MutationCreateLabelArgs } from 'types';
import { uuid } from 'uuidv4';

export const CreateLabel = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const userContext = useContext(UserContext);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const { user } = userContext ?? {};
  const { id: userId } = user ?? {};

  const { onDrop, image, imageFile } = helpers.hooks.useOnDropImage({
    minHeight: consts.image.minHeight,
    minWidth: consts.image.minWidth,
  });

  const [createLabel, { loading, called, error }] = useMutation<
    Pick<Mutation, 'createLabel'>,
    MutationCreateLabelArgs
  >(consts.mutations.label.CREATE_LABEL, {
    onCompleted(data) {
      console.log('onCompleted data', data);
      if (data.createLabel.id) {
        enqueueSnackbar('Success! Label Created', {
          variant: 'success',
          autoHideDuration: 4000,
        });
        history.push(`/label/${data.createLabel.id}`);
      } else {
        enqueueSnackbar('Error! Label Not Created', {
          variant: 'error',
          autoHideDuration: 4000,
        });
      }
    },
  });

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Error! Label Not Created', {
        variant: 'error',
        autoHideDuration: 4000,
      });
    }
  }, [error, enqueueSnackbar]);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const onChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(event.target.value);

  const onSubmit = async () => {
    const labelId = uuid();

    let fullStoragePath = '';
    const fileExtension = imageFile?.name.split('.').splice(-1)[0];

    if (imageFile) {
      const storageRef = firebase.storage().ref();
      const labelImageRef = storageRef.child(
        `${labelId}/profileImage.${fileExtension}`
      );
      const snapshot = await labelImageRef.put(imageFile);

      if (snapshot) {
        await labelImageRef.getDownloadURL();
        fullStoragePath = labelImageRef.toString();
      } else {
        enqueueSnackbar('Error! Image upload failed', {
          variant: 'error',
          autoHideDuration: 4000,
        });

        return;
      }
    }

    if (userId) {
      await createLabel({
        variables: {
          input: {
            userId,
            labelId,
            name,
            description,
            profileImageStoragePath: fullStoragePath,
          },
        },
      });
    }
  };

  return (
    <Container maxWidth={false}>
      <Spacing.section.Minor />
      <Typography variant="h4">New Label</Typography>
      <Spacing.section.Minor />
      {image ? (
        <img src={image} width={500} height={500} />
      ) : (
        <ImageUploader
          withIcon={true}
          buttonText="Select Image"
          onChange={onDrop}
          imgExtension={consts.image.allowedFormats}
          maxFileSize={consts.image.maxFileSize}
          singleImage={true}
          label={consts.image.uploadRequirementsLabel}
        />
      )}
      <TextField
        autoFocus={true}
        margin="dense"
        id="name"
        label="Name"
        fullWidth={true}
        onChange={onChangeName}
        value={name}
      />
      <TextField
        margin="dense"
        id="description"
        label="Description"
        multiline={true}
        fullWidth={true}
        onChange={onChangeDescription}
        value={description}
      />

      <Flex>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          {called || loading ? (
            <CircularProgress color="secondary" />
          ) : (
            'Create'
          )}
        </Button>
      </Flex>
    </Container>
  );
};
