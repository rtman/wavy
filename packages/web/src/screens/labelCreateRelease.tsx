import { useQuery } from '@apollo/react-hooks';
import { Container, Typography } from '@material-ui/core';
import { Query } from 'commonTypes';
import { CreateAlbumForm, Spacing } from 'components';
import * as consts from 'consts';
import React from 'react';
import { useParams } from 'react-router-dom';

export const LabelCreateRelease = () => {
  const { id } = useParams();

  const {
    loading: labelByIdLoading,
    error: labelByIdError,
    data: labelByIdData,
  } = useQuery<Pick<Query, 'labelById'>>(consts.queries.label.LABEL_BY_ID, {
    variables: { labelId: id },
  });

  const artistData = (labelByIdData?.labelById.artistConnections ?? []).map(
    (artistConnectionInstance) => {
      return {
        id: artistConnectionInstance.artist.id,
        name: artistConnectionInstance.artist.name,
      };
    }
  );

  return (
    <Container>
      <Spacing.section.Minor />
      <Typography variant="h4">New Release</Typography>

      <Spacing.section.Minor />

      <CreateAlbumForm creatorId={id} artists={artistData} isLabel={true} />
    </Container>
  );
};
