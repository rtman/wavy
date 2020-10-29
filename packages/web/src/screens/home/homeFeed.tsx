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
  SubscriptionResult,
  User,
} from 'commonTypes';
import { ItemCard, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { Fragment, useContext } from 'react';

type Item = Artist | Album | Label | Song | Playlist | User;

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

  const renderCardList = (items: Item[]) => {
    if ((items?.length ?? 0) > 0) {
      const itemsList: JSX.Element[] = [];
      items.forEach((item: Item) =>
        itemsList.push(<ItemCard key={item.id} item={item} />)
      );
      return <GridList className={classes.gridList}>{itemsList}</GridList>;
    } else {
      return null;
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
          renderCardList(subscription.data)
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
