import { useMutation, useQuery } from '@apollo/react-hooks';
import { Container, Typography } from '@material-ui/core';
import {
  CreateAlbumSubmissionData,
  Mutation,
  MutationAddSongsToAlbumArgs,
  MutationCreateAlbumArgs,
  Query,
} from 'commonTypes';
import { CreateAlbumForm, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect } from 'react';
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

  const submitAlbum = async (data: CreateAlbumSubmissionData) => {
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

  const artistData = (labelByIdData?.labelById.artistConnections ?? []).map(
    (artistConnectionInstance) => {
      return {
        id: artistConnectionInstance.artist.id,
        name: artistConnectionInstance.artist.name,
      };
    }
  );

  return (
    <Container>
      <Spacing.section.Minor />
      <Typography variant="h4">New Release</Typography>

      <Spacing.section.Minor />

      <CreateAlbumForm
        id={id}
        artists={artistData}
        submitAlbum={submitAlbum}
        loading={loading || called}
        isLabel={true}
      />
    </Container>
  );
};
