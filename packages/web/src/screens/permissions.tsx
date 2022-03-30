import { Button, Container, Typography } from '@material-ui/core';
import { Spacing } from 'components';
import React from 'react';

// Manage Contacts ? Connections? Something to justify createing artists here as well? Or should that be seperate
export const Permissions = () => {
  return (
    <Container maxWidth={false}>
      <Typography variant="h3">Manage Permissions</Typography>

      <Spacing.section.Major />

      <Typography variant="h5">Requested by others</Typography>

      <Spacing.BetweenParagraphs />

      <Typography variant="body1">
        You have given these creators permission to use your artist account to
        create music or add you as a supporting artist.
      </Typography>

      <Spacing.BetweenParagraphs />

      <Typography variant="h5">Requested by you</Typography>

      <Spacing.BetweenParagraphs />

      <Button>New Permission</Button>

      <Spacing.BetweenParagraphs />

      <Typography variant="body1">
        These creator accounts have given you permission to use their artist
        account to post music or add them as a supporting artist
      </Typography>

      <Spacing.section.Major />
    </Container>
  );
};

// Do we want permission levels, or just grant both for now.

// name - create songs or album for you checkbox - add you as supporting artists checkbox

// new screen for new artist
// create new artist with name and email - auto granted full permissions (see below)
// songs added with this artist are inactive until the artist claims the account and agrees to terms

// new screen for new permission
// enter connection code - create songs or album for you checkbox - add you as supporting artists checkbox
// submit
