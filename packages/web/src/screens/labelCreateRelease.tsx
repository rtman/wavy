import { useMutation, useQuery } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  Typography,
} from '@material-ui/core';
import {
  CreateAlbumArgs,
  Mutation,
  MutationAddSongsToAlbumArgs,
  MutationCreateAlbumArgs,
  NewSongArgs,
  Query,
} from 'commonTypes';
import { CreateAlbumForm, FileUploadButton, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const LabelCreateRelease = () => {
  const history = useHistory();
  const { id } = useParams();
  const userContext = useContext(UserContext);

  const { enqueueSnackbar } = useSnackbar();
  // const [acceptedFiles, setacceptedFiles] = useState<File[]>([]);
  // const [fileRejections, setfileRejections] = useState<File[]>([]);

  const {
    loading: labelByIdLoading,
    error: labelByIdError,
    data: labelByIdData,
  } = useQuery<Pick<Query, 'labelById'>>(consts.queries.label.LABEL_BY_ID, {
    variables: { labelId: id },
  });

  const [createAlbum, { loading, called, error }] = useMutation<
    Pick<Mutation, 'createAlbum'>,
    MutationCreateAlbumArgs
  >(consts.mutations.album.CREATE_ALBUM, {
    onCompleted(data) {
      console.log('onCompleted data', data);
      if (data.createAlbum.id) {
        enqueueSnackbar('Success! Release Created, songs are processing', {
          variant: 'success',
          autoHideDuration: 4000,
        });
        history.push(`/album/${data.createAlbum.id}`);
      } else {
        enqueueSnackbar('Error! Release Not Created', {
          variant: 'error',
          autoHideDuration: 4000,
        });
      }
    },
  });

  const [
    addSongsToAlbum,
    {
      loading: addSongsToAlbumLoading,
      called: addSongsToAlbumCalled,
      error: addSongsToAlbumError,
    },
  ] = useMutation<
    Pick<Mutation, 'addSongsToAlbum'>,
    MutationAddSongsToAlbumArgs
  >(consts.mutations.album.ADD_SONGS_ALBUM, {
    onCompleted(data) {
      console.log('onCompleted data', data);
      if (data.addSongsToAlbum) {
        enqueueSnackbar('Processing complete', {
          variant: 'success',
          autoHideDuration: 4000,
        });
      } else {
        enqueueSnackbar('Error! Processing failed', {
          variant: 'error',
          autoHideDuration: 4000,
        });
      }
    },
    onError() {
      enqueueSnackbar('Error! Processing failed', {
        variant: 'error',
        autoHideDuration: 4000,
      });
    },
  });

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Error! Release Not Created', {
        variant: 'error',
        autoHideDuration: 4000,
      });
    }
  }, [error, enqueueSnackbar]);

  const onSubmit = async (data: {
    album: CreateAlbumArgs;
    songs: NewSongArgs[];
  }) => {
    console.log('*debug* onSubmit data.album', data.album);
    console.log('*debug* onSubmit data.songs', data.songs);
    // if (
    //   uploadStatuses.find((upload) => upload.data === undefined) === undefined
    // ) {
    //   const resolvedSongsForUpload = songsForUpload.map((song, index) => {
    //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //     const { file, ...rest } = song;

    //     // data is checked above for undefined in the find
    //     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    //     const uploadData = uploadStatuses[index].data!;

    //     return {
    //       ...rest,
    //       title: data.songs[index].title.trim(),
    //       storagePath: uploadData.gsUrl,
    //       url: uploadData.downloadUrl,
    //     };
    //   });

    //   console.log(
    //     '*debug* onSubmit resolvedSongsForUpload',
    //     resolvedSongsForUpload
    //   );

    //   const result = await uploadImage({
    //     rootDir: id,
    //     parentDir: 'albums',
    //     childDir: releaseId,
    //     fileName: 'albumImage',
    //   });

    //   console.log('result', result);

    //   if (result && result.id && resolvedSongsForUpload.length > 0) {
    //     await createAlbum({
    //       variables: {
    //         input: {
    //           ...data.album,
    //           albumId: result.id,
    //           artistId: id,
    //           profileImageStoragePath: result.gsUrl,
    //         },
    //       },
    //     });
    //     // we add the songs seperately, and don't await this mutation, after creating the album because we want the audio processing to be done in the background
    //     // the album is tagged as processing and will be viewable but disabled until processing is completed
    //     addSongsToAlbum({
    //       variables: {
    //         input: {
    //           userName: `${userContext?.user?.firstName} ${userContext?.user?.lastName}`,
    //           albumId: result.id,
    //           artistId: id,
    //           songsToAdd: resolvedSongsForUpload ?? {
    //             title: '',
    //             storagePath: '',
    //           },
    //         },
    //       },
    //     });
    //   }
    // } else {
    //   enqueueSnackbar("Error! Files aren't done uploading", {
    //     variant: 'error',
    //     autoHideDuration: 4000,
    //   });
    // }
  };

  console.log('*debug* acceptedFiles', acceptedFiles);
  console.log('*debug* fileRejections', fileRejections);
  console.log('*debug* uploadStatuses', uploadStatuses);
  console.log('*debug* songsForUpload', songsForUpload);

  console.log('*debug* formErrors', hookForm.errors);
  console.log('*debug* watchVariousArtists', watchVariousArtists);
  console.log('*debug* watchIsNewArtist', watchIsNewArtist);

  const artistData = (labelByIdData?.labelById.artistConnections ?? []).map(
    (artistConnectionInstance) => {
      return {
        id: artistConnectionInstance.artist.id,
        name: artistConnectionInstance.artist.name,
      };
    }
  );

  // Add various artists
  // TODO: make this dynamic, get values from server
  artistData.push({
    id: '0b600e0a-96d0-4ec0-bc94-2587a6b3507a',
    name: 'Various Artists',
  });

  return (
    <Container>
      <Spacing.section.Minor />
      <Typography variant="h1">New Release</Typography>

      <Spacing.section.Minor />

      <CreateAlbumForm />

      <Spacing.section.Major />

      <FileUploadButton
        acceptedTypes="audio/*"
        onDrop={(fileAccepted, fileRejected) =>
          addSong(fileAccepted, fileRejected)
        }
      />

      <Spacing.BetweenComponents />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        // className={classes.submit}
        onClick={onSubmit}
      >
        {called || loading ? (
          <CircularProgress />
        ) : (
          <Typography variant="body2">Submit</Typography>
        )}
      </Button>
    </Container>
  );
};
