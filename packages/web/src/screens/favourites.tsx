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
