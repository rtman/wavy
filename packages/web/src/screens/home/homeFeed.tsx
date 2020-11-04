import { useQuery } from '@apollo/react-hooks';
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CircularProgress,
  Container,
  GridList,
  List,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react';
import { FixedSizeList } from 'react-window';
import { CSSProperties } from 'styled-components';

const useStyles = makeStyles(() => ({
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  list: {
    width: '100%',
  },
}));

export const HomeFeed = () => {
  const classes = useStyles();
  const userContext = useContext(UserContext);
  const listRef = React.createRef<FixedSizeList>();
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

  const makeCard = useCallback((data: UserSubscriptionData) => {
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
  }, []);

  const renderCard = ({
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
  };

  const renderCardList = (subscriptionResult: UserSubscriptionResult) => {
    const items = subscriptionResult.data;
    if ((items?.length ?? 0) > 0) {
      const itemsList: JSX.Element[] = [];
      items.forEach((item) => {
        const cardElement = makeCard(item);
        if (cardElement !== undefined) {
          itemsList.push(cardElement);
        }
      });

      return <GridList className={classes.gridList}>{itemsList}</GridList>;
    } else {
      return null;
    }
  };

  listRef.current?.scrollToItem(8);

  const renderSection = ({
    data,
    index,
    style,
  }: {
    data: UserSubscriptionResult;
    index: number;
    style: CSSProperties;
  }) => {
    return (
      <div key={index} style={style}>
        <Typography variant="h5">{data[index].title}</Typography>
        <Spacing.section.Minor />
        {/* {renderCardList(data[index])} */}

        <FixedSizeList
          ref={listRef}
          itemSize={240}
          width={window.screen.width}
          height={300}
          layout="horizontal"
          itemCount={data[index].data.length}
          itemData={data[index].data}
        >
          {renderCard}
        </FixedSizeList>
        <Spacing.section.Minor />
      </div>
    );
  };

  const renderSections = (data: UserSubscriptionResult[]) => {
    const subscriptionList = data.map((subscription) => (
      <Fragment key={subscription.id}>
        <Typography variant="h5">{subscription.title}</Typography>

        {/* {renderCardList(data)} */}

        <FixedSizeList
          itemSize={240}
          width={window.screen.width}
          height={300}
          layout="horizontal"
          itemCount={subscription.data.length}
          itemData={subscription.data}
          overscanCount={2}
        >
          {renderCard}
        </FixedSizeList>
      </Fragment>
    ));
    return <List className={classes.list}>{subscriptionList}</List>;
  };

  return (
    <Container>
      <Spacing.section.Minor />
      {/* {renderSections(userSubscriptionsData?.getUserSubscriptions ?? [])} */}

      {userSubscriptionsLoading ? (
        <CircularProgress />
      ) : (
        // renderSections(userSubscriptionsData?.getUserSubscriptions ?? [])
        <FixedSizeList
          itemSize={400}
          width={'100%'}
          height={window.screen.height}
          itemCount={userSubscriptionsData?.getUserSubscriptions.length ?? 0}
          itemData={userSubscriptionsData?.getUserSubscriptions}
          overscanCount={2}
        >
          {renderSection}
        </FixedSizeList>
      )}
    </Container>
  );
};
