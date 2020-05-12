import React, { useContext } from 'react';
import {
  Card,
  CardMedia,
  GridListTile,
  Typography,
} from '@material-ui/core';
import * as helpers from 'helpers';
import { PlayerContext } from 'context';
import { Album } from 'types';
import { makeStyles } from '@material-ui/core/styles';

interface AlbumCardProps {
  album: Album;
  passedOnClickAlbum?: (album: Album) => Promise<void>;
}

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem',
    maxWidth: '220px'
  },
  cardText: {
    padding: '1rem 1rem 0 1rem'
  },
}));

export const AlbumCard = (props: AlbumCardProps) => {
  const { album, passedOnClickAlbum } = props;
  const playerContext = useContext(PlayerContext);
  const albumImageUrl = helpers.hooks.useGetStorageHttpUrl(album.image);

  const onClickAlbum = () => {
    playerContext.replaceQueueWithSongs(album.songs);
  };

  const resolvedOnClick =
    typeof passedOnClickAlbum === 'function'
      ? passedOnClickAlbum
      : onClickAlbum;

  const classes = useStyles();

  return (
    <GridListTile>
      <Card 
        className={classes.root}
        onClick={() => resolvedOnClick(album)}
      >
        <CardMedia
          component="img"
          image={albumImageUrl}
          alt={album.title}
        />
        <Typography 
          align="center"
          className={classes.cardText}
        >
          {album.title}
        </Typography>
      </Card>
    </GridListTile>
  );
};
