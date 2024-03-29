import { useMutation } from '@apollo/client';
import * as consts from 'consts';
import { UserContext } from 'context';
import * as helpers from 'helpers';
import { useSnackbar } from 'notistack';
import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useState,
} from 'react';
import {
  DropzoneInputProps,
  DropzoneRootProps,
  FileRejection,
  useDropzone,
} from 'react-dropzone';
import { useHistory } from 'react-router-dom';
import {
  Mutation,
  MutationAddSongsToAlbumArgs,
  MutationCreateAlbumArgs,
  NewAlbumForm,
  NewSongArgs,
  SongFields,
  SongForUpload,
  UploadStatus,
} from 'types';
import { createContext } from 'use-context-selector';

interface SubmitAlbumProps {
  data: NewAlbumForm;
  imageFile: File;
  isLabel: boolean;
  creatorId: string;
  releaseId: string;
}

interface CreateAlbumContextProps {
  acceptedFiles: File[];
  addSong: (
    fileAccepted: File[],
    fileRejected: FileRejection[]
  ) => string | undefined;
  busyState: boolean;
  fileRejections: FileRejection[];
  getInputProps: (props?: DropzoneInputProps | undefined) => DropzoneInputProps;
  getRootProps: (props?: DropzoneRootProps | undefined) => DropzoneRootProps;
  initForm: (defaultFormValues: NewAlbumForm) => SongFields[];
  removeSong: (index: number) => void;
  songsForUpload: SongForUpload[];
  submitAlbum: (props: SubmitAlbumProps) => void;
  updateAllUploadStatuses: (newUploadStatuses: UploadStatus[]) => void;
  uploadStatuses: UploadStatus[];
}

export const CreateAlbumContext = createContext<
  CreateAlbumContextProps | undefined
>(undefined);

export const CreateAlbumProvider: FunctionComponent = (props) => {
  const [createAlbum, { loading }] = useMutation<
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

  const [addSongsToAlbum] = useMutation<
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

  const history = useHistory();
  const userContext = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();
  const { uploadImage } = helpers.hooks.useUploadImage();

  const [songsForUpload, setSongsForUpload] = useState<SongForUpload[]>([]);
  const [uploadStatuses, setUploadStatuses] = useState<UploadStatus[]>([]);

  // FIXME: fix type
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    accept: 'audio/*',
  });

  const updateAllUploadStatuses = useCallback(
    (newUploadStatuses: UploadStatus[]) => {
      setUploadStatuses([...newUploadStatuses]);
    },
    []
  );

  const initForm = useCallback(
    (defaultFormValues: NewAlbumForm) => {
      const makeFormFromDropzone = () =>
        acceptedFiles?.map(
          (file): SongFields => ({
            ...defaultFormValues.songs[0],
            artist: null,
            title:
              file.name.lastIndexOf('.') !== -1
                ? file.name.substring(0, file.name.lastIndexOf('.'))
                : file.name.trim(),
          })
        );

      const makeSongsForUpload = () =>
        (acceptedFiles ?? []).map((file) => {
          return {
            title: file.name.trim(),
            file: file,
          };
        });

      setSongsForUpload(makeSongsForUpload());

      return makeFormFromDropzone();
    },
    [acceptedFiles]
  );

  const removeSong = useCallback(
    async (index: number) => {
      if (uploadStatuses[index]) {
        const upload = uploadStatuses[index];

        if (upload.complete && upload.task) {
          await upload.task.snapshot.ref.delete();
        }

        if (upload.running && !upload.complete && upload.task) {
          upload.task.cancel();
        }

        const resolvedSongsForUpload = [...songsForUpload];

        resolvedSongsForUpload.splice(index, 1);
        setSongsForUpload(resolvedSongsForUpload);

        const resolvedUploadStatuses = [...uploadStatuses];

        resolvedUploadStatuses.splice(index, 1);

        updateAllUploadStatuses(resolvedUploadStatuses);
        if (songsForUpload.length === 0) {
          acceptedFiles?.splice(0, acceptedFiles?.length);
        }
      }
    },
    [acceptedFiles, updateAllUploadStatuses, songsForUpload, uploadStatuses]
  );

  const addSong = (fileAccepted: File[], fileRejected: FileRejection[]) => {
    if (fileRejected.length > 0) {
      enqueueSnackbar('Error! Wrong file type please try again', {
        variant: 'error',
        autoHideDuration: 4000,
      });

      return;
    }
    if (fileAccepted.length > 0 && songsForUpload) {
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
      setSongsForUpload(resolvedSongsForUpload);

      return title;
    }

    return;
  };

  const submitAlbum = async (args: SubmitAlbumProps) => {
    console.log('*debug* onSubmit args', args);
    const { data, imageFile, isLabel, creatorId, releaseId } = args;

    if (imageFile === undefined) {
      enqueueSnackbar('Please select an image to upload', {
        variant: 'warning',
        autoHideDuration: 4000,
      });

      return;
    }

    if (
      uploadStatuses &&
      songsForUpload &&
      uploadStatuses.find((upload) => upload.data === undefined) ===
        undefined &&
      data.album.artist !== null
    ) {
      const resolvedSongsForUpload: NewSongArgs[] = songsForUpload.map(
        (_song, index) => {
          // data is checked above for undefined in the find
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const uploadData = uploadStatuses[index].data!;
          const { supportingArtists, title, isrc } = data.songs[index];

          const getArtistId = () => {
            if (isLabel && data.album.artist?.name !== 'Various Artists') {
              return data.album.artist?.id;
            }
            if (isLabel) {
              return data.songs[index].artist?.id;
            }

            return creatorId;
          };

          return {
            artistId: getArtistId(),
            storagePath: uploadData.fullStoragePath,
            title,
            isrc,
            supportingArtists,
          };
        }
      );

      const result = await uploadImage({
        imageFile,
        rootDir: creatorId,
        parentDir: 'albums',
        childDir: releaseId,
        fileName: 'profile',
      });

      const userName = `${userContext?.user?.firstName} ${userContext?.user?.lastName}`;

      if (result.ok && resolvedSongsForUpload.length > 0) {
        const { artist, ...album } = data.album;

        await createAlbum({
          variables: {
            input: {
              ...album,
              // if is is a label the artistId is either various or a selected artist, otherwise it is the creator of the album, the artist
              artistId: isLabel ? artist.id : creatorId,
              // if isLabel, we use the creatorId which is the label for labelId otherwise we dont apply a labelId
              labelId: isLabel ? creatorId : undefined,
              albumId: releaseId,
              profileImageStoragePath: result.fullStoragePath,
              userName,
            },
          },
        });
        // we add the songs seperately, and don't await this mutation, after creating the album because we want the audio processing to be done in the background
        // the album is tagged as processing and will be viewable but disabled until processing is completed
        void addSongsToAlbum({
          variables: {
            input: {
              userName,
              albumId: releaseId,
              labelId: isLabel ? creatorId : undefined,
              songsToAdd: resolvedSongsForUpload,
            },
          },
        });
      }
    } else {
      enqueueSnackbar("Error! Files aren't done uploading", {
        variant: 'error',
        autoHideDuration: 4000,
      });
    }
  };

  return (
    <CreateAlbumContext.Provider
      value={{
        acceptedFiles,
        addSong,
        busyState: loading,
        fileRejections,
        getInputProps,
        getRootProps,
        initForm,
        removeSong,
        songsForUpload,
        submitAlbum,
        updateAllUploadStatuses,
        uploadStatuses,
      }}
    >
      {props.children}
    </CreateAlbumContext.Provider>
  );
};
