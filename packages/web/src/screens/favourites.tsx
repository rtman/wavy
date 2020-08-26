import {
  CircularProgress,
  Container,
  Divider,
  List,
  Typography,
} from '@material-ui/core';
import { Screen, SongRow, Spacing } from 'components';
import { UserContext } from 'context';
import React, { Fragment, useContext } from 'react';

export const Favourites = () => {
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const songFavourites = userContext?.user?.songFavourites ?? [];

  const renderSongs = () => {
    if (songFavourites.length > 0) {
      console.log('songFavourites', songFavourites);
      const songsList = songFavourites.map(
        (favouriteInstance, index: number) => {
          const song = favouriteInstance.song;
          return (
            <Fragment key={song.id}>
              <SongRow key={song.id} song={song} />
              {index < songFavourites.length - 1 ? <Divider /> : null}
            </Fragment>
          );
        }
      );
      return <List>{songsList}</List>;
    } else {
      return null;
    }
  };

  return (
    <Screen>
      {user ? (
        <Container>
          <Spacing.section.Minor />
          <Typography variant="h1">Favourites</Typography>
          <Spacing.section.Minor />
          {renderSongs()}
        </Container>
      ) : (
        <CircularProgress />
      )}
    </Screen>
  );
};
