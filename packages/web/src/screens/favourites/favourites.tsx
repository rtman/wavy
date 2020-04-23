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

  const renderSongs = () => {
    // eslint-disable-next-line no-self-compare
    if (userContext?.user?.favourites?.length ?? 0 > 0) {
      const favourites = userContext?.user?.favourites ?? [];
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
      {userContext?.user ? (
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
