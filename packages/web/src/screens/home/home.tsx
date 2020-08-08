import { useLazyQuery } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  Divider,
  GridList,
  List,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ItemCard, RowContainer, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext, PlayerContext } from 'context';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Album, Playlist, Artist, QueryAlbumByIdArgs, Song } from 'types';

type Item = Artist | Song | Playlist;

const useStyles = makeStyles(() => ({
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

export const Home = () => {
  // const COMPONENT_NAME = 'Home';
  const classes = useStyles();
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const favourites = user?.favourites?.map((f) => f.song) ?? [];
  const playlists = user?.playlists?.map((p) => p.playlist) ?? [];
  const following = user?.following?.map((f) => f.artist) ?? [];

  const renderCardList = (items: Item[]) => {
    if (items?.length ?? 0 > 0) {
      const itemsList: JSX.Element[] = [];
      items.forEach((item: Item) =>
        itemsList.push(<ItemCard key={item.id} item={item} />)
      );
      return <GridList className={classes.gridList}>{itemsList}</GridList>;
    } else {
      return null;
    }
  };

  return (
    <Container>
      <Spacing.section.Minor />

      <Typography variant="h1">Playlists</Typography>

      <Spacing.section.Minor />

      {renderCardList(playlists)}

      <Spacing.section.Minor />

      <Typography variant="h1">Favourites</Typography>

      <Spacing.section.Minor />

      {renderCardList(favourites)}

      <Spacing.section.Minor />

      <Typography variant="h1">Following</Typography>

      <Spacing.section.Minor />

      {renderCardList(following)}

      <Spacing.section.Minor />
    </Container>
  );
};
