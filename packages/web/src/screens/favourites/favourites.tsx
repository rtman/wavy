import { Screen, SongRow } from 'components';
import React, { Fragment, useContext } from 'react';
import {
  CircularProgress,
  Divider,
  List,
  Container,
  Typography,
} from '@material-ui/core';
import { UserContext } from 'context';

export const Favourites = () => {
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const favourites = userContext?.user?.favourites ?? [];

  const renderSongs = () => {
    if (favourites.length > 0) {
      console.log('favourites', favourites);
      const songsList = favourites.map((favouriteInstance, index: number) => {
        const song = favouriteInstance.song;
        return (
          <Fragment key={song.id}>
            <SongRow key={song.id} song={song} />
            {index < favourites.length - 1 ? <Divider /> : null}
          </Fragment>
        );
      });
      return <List>{songsList}</List>;
    } else {
      return null;
    }
  };

  return (
    <Screen>
      {user ? (
        <Container>
          <Typography variant="h1">Favourites</Typography>
          {renderSongs()}
        </Container>
      ) : (
        <CircularProgress />
      )}
    </Screen>
  );
};
