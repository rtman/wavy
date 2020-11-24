import { useQuery } from '@apollo/react-hooks';
import {
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import {
  Album,
  Artist,
  Label,
  Playlist,
  Query,
  Song,
  User,
  UserSubscriptionData,
  UserSubscriptionEntity,
  UserSubscriptionResult,
} from 'commonTypes';
import {
  AlbumCard,
  ArtistCard,
  Flex,
  LabelCard,
  PlaylistCard,
  SongCard,
  Spacing,
  UserCard,
} from 'components';
import * as consts from 'consts';
import React, { CSSProperties, memo, useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { areEqual, FixedSizeList } from 'react-window';

const cardWidth = 150;

const useStyles = makeStyles(() => ({
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  arrowButtons: {
    fontSize: '2em',
  },
  list: {
    width: '100%',
  },
}));

export const HomeFeed = () => {
  const theme = useTheme();

  const {
    loading: userSubscriptionsLoading,
    // error: newArtistsError,
    data: userSubscriptionsData,
  } = useQuery<Pick<Query, 'getUserSubscriptions'>>(
    consts.queries.userSubscription.GET_USER_SUBSCRIPTIONS,
    {
      variables: { userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1' },
      // couldnt get this to work without no-cache, something to do with the union types in the query
      fetchPolicy: 'no-cache',
    }
  );

  return (
    <Container
      maxWidth={false}
      // height: '100%' required for autosizer
      style={{ height: '100%' }}
    >
      <Spacing.section.Minor />
      {userSubscriptionsLoading ? (
        <Grid
          container={true}
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item={true} xs={3}>
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              itemSize={cardWidth * 2}
              width={width}
              height={height}
              itemCount={
                userSubscriptionsData?.getUserSubscriptions.length ?? 0
              }
              itemData={userSubscriptionsData?.getUserSubscriptions}
              overscanCount={2}
            >
              {(props) => RenderSection({ ...props, width })}
            </FixedSizeList>
          )}
        </AutoSizer>
      )}
    </Container>
  );
};

const RenderSection = ({
  data,
  index,
  style,
  width,
}: {
  data: UserSubscriptionResult;
  index: number;
  style: CSSProperties;
  width: number;
}) => {
  const listRef = React.createRef<FixedSizeList>();
  const classes = useStyles();
  const scrollItemsPerBlock = 4;

  const [scrollPosition, setScrollPosition] = useState<number>(
    scrollItemsPerBlock
  );
  const totalScrollLength = data[index].data.length - 1;

  const onClickLeft = () => {
    let positionToScrollTo = 0;

    if (scrollPosition === 0) {
      positionToScrollTo = 0;
    } else {
      positionToScrollTo = scrollPosition - scrollItemsPerBlock;

      if (positionToScrollTo < 0) {
        positionToScrollTo = 0;
      }
    }

    listRef.current?.scrollToItem(positionToScrollTo, 'start');
    setScrollPosition(positionToScrollTo);
  };

  const onClickRight = () => {
    let positionToScrollTo = 0;

    if (scrollPosition === totalScrollLength) {
      positionToScrollTo = 0;
    } else {
      if (scrollPosition === 0) {
        positionToScrollTo = scrollPosition + scrollItemsPerBlock * 2;
      } else {
        positionToScrollTo = scrollPosition + scrollItemsPerBlock;
      }

      if (positionToScrollTo > totalScrollLength) {
        positionToScrollTo = totalScrollLength;
      }
    }

    listRef.current?.scrollToItem(positionToScrollTo);
    setScrollPosition(positionToScrollTo);
  };

  return (
    <div key={index} style={style}>
      <Typography variant="h5">{data[index].title}</Typography>
      <Spacing.section.Minor />
      <Flex alignItems="center">
        <IconButton onClick={onClickLeft}>
          <ArrowLeft className={classes.arrowButtons} />
        </IconButton>
        <FixedSizeList
          ref={listRef}
          itemSize={cardWidth * 1.25}
          width={width}
          height={cardWidth * 1.5}
          layout="horizontal"
          itemCount={data[index].data.length}
          itemData={data[index].data}
          style={{ overflow: 'hidden' }}
        >
          {renderCard}
        </FixedSizeList>
        <IconButton onClick={onClickRight}>
          <ArrowRight className={classes.arrowButtons} />
        </IconButton>
      </Flex>
      <Spacing.section.Minor />
    </div>
  );
};

const renderCard = memo(
  ({
    data,
    index,
    style,
  }: // width,
  {
    data: UserSubscriptionData;
    index: number;
    style: CSSProperties;
    // width: number;
  }) => {
    return (
      <div key={index} style={style}>
        {makeCard({
          data: data[index],
          // width
        })}
      </div>
    );
  }
);

const makeCard = ({ data }: { data: UserSubscriptionData }) => {
  switch (data.type) {
    case UserSubscriptionEntity.Album: {
      const albumData = data as Album;

      return (
        <AlbumCard
          // width={width * 0.5}
          // width={cardWidth}
          title={albumData.title}
          subtitle={albumData.artist.name}
          caption={albumData.label?.name ?? undefined}
          data={albumData}
          image={albumData.profileImageUrlThumb}
        />
      );
    }
    case UserSubscriptionEntity.Artist: {
      const artistData = data as Artist;

      return (
        <ArtistCard
          width={cardWidth}
          title={artistData.name}
          data={artistData}
          image={artistData.profileImageUrlThumb}
        />
      );
    }
    case UserSubscriptionEntity.Label: {
      const labelData = data as Label;

      return (
        <LabelCard
          width={cardWidth}
          title={labelData.name}
          data={labelData}
          image={labelData.profileImageUrlThumb}
        />
      );
    }
    case UserSubscriptionEntity.Playlist: {
      const playlistData = data as Playlist;

      return (
        <PlaylistCard
          width={cardWidth}
          title={playlistData.title}
          data={playlistData}
          image={playlistData.profileImageUrlThumb}
        />
      );
    }

    case UserSubscriptionEntity.Song: {
      const songData = data as Song;

      return (
        <SongCard
          width={cardWidth}
          title={songData.title}
          subtitle={songData.artist.name}
          caption={songData.label?.name ?? undefined}
          data={songData}
          image={songData.album.profileImageUrlThumb}
        />
      );
    }
    case UserSubscriptionEntity.User: {
      const userData = data as User;

      return <UserCard width={cardWidth} data={userData} />;
    }
  }
};
