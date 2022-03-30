import { useQuery } from '@apollo/client';
import { CircularProgress, Container, Typography } from '@material-ui/core';
import { AlbumForm, Spacing } from 'components';
import * as consts from 'consts';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { IdParam, Query } from 'types';
import { uuid } from 'uuidv4';

export const LabelCreateRelease = () => {
  const { id } = useParams<IdParam>();

  const { loading: getPermissionsLoading, data: getPermissionsData } = useQuery<
    Pick<Query, 'getPermissions'>
  >(consts.queries.permission.GET_PERMISSIONS, {
    variables: { id },
  });

  const artistData = useMemo(
    () =>
      (getPermissionsData?.getPermissions.requestor ?? []).map((requestor) => {
        return {
          id: requestor.entity.id,
          name: requestor.entity.name,
        };
      }),
    [getPermissionsData]
  );

  console.log('*debug* artistData', artistData);

  const releaseId = uuid();

  return (
    <Container maxWidth={false}>
      {getPermissionsLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Spacing.section.Minor />
          <Typography variant="h4">New Release</Typography>

          <Spacing.section.Minor />

          <AlbumForm
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
