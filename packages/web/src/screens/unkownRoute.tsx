import { Grid, Typography } from '@material-ui/core';
import React from 'react';

export const UnknownRoute = () => {
  return (
    <Grid
      container={true}
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item={true} xs={3}>
        <Typography variant="h3">404</Typography>
        <Typography variant="h6">We lost ya ...</Typography>
      </Grid>
    </Grid>
  );
};
