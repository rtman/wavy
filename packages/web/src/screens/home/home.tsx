import { useQuery } from '@apollo/react-hooks';
import {
  CircularProgress,
  Container,
  GridList,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ItemCard, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { useContext } from 'react';
import { Artist, Label, Playlist, Query, Song } from 'types';

type Item = Artist | Label | Song | Playlist;

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
  // const userContext = useContext(UserContext);
  // const user = userContext?.user;
  // const songFavourites = user?.songFavourites?.map((f) => f.song) ?? [];
  // const playlists = user?.playlists?.map((p) => p.playlist) ?? [];
  // const artistsFollowing = user?.artistFollows?.map((f) => f.artist) ?? [];

  // const {
  //   loading: newArtistsLoading,
  //   // error: newArtistsError,
  //   data: newArtistsData,
  // } = useQuery<Pick<Query, 'newArtists'>>(consts.queries.artist.NEW_ARTISTS);
  // const {
  //   loading: newLabelsLoading,
  //   // error: newLabelsError,
  //   data: newLabelsData,
  // } = useQuery<Pick<Query, 'newLabels'>>(consts.queries.label.NEW_LABELS);
  // const {
  //   loading: usersTopSongsLoading,
  //   // error: newLabelsError,
  //   data: usersTopSongsData,
  // } = useQuery<Pick<Query, 'usersTopSongs'>>(
  //   consts.queries.user.USERS_TOP_SONGS,
  //   {
  //     variables: { userId: user?.id },
  //   }
  // );
  // const {
  //   loading: playHistoryLoading,
  //   // error: newLabelsError,
  //   data: playHistoryData,
  // } = useQuery<Pick<Query, 'playHistory'>>(consts.queries.user.PLAY_HISTORY, {
  //   variables: { userId: user?.id },
  // });
  const {
    loading: topSongsLoading,
    // error: newLabelsError,
    data: topSongsData,
  } = useQuery<Pick<Query, 'topSongs'>>(consts.queries.song.TOP_SONGS);
  // const {
  //   loading: topJazzSongsLoading,
  //   // error: newLabelsError,
  //   data: topJazzSongsData,
  // } = useQuery<Pick<Query, 'topSongsByTagName'>>(
  //   consts.queries.song.TOP_SONGS_BY_TAG_NAME,
  //   { variables: { tagName: 'jazz' } }
  // );
  // const {
  //   loading: topHouseSongsLoading,
  //   // error: newLabelsError,
  //   data: topHouseSongsData,
  // } = useQuery<Pick<Query, 'topSongsByTagName'>>(
  //   consts.queries.song.TOP_SONGS_BY_TAG_NAME,
  //   { variables: { tagName: 'house' } }
  // );

  // const newArtists = newArtistsData?.newArtists ?? [];
  // const newLabels = newLabelsData?.newLabels ?? [];
  // const usersTopSongs = usersTopSongsData?.usersTopSongs ?? [];
  const topSongs = topSongsData?.topSongs ?? [];
  // already uniquefied by typeORM findByIds
  // const playHistory = playHistoryData?.playHistory ?? [];
  // const topJazzSongs = topJazzSongsData?.topSongsByTagName ?? [];
  // const topHouseSongs = topHouseSongsData?.topSongsByTagName ?? [];

  const renderCardList = (items: Item[]) => {
    //eslint-disable-next-line no-self-compare
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
      {/* 
      {renderSection({
        title: 'New Labels',
        data: newLabels,
        loading: newLabelsLoading,
      })} */}

      {/* {renderSection({
        title: 'New Artists',
        data: newArtists,
        loading: newArtistsLoading,
      })} */}

      {renderSection({
        title: 'Top Songs',
        data: topSongs,
        loading: topSongsLoading,
      })}
      {/* 
      {renderSection({
        title: 'Top Jazz',
        data: topJazzSongs,
        loading: topJazzSongsLoading,
      })}

      {renderSection({
        title: 'Top House',
        data: topHouseSongs,
        loading: topHouseSongsLoading,
      })}

      {renderSection({
        title: 'Your Top Songs',
        data: usersTopSongs,
        loading: usersTopSongsLoading,
      })}

      {renderSection({
        title: 'Play History',
        data: playHistory,
        loading: playHistoryLoading,
      })}

      {renderSection({
        title: 'Playlists',
        data: playlists,
      })}

      {renderSection({
        title: 'Favourites',
        data: songFavourites,
      })}

      {renderSection({
        title: 'Artists You Follow',
        data: artistsFollowing,
      })} */}
    </Container>
  );
};
