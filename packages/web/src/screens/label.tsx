import { useLazyQuery } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Divider,
  List,
  Typography,
} from '@material-ui/core';
import {
  AlbumRow,
  ArtistRow,
  ContentContainer,
  ProfileContainer,
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderTitle,
  RowContainer,
  Screen,
  Spacing,
} from 'components';
import * as consts from 'consts';
import { PlayerContext } from 'context';
import React, { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Query, QueryLabelByIdArgs } from 'types';

export const Label = () => {
  const { id } = useParams();
  const playerContext = useContext(PlayerContext);
  const [getLabel, { loading: queryLoading, data: queryData }] = useLazyQuery<
    Pick<Query, 'labelById'>,
    QueryLabelByIdArgs
  >(consts.queries.label.LABEL_BY_ID, {
    fetchPolicy: 'network-only',
  });

  const labelSongs = queryData?.labelById?.songs ?? [];
  const labelArtists = queryData?.labelById?.artists ?? [];
  const labelAlbums = queryData?.labelById?.albums ?? [];
  const labelImageUrl = queryData?.labelById?.imageUrl ?? '';
  const labelName = queryData?.labelById?.name ?? '';
  const labelDescription = queryData?.labelById?.description ?? '';

  useEffect(() => {
    if (id) {
      getLabel({ variables: { labelId: id } });
    }
  }, [getLabel, id]);

  const renderArtists = () => {
    if (labelArtists.length > 0) {
      const artistsList = labelArtists.map((artistInstance, index: number) => {
        const artist = artistInstance.artist;
        return (
          <Fragment key={artist.id}>
            <ArtistRow artist={artist} />
            {index < labelArtists.length - 1 ? <Divider /> : null}
          </Fragment>
        );
      });
      return <List>{artistsList}</List>;
    } else {
      return null;
    }
  };

  const renderAlbums = () => {
    if (labelAlbums.length > 0) {
      const albumsList = labelAlbums.map((album, index: number) => {
        return (
          <Fragment key={album.id}>
            <AlbumRow album={album} />
            {index < labelAlbums.length - 1 ? <Divider /> : null}
          </Fragment>
        );
      });
      return <List>{albumsList}</List>;
    } else {
      return null;
    }
  };

  const onClickPlayNow = () => {
    if (labelSongs.length > 0) {
      playerContext?.replaceQueueWithSongs(labelSongs);
    }
  };

  return (
    <Screen>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <ContentContainer>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={labelImageUrl} />
            <ProfileHeaderTitle>{labelName}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <ProfileContainer>
            <RowContainer>
              <Button
                variant="contained"
                color="primary"
                onClick={onClickPlayNow}
              >
                Play Now
              </Button>
            </RowContainer>
            <Spacing.section.Minor />
            <Typography variant="h1">Description</Typography>
            <Spacing.section.Minor />
            <Typography variant="body1">{labelDescription}</Typography>
            <Spacing.section.Minor />
            <Typography variant="h1">Artists</Typography>
            {renderArtists()}
            <Spacing.section.Minor />
            <Typography variant="h1">Albums</Typography>
            {renderAlbums()}
          </ProfileContainer>
        </ContentContainer>
      )}
    </Screen>
  );
};
