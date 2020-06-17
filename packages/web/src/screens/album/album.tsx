import * as consts from 'consts';
import { Album as AlbumType, QueryAlbumByIdArgs, Song } from 'types';
import {
  Button,
  CircularProgress,
  Container,
  Divider,
  List,
  Typography,
} from '@material-ui/core';
import { PlayerContext } from 'context';
import {
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderTitle,
  RowContainer,
  Screen,
  SongRow,
  Spacing,
} from 'components';
import { useLazyQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';

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

  const albumSongs = album?.songs ?? [];
  const albumImageUrl = album?.imageUrl ?? '';
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
          <Spacing.section.Minor />
          <RowContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={() => playerContext.replaceQueueWithSongs(albumSongs)}
            >
              Play Now
            </Button>
          </RowContainer>
          <Spacing.section.Minor />
          <Typography variant="h1">Description</Typography>
          <Spacing.section.Minor />
          <Typography variant="body1">{album?.description}</Typography>
          <Spacing.section.Minor />
          <Typography variant="h1">Songs</Typography>
          <Spacing.section.Minor />
          {albumSongs ? renderSongs() : null}
          <Spacing.section.Minor />
        </Container>
      )}
    </Screen>
  );
};
