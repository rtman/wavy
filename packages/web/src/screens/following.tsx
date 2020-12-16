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
import { ArtistListItem, Flex, Spacing } from 'components';
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

export const Following = () => {
  const userContext = useContext(UserContext);
  const classes = useStyles();

  const user = userContext?.user;

  console.log('user', user);
  const following = userContext?.user?.artistFollows ?? [];

  const renderArtists = () => {
    if (following.length > 0) {
      const artistList = following.map((followingInstance, index: number) => {
        const artist = followingInstance.artist;

        return (
          <Fragment key={artist.id}>
            <ArtistListItem
              leftAccessory={
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={artist.profileImageUrlSmall ?? undefined}
                  />
                </ListItemAvatar>
              }
              title={artist.name}
              data={artist}
            />
            {index < following.length - 1 ? <Divider /> : null}
          </Fragment>
        );
      });

      return <List className={classes.list}>{artistList}</List>;
    } else {
      return null;
    }
  };

  return (
    <Container maxWidth={false}>
      {user ? (
        <Flex flexDirection="column">
          <Spacing.section.Minor />
          <Typography variant="h4">Following</Typography>
          <Spacing.section.Minor />
          {renderArtists()}
        </Flex>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};
