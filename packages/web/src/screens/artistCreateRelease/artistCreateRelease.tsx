import { useQuery } from '@apollo/client';
import { Container, Typography } from '@material-ui/core';
import { AlbumForm, Spacing } from 'components';
import * as consts from 'consts';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { IdParam, Query } from 'types';
import { uuid } from 'uuidv4';

export const ArtistCreateRelease = () => {
  const { id } = useParams<IdParam>();

  const {
    loading: getPermissionsLoading,
    error: getPermissionsError,
    data: getPermissionsData,
  } = useQuery<Pick<Query, 'getPermissions'>>(
    consts.queries.permission.GET_PERMISSIONS,
    {
      variables: { id },
    }
  );

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

  const releaseId = uuid();

  return (
    <Container maxWidth={false}>
      <Spacing.section.Minor />
      <Typography variant="h4">New Release</Typography>

      <Spacing.section.Minor />

      <AlbumForm creatorId={id} artists={artistData} releaseId={releaseId} />
    </Container>
  );
};
