import {
  Button,
  Container,
  //   CircularProgress,
  List,
  Typography,
} from '@material-ui/core';
import {
  ArtistRow,
  // Flex,
  LabelRow,
  Spacing,
} from 'components';
import { UserContext } from 'context';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserArtist, UserLabel } from 'types';

export const Dashboard = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();

  const artists = userContext?.user?.artists ?? [];
  const labels = userContext?.user?.labels ?? [];

  console.log('userContext.user', userContext?.user);

  const renderArtists = () => {
    if (artists.length > 0) {
      const artistList = artists.map((userArtist: UserArtist) => {
        return (
          <ArtistRow key={userArtist.artist.id} artist={userArtist.artist} />
        );
      });
      return <List>{artistList}</List>;
    }
    return null;
  };

  const renderLabels = () => {
    if (labels.length > 0) {
      const labelList = labels.map((userLabel: UserLabel) => {
        return <LabelRow key={userLabel.label.id} label={userLabel.label} />;
      });
      return <List>{labelList}</List>;
    }
    return null;
  };

  return (
    <Container>
      {/* <Flex flexDirection="column"> */}
      <Spacing.section.Minor />
      <Typography variant="h1">Creator Dashboard</Typography>

      <Spacing.section.Minor />

      <Typography variant="h1">Your Artists</Typography>

      <Spacing.section.Minor />

      {artists.length > 0 ? (
        renderArtists()
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/createArtist')}
        >
          Create Artist
        </Button>
      )}

      <Spacing.section.Major />

      <Typography variant="h1">Your Labels</Typography>

      <Spacing.section.Minor />

      {labels.length > 0 ? (
        renderLabels()
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/createLabel')}
        >
          Create Label
        </Button>
      )}

      <Spacing.section.Minor />
      {/* </Flex> */}
    </Container>
  );
};
