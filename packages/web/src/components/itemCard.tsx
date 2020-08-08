import { Card, CardMedia, GridListTile, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PlayerContext } from 'context';
import React, { useContext } from 'react';
import { Album, Artist, Playlist, Song } from 'types';

type Item = Album | Artist | Playlist | Song;
interface ItemCardProps {
  item: Item;
  passedOnClick?: (item: Item) => Promise<void>;
}

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem',
    maxWidth: '220px',
  },
  cardText: {
    padding: '1rem 1rem 0 1rem',
  },
}));

export const ItemCard = (props: ItemCardProps) => {
  const { item, passedOnClick } = props;
  const playerContext = useContext(PlayerContext);

  const title = 'title' in item ? item.title : item.name;

  const imageUrl = item.imageUrl ?? '';

  const getSongs = () => {
    if (item.__typename === 'Playlist') {
      return item?.songs?.map((s) => s.song) ?? [];
    }
    if (item.__typename === 'Album' || item.__typename === 'Artist') {
      return item.songs;
    }
    if (item.__typename === 'Song') {
      return [item];
    }
    return [];
  };

  const onClick = () => {
    playerContext?.replaceQueueWithSongs(getSongs());
  };

  // const resolvedOnClick =
  //   typeof passedOnClick === 'function'
  //     ? passedOnClick
  //     : onClick;

  const classes = useStyles();

  return (
    <GridListTile>
      <Card className={classes.root} onClick={onClick}>
        <CardMedia component="img" image={imageUrl} alt={title} />
        <Typography align="center" className={classes.cardText}>
          {title}
        </Typography>
      </Card>
    </GridListTile>
  );
};
