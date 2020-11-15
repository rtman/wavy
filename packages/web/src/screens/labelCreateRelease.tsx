import { useQuery } from '@apollo/react-hooks';
import { CircularProgress, Container, Typography } from '@material-ui/core';
import { IdParam, Query } from 'commonTypes';
import { CreateAlbumForm, Spacing } from 'components';
import * as consts from 'consts';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { uuid } from 'uuidv4';

export const LabelCreateRelease = () => {
  const { id } = useParams<IdParam>();

  const {
    loading: labelByIdLoading,
    error: labelByIdError,
    data: labelByIdData,
  } = useQuery<Pick<Query, 'labelById'>>(consts.queries.label.LABEL_BY_ID, {
    variables: { labelId: id },
  });

  const artistData = useMemo(
    () =>
      (labelByIdData?.labelById.artistConnections ?? []).map(
        (artistConnectionInstance) => {
          return {
            id: artistConnectionInstance.artist.id,
            name: artistConnectionInstance.artist.name,
          };
        }
      ),
    [labelByIdData]
  );

  const releaseId = uuid();

  return (
    <Container>
      {labelByIdLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Spacing.section.Minor />
          <Typography variant="h4">New Release</Typography>

          <Spacing.section.Minor />

          <CreateAlbumForm
            creatorId={id}
            releaseId={releaseId}
            artists={artistData}
            isLabel={true}
          />
        </>
      )}
    </Container>
  );
};

LabelCreateRelease.whyDidYouRender = true;
