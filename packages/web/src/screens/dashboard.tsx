import {
  Button,
  Container,
  //   CircularProgress,
  List,
  Typography,
} from '@material-ui/core';
import { UserArtist, UserLabel } from 'commonTypes';
import { ArtistRow, Flex, LabelRow, Spacing } from 'components';
import { UserContext } from 'context';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

export const Dashboard = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();

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
      const artistList = artists.map((userArtist: UserArtist) => {
        const artist = userArtist.artist;

        return (
          <ArtistRow
            key={artist.id}
            artist={artist}
            passedOnClickArtist={() => onClickArtist(artist.id)}
          />
        );
      });
      return <List>{artistList}</List>;
    }
    return null;
  };

  const renderLabels = () => {
    if (labels.length > 0) {
      const labelList = labels.map((userLabel: UserLabel) => {
        const label = userLabel.label;

        return (
          <LabelRow
            key={label.id}
            label={label}
            passedOnClickLabel={() => onClickLabel(label.id)}
          />
        );
      });
      return <List>{labelList}</List>;
    }
    return null;
  };

  return (
    <Container>
      <Flex flexDirection="column">
        <Spacing.section.Major />

        <Typography variant="h1">Creator Dashboard</Typography>

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

            <Typography variant="h1">Your Artists</Typography>

            <Spacing.section.Minor />

            {renderArtists()}

            <Spacing.section.Major />
          </>
        ) : null}

        {labels.length > 0 ? (
          <>
            <Spacing.section.Minor />

            <Typography variant="h1">Your Labels</Typography>

            <Spacing.section.Minor />

            {renderLabels()}

            <Spacing.section.Minor />
          </>
        ) : null}
      </Flex>
    </Container>
  );
};
