import { useLazyQuery } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  GridList,
  List,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  Album as AlbumType,
  Query,
  QueryAlbumByIdArgs,
  Song,
} from 'commonTypes';
import { Flex, ItemCard, SongListItem, Spacing } from 'components';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    Pick<Query, 'albumById'>,
    QueryAlbumByIdArgs
  >(consts.queries.album.ALBUM_BY_ID, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setCurrentAlbum(data.albumById);
    },
  });

  const albumSongs = currentAlbum?.songs ?? [];
  const albumImageUrl = currentAlbum?.profileImageUrlLarge ?? '';
  const albumTitle = currentAlbum?.title ?? '';
  const artistAlbums = currentAlbum?.artist.albums ?? [];
  const artistName = currentAlbum?.artist.name ?? '';
  const albumProcessing = currentAlbum?.processing ?? true;

  useEffect(() => {
    if (id) {
      getAlbumById({
        variables: { albumId: id },
      });
    } else {
      console.log('currentAlbum.getAlbumById - no Id');
    }
  }, [getAlbumById, id]);

  const onClickPlayNow = () => playerContext?.replaceQueueWithSongs(albumSongs);

  const renderSongs = () => {
    if (albumProcessing) {
      return (
        <Typography variant="h3">
          This album is still processing, please check back later
        </Typography>
      );
    }

    if (albumSongs.length > 0) {
      const songsList = albumSongs.map((song: Song, index: number) => {
        return (
          <React.Fragment key={song.id}>
            <SongListItem
              leftAccessory={
                <Flex alignItems="center" alignSelf="center">
                  <Typography variant="body1">{index + 1}</Typography>
                  <Spacing.BetweenParagraphs />
                </Flex>
              }
              title={song.title}
              caption={song.label?.name}
              song={song}
            />
            {index < albumSongs.length - 1 ? <Divider /> : null}
          </React.Fragment>
        );
      });
      return <List style={{ width: '100%' }}>{songsList}</List>;
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
        <ItemCard key={album.id} item={album} />
      ));
      return (
        <>
          <Typography variant="h5">More By {artistName}</Typography>
          <Spacing.section.Minor />
          <GridList className={classes.gridList}>{albumsList}</GridList>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <Container>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <Flex flexDirection="column" fullWidth={true}>
          <Grid container={true} style={{ flexShrink: 1 }}>
            <img
              style={{
                minHeight: 50,
                minWidth: 50,
                maxHeight: 250,
                maxWidth: 250,
                objectFit: 'contain',
              }}
              src={albumImageUrl}
            />

            <Spacing.section.Minor />

            <Grid item={true} direction="column">
              <Typography variant="h4">{albumTitle}</Typography>
              <Typography variant="h6">{artistName}</Typography>
              <Spacing.BetweenComponents />

              <Flex>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={albumProcessing}
                  onClick={onClickPlayNow}
                >
                  Play Now
                </Button>
              </Flex>
            </Grid>
          </Grid>

          <Spacing.section.Minor />

          <Typography variant="h5">Description</Typography>

          <Spacing.section.Minor />

          <Typography variant="body1">{currentAlbum?.description}</Typography>

          <Spacing.section.Minor />

          <Typography variant="h5">Songs</Typography>

          <Spacing.section.Minor />

          {albumSongs ? renderSongs() : null}

          <Spacing.section.Minor />

          {renderMoreBy()}

          <Spacing.section.Minor />
        </Flex>
      )}
    </Container>
  );
};
