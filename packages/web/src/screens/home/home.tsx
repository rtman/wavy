import { useQuery } from '@apollo/react-hooks';
import * as consts from 'consts';
import {
  Container,
  GridList,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ItemCard, Spacing } from 'components';
import { UserContext } from 'context';
import React, { useContext } from 'react';
import { Artist, Label, Playlist, Song } from 'types';
import { NEW_LABELS } from 'consts/queries';

type Item = Artist | Label | Song | Playlist;

interface NewArtistsData {
  newArtists: Artist[];
}

interface NewLabelsData {
  newLabels: Label[];
}

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

  const {
    loading: newArtistsLoading,
    error: newArtistsError,
    data: newArtistsData,
  } = useQuery<NewArtistsData>(consts.queries.NEW_ARTISTS);
  const {
    loading: newLabelsLoading,
    error: newLabelsError,
    data: newLabelsData,
  } = useQuery<NewLabelsData>(consts.queries.NEW_LABELS);

  const newArtists = newArtistsData?.newArtists ?? [];
  const newLabels = newLabelsData?.newLabels ?? [];

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

  const renderSection = ({
    title,
    data,
    loading,
  }: {
    title: string;
    data: Item[];
    loading?: boolean;
  }) => {
    return !loading && data.length > 0 ? (
      <>
        <Typography variant="h1">{title}</Typography>

        <Spacing.section.Minor />

        {loading ? <CircularProgress /> : renderCardList(data)}

        <Spacing.section.Minor />
      </>
    ) : null;
  };

  return (
    <Container>
      <Spacing.section.Minor />

      {renderSection({
        title: 'New Labels',
        data: newLabels,
        loading: newLabelsLoading,
      })}

      {renderSection({
        title: 'New Artists',
        data: newArtists,
        loading: newArtistsLoading,
      })}

      {renderSection({
        title: 'Playlists',
        data: playlists,
      })}

      {renderSection({
        title: 'Favourites',
        data: favourites,
      })}

      {renderSection({
        title: 'Following',
        data: following,
      })}
    </Container>
  );
};
