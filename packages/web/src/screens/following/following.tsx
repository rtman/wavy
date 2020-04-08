import { ArtistRow, Screen } from 'components';
import React, { Fragment, useContext } from 'react';
import {
  CircularProgress,
  Container,
  Divider,
  List,
  Typography,
} from '@material-ui/core';
import { UserContext } from 'context';

export const Following = () => {
  const userContext = useContext(UserContext);
  console.log('userContext?.user', userContext?.user);

  const renderArtists = () => {
    // eslint-disable-next-line no-self-compare
    if (userContext?.user?.following?.length ?? 0 > 0) {
      const following = userContext?.user?.following ?? [];
      const artistList = following.map((artist: Artist, index: number) => {
        return (
          <Fragment key={artist.id}>
            <ArtistRow artist={artist} />
            {index < following.length - 1 ? <Divider /> : null}
          </Fragment>
        );
      });
      return <List>{artistList}</List>;
    } else {
      return null;
    }
  };

  return (
    <Screen>
      {userContext?.user ? (
        <Container>
          <Typography variant="h1">Following</Typography>
          {renderArtists()}
        </Container>
      ) : (
        <CircularProgress />
      )}
    </Screen>
  );
};
