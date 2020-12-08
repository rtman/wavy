import { useApolloClient } from '@apollo/client';
import {
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import * as tasks from 'tasks';
import { Spacing } from 'components';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from 'context';

const useQuery = () => new URLSearchParams(useLocation().search);

export const ClaimArtist = () => {
  const apolloClient = useApolloClient();
  const userContext = useContext(UserContext);
  const query = useQuery();

  const [busy, setBusy] = useState(true);
  const [result, setResult] = useState<string>('');

  const claimCode = query.get('code');
  const artistId = query.get('artistId');
  const claimantEmail = query.get('email');

  const userId = userContext?.user?.id;

  useEffect(() => {
    (async () => {
      if (userId && artistId && claimCode && claimantEmail) {
        console.log('*debug* claimCode', claimCode);
        console.log('*debug* artistId', artistId);

        console.log('*debug* claimantEmail', claimantEmail);

        const result = await tasks.claimArtist(
          {
            userId,
            artistId,
            claimCode,
            claimantEmail,
          },
          apolloClient
        );
        setBusy(false);

        if (result.ok) {
          userContext?.loadUser(userId);
          setResult(
            `Artist: ${result.data.name} claimed successfully! Please check your dashboard for this artist, there may be songs that need approving`
          );
        } else {
          setResult('An error occured, please contact support');
        }
      } else {
        setBusy(false);
        setResult('Missing information, please click the email link again');
      }
    })();
  }, []);

  return (
    <Container maxWidth={false}>
      <Grid container={true} xs={12}>
        <Grid item={true} xs={12}>
          <Typography variant="h3">Claim Artist</Typography>
          <Spacing.section.Minor />
        </Grid>
        <Grid item={true} xs={12}>
          {busy ? (
            <CircularProgress />
          ) : (
            <Typography variant="h5">{result}</Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
