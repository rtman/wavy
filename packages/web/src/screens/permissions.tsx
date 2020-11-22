import { Button, Container, Typography } from '@material-ui/core';
import React from 'react';

// Manage Contacts ? Connections? Something to justify createing artists here as well? Or should that be seperate
export const Permissions = () => {
  return (
    <Container>
      <Typography variant="h3">Manage Permissions</Typography>

      <Button>New Artist</Button>

      <Button>New Permission</Button>
    </Container>
  );
};

// new screen for new artist
// new screen for new permission
