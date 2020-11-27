import { Container, IconButton, Typography } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import PeopleIcon from '@material-ui/icons/People';
import { Spacing } from 'components';
import React from 'react';
import { useHistory } from 'react-router-dom';

export const CreateCreatorSelection = () => {
  const history = useHistory();

  return (
    <Container maxWidth={false}>
      <Spacing.section.Minor />

      <Typography variant="h3">Creator Dashboard</Typography>

      <Spacing.section.Minor />

      <Typography variant="h3">Your Artists</Typography>

      <Spacing.section.Minor />

      <IconButton color="primary" onClick={() => history.push('/createArtist')}>
        <PeopleIcon />
        Create Artist
      </IconButton>

      <Spacing.section.Major />

      <IconButton color="primary" onClick={() => history.push('/createLabel')}>
        <BusinessIcon />
        Create Label
      </IconButton>
    </Container>
  );
};
