import {
  Button,
  Container,
  //   CircularProgress,
  //   List,
  Typography,
} from '@material-ui/core';
import {
  //   ArtistRow,
  // Flex,
  //   LabelRow,
  Spacing,
} from 'components';
import { UserContext } from 'context';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

export const ArtistDashboard = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();

  console.log('userContext.user', userContext?.user);

  return (
    <Container>
      <Spacing.section.Minor />
      <Typography variant="h1">Creator Dashboard</Typography>

      <Spacing.section.Minor />

      <Typography variant="h1">Create a New ALbum</Typography>

      <Spacing.section.Minor />

      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/createArtist')}
      >
        Create Artist
      </Button>

      <Spacing.section.Major />

      <Typography variant="h1">Stats</Typography>

      <Spacing.section.Minor />
    </Container>
  );
};
