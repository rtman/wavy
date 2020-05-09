import { ArtistRow, Screen, Spacing } from 'components';
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
  const user = userContext?.user;
  console.log('user', user);
  const following = userContext?.user?.following ?? [];

  const renderArtists = () => {
    if (following.length > 0) {
      const artistList = following.map((followingInstance, index: number) => {
        const artist = followingInstance.artist;
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
      {user ? (
        <Container>
          <Spacing.section.Minor />
          <Typography variant="h1">Following</Typography>
          <Spacing.section.Minor />
          {renderArtists()}
        </Container>
      ) : (
        <CircularProgress />
      )}
    </Screen>
  );
};
