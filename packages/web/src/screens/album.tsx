import { useLazyQuery } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  Divider,
  GridList,
  List,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  AlbumCard,
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderTitle,
  RowContainer,
  Screen,
  SongRow,
  Spacing,
} from 'components';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Album as AlbumType, QueryAlbumByIdArgs, Song } from 'types';

interface AlbumByIdData {
  albumById: AlbumType;
}

const useStyles = makeStyles(() => ({
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

export const Album = () => {
  const { id } = useParams();
  const playerContext = useContext(PlayerContext);
  const [currentAlbum, setCurrentAlbum] = useState<AlbumType | undefined>(
    undefined
  );
  const classes = useStyles();

  const [getAlbumById, { loading: queryLoading }] = useLazyQuery<
    AlbumByIdData,
    QueryAlbumByIdArgs
  >(consts.queries.ALBUM_BY_ID, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setCurrentAlbum(data.albumById);
    },
  });

  const albumSongs = currentAlbum?.songs ?? [];
  const albumImageUrl = currentAlbum?.imageUrl ?? '';
  const albumTitle = currentAlbum?.title ?? '';
  const artistAlbums = currentAlbum?.artist.albums ?? [];
  const artistName = currentAlbum?.artist.name ?? '';

  useEffect(() => {
    if (id) {
      getAlbumById({
        variables: { id },
      });
    } else {
      console.log('currentAlbum.getAlbumById - no Id');
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

  const renderMoreBy = () => {
    const filteredAlbums = artistAlbums.filter(
      (album: AlbumType) => album.id !== id
    );

    if (filteredAlbums.length > 0) {
      const albumsList = filteredAlbums.map((album: AlbumType) => (
        <AlbumCard key={album.id} album={album} />
      ));
      return <GridList className={classes.gridList}>{albumsList}</GridList>;
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
              onClick={() => playerContext?.replaceQueueWithSongs(albumSongs)}
            >
              Play Now
            </Button>
          </RowContainer>
          <Spacing.section.Minor />
          <Typography variant="h1">Description</Typography>
          <Spacing.section.Minor />
          <Typography variant="body1">{currentAlbum?.description}</Typography>
          <Spacing.section.Minor />
          <Typography variant="h1">Songs</Typography>
          <Spacing.section.Minor />
          {albumSongs ? renderSongs() : null}
          <Spacing.section.Minor />
          <Typography variant="h1">More By {artistName}</Typography>
          <Spacing.section.Minor />
          {renderMoreBy()}
          <Spacing.section.Minor />
        </Container>
      )}
    </Screen>
  );
};
