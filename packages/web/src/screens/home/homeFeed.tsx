import { useQuery } from '@apollo/react-hooks';
import {
  CircularProgress,
  Container,
  GridList,
  List,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Album,
  Artist,
  Label,
  Playlist,
  Query,
  Song,
  SubscriptionData,
  SubscriptionEntity,
  SubscriptionResult,
  User,
} from 'commonTypes';
import {
  AlbumCard,
  ArtistCard,
  LabelCard,
  PlaylistCard,
  SongCard,
  Spacing,
  UserCard,
} from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { Fragment, useContext } from 'react';

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
  const user = userContext?.user;
  console.log('*debug* HomeFeed user?.id', user?.id);
  const {
    loading: subscriptionsLoading,
    // error: newArtistsError,
    data: subscriptionData,
  } = useQuery<Pick<Query, 'getSubscriptions'>>(
    consts.queries.subscription.GET_SUBSCRIPTIONS,
    {
      variables: { userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1' },
      // couldnt get this to work without no-cache, something to do with the union types in the query
      fetchPolicy: 'no-cache',
    }
  );

  console.log('*debug* HomeFeed subscriptionData', subscriptionData);

  const renderCardList = (subscriptionResult: SubscriptionResult) => {
    const items = subscriptionResult.data;
    if ((items?.length ?? 0) > 0) {
      const itemsList: JSX.Element[] = [];
      items.forEach((item) => {
        const cardElement = getCardElement(item);
        if (cardElement !== undefined) {
          itemsList.push(cardElement);
        }
      });

      return <GridList className={classes.gridList}>{itemsList}</GridList>;
    } else {
      return null;
    }
  };

  const getCardElement = (data: SubscriptionData) => {
    // typescript is having trouble narrowing the union here for some reason
    // but the switch ensures the right type is found, so casting it is ok
    switch (data.__typename) {
      case 'Album':
        return <AlbumCard data={data} image={data.profileImageUrlThumb} />;
      case 'Artist':
        return (
          <ArtistCard data={data} image={data.profileImageUrlThumb ?? ''} />
        );
      case 'Label':
        return <LabelCard data={data} image={data.profileImageUrlThumb} />;
      case 'Playlist':
        return (
          <PlaylistCard data={data} image={data.profileImageUrlThumb ?? ''} />
        );
      case 'Song':
        return <SongCard data={data} image={data.album.profileImageUrlThumb} />;
      case 'User':
        return <UserCard data={data} />;
    }
  };

  const renderSections = (data: SubscriptionResult[]) => {
    const filteredData = data.filter(
      (subscription) => subscription.data.length > 0
    );

    const subscriptionList = filteredData.map((subscription) => (
      <Fragment key={subscription.id}>
        <Typography variant="h4">{`${subscription.type} - ${subscription.entity} - ${subscription.sortBy} - ${subscription.payload}`}</Typography>

        <Spacing.section.Minor />

        {subscriptionsLoading ? (
          <CircularProgress />
        ) : (
          renderCardList(subscription)
        )}

        <Spacing.section.Minor />
      </Fragment>
    ));
    return <List className={classes.list}>{subscriptionList}</List>;
  };

  return (
    <Container>
      <Spacing.section.Minor />
      <Typography variant="h3">Home</Typography>

      {renderSections(subscriptionData?.getSubscriptions ?? [])}
    </Container>
  );
};
