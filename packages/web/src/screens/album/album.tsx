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
import { Song } from 'types';

export const Album = () => {
  const { id } = useParams();
  const playerContext = useContext(PlayerContext);
  const { loading, data } = useQuery(consts.queries.ALBUM_BY_ID, {
    variables: { id },
  });
  const albumImageUrl = helpers.hooks.useGetStorageHttpUrl(
    data?.albumById?.image
  );

  const renderSongs = () => {
    if (data?.albumById?.songs.length > 0) {
      const songs = data?.albumById?.songs;
      const songsList = songs.map((song: Song, index: number) => {
        return (
          <React.Fragment key={song.id}>
            <SongRow song={song} secondaryStyle={true} />
            {index < songs.length - 1 ? <Divider /> : null}
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
            <ProfileHeaderTitle>{data?.albumById?.title}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              playerContext.replaceQueueWithSongs(data?.albumById?.songs)
            }
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
          {data?.albumById?.songs ? renderSongs() : null}
          <Spacing.BetweenComponents />
        </Container>
      )}
    </Screen>
  );
};
