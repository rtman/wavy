import { useQuery } from '@apollo/react-hooks';
import { Container, Typography } from '@material-ui/core';
import { Query } from 'commonTypes';
import { AlbumForm, Spacing } from 'components';
import * as consts from 'consts';
import React from 'react';
import { useParams } from 'react-router-dom';
import { uuid } from 'uuidv4';

export const ArtistCreateRelease = () => {
  const { id } = useParams();

  const {
    loading: artistByIdLoading,
    error: artistByIdError,
    data: artistByIdData,
  } = useQuery<Pick<Query, 'artistById'>>(consts.queries.artist.ARTIST_BY_ID, {
    variables: { labelId: id },
  });

  const artistData = (artistByIdData?.artistById.artistConnections ?? []).map(
    (artistConnectionInstance) => {
      return {
        id: artistConnectionInstance.id,
        name: artistConnectionInstance.name,
      };
    }
  );

  const releaseId = uuid();

  return (
    <Container>
      <Spacing.section.Minor />
      <Typography variant="h4">New Release</Typography>

      <Spacing.section.Minor />

      <AlbumForm creatorId={id} artists={artistData} releaseId={releaseId} />
    </Container>
  );
};
