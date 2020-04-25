import {
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderTitle,
  SongRow,
  Spacing,
  Screen,
} from 'components';
import * as consts from 'consts';
import * as helpers from 'helpers';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import {
  Button,
  Container,
  Divider,
  List,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { PlayerContext } from 'context';
import { Album as AlbumType, QueryAlbumByIdArgs, Song } from 'types';

interface AlbumByIdData {
  albumById: AlbumType;
}

export const Album = () => {
  const { id } = useParams();
  const playerContext = useContext(PlayerContext);
  const [album, setAlbum] = useState<AlbumType | undefined>(undefined);

  const [getAlbumById, { loading: queryLoading }] = useLazyQuery<
    AlbumByIdData,
    QueryAlbumByIdArgs
  >(consts.queries.ALBUM_BY_ID, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setAlbum(data.albumById);
    },
  });

  const albumImage = album?.image ?? '';
  const albumSongs = album?.songs ?? [];
  const albumImageUrl = helpers.hooks.useGetStorageHttpUrl(albumImage);
  const albumTitle = album?.title ?? '';

  useEffect(() => {
    if (id) {
      getAlbumById({
        variables: { id },
      });
    } else {
      console.log('album.getAlbumById - no Id');
    }
  }, [getAlbumById, id]);

  const renderSongs = () => {
    if (albumSongs.length > 0) {
      const songsList = albumSongs.map((song: Song, index: number) => {
        return (
          <React.Fragment key={song.id}>
            <SongRow song={song} secondaryStyle={true} />
            {index < albumSongs.length - 1 ? <Divider /> : null}
          </React.Fragment>
        );
      });
      return <List>{songsList}</List>;
    } else {
      return null;
    }
  };

  return (
    <Screen>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <Container>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={albumImageUrl} />
            <ProfileHeaderTitle>{albumTitle}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playerContext.replaceQueueWithSongs(albumSongs)}
          >
            Play Now
          </Button>
          <Typography variant="h1">Description</Typography>
          <Spacing.BetweenComponents />
          <Typography variant="body1">{album?.description}</Typography>
          <Spacing.BetweenComponents />
          <Typography variant="h1">Songs</Typography>
          <Spacing.BetweenComponents />
          {albumSongs ? renderSongs() : null}
          <Spacing.BetweenComponents />
        </Container>
      )}
    </Screen>
  );
};
