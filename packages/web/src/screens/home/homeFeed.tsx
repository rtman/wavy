import { useQuery } from '@apollo/react-hooks';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CircularProgress,
  Container,
  GridList,
  IconButton,
  List,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import { styles } from '@material-ui/pickers/views/Clock/Clock';
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
import { UserContext } from 'context';
import React, {
  Fragment,
  memo,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FixedSizeList } from 'react-window';
import { CSSProperties } from 'styled-components';

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
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  console.log('*debug* HomeFeed user?.id', user?.id);

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

  console.log('*debug* HomeFeed subscriptionData', userSubscriptionsData);

  return (
    <Container>
      <Spacing.section.Minor />
      {userSubscriptionsLoading ? (
        <CircularProgress />
      ) : (
        <FixedSizeList
          itemSize={400}
          width={'100%'}
          height={window.screen.height}
          itemCount={userSubscriptionsData?.getUserSubscriptions.length ?? 0}
          itemData={userSubscriptionsData?.getUserSubscriptions}
          overscanCount={2}
        >
          {RenderSection}
        </FixedSizeList>
      )}
    </Container>
  );
};

const RenderSection = ({
  data,
  index,
  style,
}: {
  data: UserSubscriptionResult;
  index: number;
  style: CSSProperties;
}) => {
  const listRef = React.createRef<FixedSizeList>();
  const classes = useStyles();
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const totalScrollLength = data[index].data.length - 1;
  const scrollItemsPerBlock = 4;

  const onClickLeft = () => {
    let positionToScrollTo = scrollPosition - scrollItemsPerBlock;
    if (positionToScrollTo < 0) {
      positionToScrollTo = 0;
    }

    listRef.current?.scrollToItem(positionToScrollTo, 'start');
    setScrollPosition(positionToScrollTo);
  };

  const onClickRight = () => {
    let positionToScrollTo = scrollPosition + scrollItemsPerBlock;
    if (positionToScrollTo > totalScrollLength) {
      positionToScrollTo = 0;
    }

    listRef.current?.scrollToItem(positionToScrollTo, 'start');
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
          itemSize={240}
          width={window.screen.width - consts.drawer.width}
          height={300}
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
  }: {
    data: UserSubscriptionData;
    index: number;
    style: CSSProperties;
  }) => {
    return (
      <div key={index} style={style}>
        {makeCard(data[index])}
      </div>
    );
  }
);

const makeCard = (data: UserSubscriptionData) => {
  switch (data.type) {
    case UserSubscriptionEntity.Album: {
      const albumData = data as Album;

      return (
        <AlbumCard
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

      return <UserCard data={userData} />;
    }
  }
};
