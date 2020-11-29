import {
  Avatar,
  Button,
  Container,
  createStyles,
  Divider,
  //   CircularProgress,
  List,
  ListItemAvatar,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { UserArtist, UserLabel } from 'commonTypes';
import { ArtistListItem, Flex, LabelListItem, Spacing } from 'components';
import { UserContext } from 'context';
import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';

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

export const Dashboard = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();
  const classes = useStyles();

  const artists = userContext?.user?.artists ?? [];
  const labels = userContext?.user?.labels ?? [];

  const onClickArtist = (id: string) => {
    history.push(`/artistDashboard/${id}`);
  };

  const onClickLabel = (id: string) => {
    history.push(`/labelDashboard/${id}`);
  };

  const renderArtists = () => {
    if (artists.length > 0) {
      const artistList = artists.map(
        (userArtist: UserArtist, index: number) => {
          const artist = userArtist.artist;

          return (
            <Fragment key={artist.id}>
              <ArtistListItem
                onClick={() => onClickArtist(artist.id)}
                leftAccessory={
                  <ListItemAvatar className={classes.listItemAvatar}>
                    <Avatar
                      className={classes.avatar}
                      variant="square"
                      src={artist.profileImageUrlSmall ?? ''}
                    />
                  </ListItemAvatar>
                }
                title={artist.name}
                data={artist}
              />
              {index < artists.length - 1 ? <Divider /> : null}
            </Fragment>
          );
        }
      );
      return <List className={classes.list}>{artistList}</List>;
    }
    return null;
  };

  const renderLabels = () => {
    if (labels.length > 0) {
      const labelList = labels.map((userLabel: UserLabel, index: number) => {
        const label = userLabel.label;

        return (
          <Fragment key={label.id}>
            <LabelListItem
              onClick={() => onClickLabel(label.id)}
              leftAccessory={
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={label.profileImageUrlSmall ?? undefined}
                  />
                </ListItemAvatar>
              }
              title={label.name}
              data={label}
            />
            {index < labels.length - 1 ? <Divider /> : null}
          </Fragment>
        );
      });
      return <List className={classes.list}>{labelList}</List>;
    }
    return null;
  };

  return (
    <Container maxWidth={false}>
      <Flex flexDirection="column">
        <Spacing.section.Major />

        <Typography variant="h4">Creator Dashboard</Typography>

        <Spacing.section.Minor />

        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/createCreatorSelection')}
        >
          New Creator Account
        </Button>

        {artists.length > 0 ? (
          <>
            <Spacing.section.Major />

            <Typography variant="h5">Your Artists</Typography>

            <Spacing.section.Minor />

            {renderArtists()}

            <Spacing.section.Major />
          </>
        ) : null}

        {labels.length > 0 ? (
          <>
            <Spacing.section.Minor />

            <Typography variant="h5">Your Labels</Typography>

            <Spacing.section.Minor />

            {renderLabels()}

            <Spacing.section.Minor />
          </>
        ) : null}
      </Flex>
    </Container>
  );
};
