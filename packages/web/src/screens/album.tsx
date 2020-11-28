import { useLazyQuery } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  List,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { AccountBox } from '@material-ui/icons';
import {
  Album as AlbumType,
  IdParam,
  Query,
  QueryAlbumByIdArgs,
  Song,
} from 'commonTypes';
import { AlbumCard, Flex, SongListItem, Spacing } from 'components';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

export const Album = () => {
  const { id } = useParams<IdParam>();
  const playerContext = useContext(PlayerContext);
  const classes = useStyles();
  const theme = useTheme();
  const smSizeAndUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [
    getAlbumById,
    { loading: albumLoading, data: albumData },
  ] = useLazyQuery<Pick<Query, 'albumById'>, QueryAlbumByIdArgs>(
    consts.queries.album.ALBUM_BY_ID,
    {
      fetchPolicy: 'network-only',
    }
  );

  const albumSongs = albumData?.albumById.songs ?? [];
  const albumImageUrl = albumData?.albumById.profileImageUrlLarge ?? '';
  const albumTitle = albumData?.albumById.title ?? '';
  const artistAlbums = albumData?.albumById.artist.albums ?? [];
  const artistName = albumData?.albumById.artist.name ?? '';
  const albumProcessing = albumData?.albumById.processing ?? true;

  useEffect(() => {
    if (id) {
      getAlbumById({
        variables: { albumId: id },
      });
    } else {
      console.log('albumData.albumById.getAlbumById - no Id');
    }
  }, [getAlbumById, id]);

  const onClickPlayNow = () => playerContext?.replaceQueueWithSongs(albumSongs);

  const renderSongs = () => {
    if (albumProcessing) {
      return (
        <Typography variant="h5">
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
              data={song}
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
        <AlbumCard
          key={album.id}
          title={album.title}
          // subtitle={album.artist.name}
          caption={album.label?.name ?? undefined}
          data={album}
          image={album.profileImageUrlThumb}
        />
      ));
      return (
        <>
          <Typography variant="h5">More By {artistName}</Typography>
          <Spacing.section.Minor />
          <Flex style={{ overflowX: 'auto' }}>{albumsList}</Flex>
        </>
      );
    } else {
      return null;
    }
  };

  const renderNameButtonsAndDescription = () => (
    <Flex flexDirection="column" fullWidth={true}>
      <Typography variant="h4">{artistName}</Typography>
      <Spacing.section.Minor />
      <Grid item={true} xs={12}>
        <Button variant="contained" color="primary" onClick={onClickPlayNow}>
          Play Now
        </Button>
      </Grid>
      <Spacing.section.Minor />

      <Grid item={true} xs={12}>
        <Typography variant="h5">Description</Typography>
      </Grid>
      <Spacing.section.Minor />
      <Grid item={true} xs={12}>
        <Typography variant="body1">
          {albumData?.albumById.description}
        </Typography>
      </Grid>
    </Flex>
  );

  const renderProfileImage = () =>
    albumImageUrl ? (
      <img
        style={{
          alignSelf: 'center',
          minHeight: 50,
          minWidth: 50,
          maxHeight: 250,
          maxWidth: 250,
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
        src={albumImageUrl}
      />
    ) : (
      <AccountBox
        style={{
          alignSelf: 'center',
          minHeight: 50,
          minWidth: 50,
          maxHeight: 250,
          maxWidth: 250,
          width: '100%',
          height: '100%',
        }}
      />
    );

  return (
    <Container maxWidth={false}>
      {albumLoading || albumData === undefined ? (
        <CircularProgress />
      ) : (
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={12}>
            {smSizeAndUp ? (
              <Flex>
                {renderProfileImage()}
                <Spacing.BetweenParagraphs />
                {renderNameButtonsAndDescription()}
              </Flex>
            ) : (
              <Flex flexDirection="column">
                {renderProfileImage()}
                <Spacing.section.Minor />
                {renderNameButtonsAndDescription()}
              </Flex>
            )}
          </Grid>

          <Grid item={true} xs={12}>
            <Typography variant="h5">Songs</Typography>
          </Grid>

          <Grid item={true} xs={12}>
            {albumSongs ? renderSongs() : null}
          </Grid>

          <Grid item={true} xs={12}>
            {renderMoreBy()}
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
