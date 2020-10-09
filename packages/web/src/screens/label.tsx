import { useLazyQuery } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  List,
  Typography,
} from '@material-ui/core';
import { Query, QueryLabelByIdArgs, UpdateFollowingType } from 'commonTypes';
import { AlbumRow, ArtistRow, Flex, Spacing } from 'components';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import React, { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Label = () => {
  const { id } = useParams();
  const userContext = useContext(UserContext);
  const playerContext = useContext(PlayerContext);
  const [getLabel, { loading: queryLoading, data: queryData }] = useLazyQuery<
    Pick<Query, 'labelById'>,
    QueryLabelByIdArgs
  >(consts.queries.label.LABEL_BY_ID, {
    fetchPolicy: 'network-only',
  });

  const labelFollows = userContext?.user?.labelFollows ?? [];
  const labelSongs = queryData?.labelById?.songs ?? [];
  const labelArtists = queryData?.labelById?.artists ?? [];
  const labelAlbums = queryData?.labelById?.albums ?? [];
  const labelImageUrl = queryData?.labelById?.profileImageUrlSmall ?? '';
  const labelName = queryData?.labelById?.name ?? '';
  const labelDescription = queryData?.labelById?.description ?? '';

  useEffect(() => {
    if (id) {
      getLabel({ variables: { labelId: id } });
    }
  }, [getLabel, id]);

  const onClickToggleFollow = () => {
    if (id) {
      userContext?.updateFollowing({ id, type: UpdateFollowingType.Label });
    }
  };

  const getFollowTitle = () => {
    if (id) {
      return labelFollows?.find((f) => f.label.id === id)
        ? 'Unfollow'
        : 'Follow';
    } else {
      return 'Loading';
    }
  };

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
      return <List style={{ width: '100%' }}>{artistsList}</List>;
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
      return <List style={{ width: '100%' }}>{albumsList}</List>;
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
    <Container>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <Flex flexDirection="column">
          <Grid container={true} style={{ flexShrink: 1 }}>
            <img
              style={{
                minHeight: 50,
                minWidth: 50,
                maxHeight: 250,
                maxWidth: 250,
                objectFit: 'contain',
              }}
              src={labelImageUrl}
            />

            <Spacing.section.Minor />

            <Grid item={true} direction="column">
              <Typography variant="h4">{labelName}</Typography>

              <Spacing.BetweenParagraphs />

              <Flex>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onClickPlayNow}
                >
                  Play Now
                </Button>

                <Spacing.BetweenComponents />

                <Button
                  variant="outlined"
                  color="primary"
                  onClick={onClickToggleFollow}
                >
                  {getFollowTitle()}
                </Button>
              </Flex>
            </Grid>
          </Grid>

          <Spacing.section.Minor />

          <Typography variant="h5">Description</Typography>

          <Spacing.section.Minor />

          <Typography variant="body1">{labelDescription}</Typography>

          <Spacing.section.Minor />

          <Typography variant="h5">Artists</Typography>

          {renderArtists()}

          <Spacing.section.Minor />

          <Typography variant="h5">Albums</Typography>

          {renderAlbums()}
        </Flex>
      )}
    </Container>
  );
};
