import {
  Avatar,
  CircularProgress,
  Container,
  createStyles,
  Divider,
  List,
  ListItemAvatar,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { Flex, SongListItem, Spacing } from 'components';
import { UserContext } from 'context';
import React, { Fragment, useContext } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItemAvatar: {
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(2),
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    list: {
      width: '100%',
    },
  })
);

export const Favourites = () => {
  const userContext = useContext(UserContext);
  const classes = useStyles();

  const user = userContext?.user;
  const songFavourites = userContext?.user?.songFavourites ?? [];

  const renderSongs = () => {
    if (songFavourites.length > 0) {
      console.log('songFavourites', songFavourites);
      const songsList = songFavourites.map(
        (favouriteInstance, index: number) => {
          const song = favouriteInstance.song;
          return (
            <Fragment key={song.id}>
              <SongListItem
                leftAccessory={
                  <ListItemAvatar className={classes.listItemAvatar}>
                    <Avatar
                      className={classes.avatar}
                      variant="square"
                      src={song.album.profileImageUrlSmall}
                    />
                  </ListItemAvatar>
                }
                title={song.title}
                subtitle={song.artist.name}
                // TODO: add label to resolver to reterieve label name
                caption={song.label?.name}
                data={song}
              />
              {index < songFavourites.length - 1 ? <Divider /> : null}
            </Fragment>
          );
        }
      );
      return <List className={classes.list}>{songsList}</List>;
    } else {
      return null;
    }
  };

  return (
    <Container>
      {user ? (
        <Flex flexDirection="column">
          <Spacing.section.Minor />
          <Typography variant="h4">Favourites</Typography>
          <Spacing.section.Minor />
          {renderSongs()}
        </Flex>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};
