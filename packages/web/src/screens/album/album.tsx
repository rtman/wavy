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
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import {
  Button,
  Container,
  Divider,
  List,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { PlayerContext } from 'context';
import { Album as AlbumType, Song } from 'types';

interface AlbumByIdData {
  albumById: AlbumType;
}

interface AlbumByIdVars {
  id: string;
}

export const Album = () => {
  const { id } = useParams();
  const playerContext = useContext(PlayerContext);
  const { loading, data } = useQuery<AlbumByIdData, AlbumByIdVars>(
    consts.queries.ALBUM_BY_ID,
    {
      variables: { id: id ?? '' },
    }
  );
  const albumImage = data?.albumById?.image ?? '';
  const albumSongs = data?.albumById?.songs ?? [];
  const albumImageUrl = helpers.hooks.useGetStorageHttpUrl(albumImage);
  const albumTitle = data?.albumById?.title ?? '';

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
      {loading ? (
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
          <Typography variant="body1">
            {data?.albumById?.description}
          </Typography>
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
