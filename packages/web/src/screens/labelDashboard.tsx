import { useLazyQuery } from '@apollo/react-hooks';
import {
  // Button,
  CircularProgress,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  //   List,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AlbumIcon from '@material-ui/icons/Album';
import { Flex, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Label as LabelType, Query, QueryLabelByIdArgs } from 'types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export const LabelDashboard = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const classes = useStyles();

  const [label, setLabel] = useState<LabelType | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const artists =
    userContext?.user?.artists?.map((element) => element.artist) ?? [];
  const labels =
    userContext?.user?.labels?.map((element) => element.label) ?? [];
  const creatorAccounts = [...artists, ...labels];

  const generateSelectOptions = () => {
    const options = creatorAccounts.map((element) => {
      const optionTitle = element.name;
      const optionId = element.id;

      return <MenuItem value={optionId}>{optionTitle}</MenuItem>;
    });

    return options;
  };

  const [getLabelById, { loading: queryLoading }] = useLazyQuery<
    Pick<Query, 'labelById'>,
    QueryLabelByIdArgs
  >(consts.queries.label.LABEL_BY_ID, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setLabel(data.labelById);
      setSelectedOption(data.labelById.id);
      console.log('label', label);
    },
  });

  useEffect(() => {
    if (id) {
      getLabelById({
        variables: { labelId: id },
      });
    } else {
      console.log('Label.getLabelById - no Id');
    }
  }, [getLabelById, id]);

  const labelSongs = label?.songs ?? [];

  const getPlayCount = () => {
    let totalPlayCount = 0;
    labelSongs.forEach((song) => {
      totalPlayCount += song.playCount;
    });
    return totalPlayCount;
  };

  labelSongs.forEach((song) => {
    return song.playCount;
  });
  // const LabelAlbums = Label?.albums ?? [];
  // const LabelName = Label?.name ?? '';
  // const LabelDescription = Label?.description ?? '';
  // const LabelImageUrl = Label?.imageUrl ?? '';

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedId = event.target.value as string;

    setSelectedOption(selectedId);
    const selected = creatorAccounts.find(
      (element) => element.id === selectedId
    );

    switch (selected?.__typename) {
      case 'Artist':
        if (location.pathname !== `/artistDashboard/${selectedId}`) {
          history.push(`/artistDashboard/${selectedId}`);
        }
        break;
      case 'Label':
        if (location.pathname !== `/labelDashboard/${selectedId}`) {
          history.push(`/labelDashboard/${selectedId}`);
        }
        break;
    }
  };
  return (
    <Container>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <Flex flexDirection="column">
          <Spacing.section.Minor />
          {/* <Typography variant="h1">{LabelName}</Typography> */}

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="creatorAccountsSelect">Account</InputLabel>
            <Select
              value={selectedOption}
              onChange={handleChange}
              inputProps={{
                name: 'creatorAccounts',
                id: 'creatorAccountsSelect',
              }}
            >
              {generateSelectOptions()}
            </Select>
          </FormControl>

          <Spacing.section.Minor />

          <IconButton
            color="primary"
            onClick={() => history.push(`/labelCreateRelease/${id}`)}
          >
            <AlbumIcon />
            Create Release
          </IconButton>

          {/* <IconButton
            color="primary"
            onClick={() => history.push(`/manageDiscography/${id}`)}
          >
            <AlbumIcon />
            Manage Discography
          </IconButton> */}

          <IconButton
            color="primary"
            onClick={() => history.push(`/Label/${id}`)}
          >
            <AlbumIcon />
            View Label
          </IconButton>

          <Spacing.section.Major />

          <Typography variant="h1">Stats</Typography>

          <Spacing.section.Minor />

          <Typography variant="h2">Plays</Typography>

          <Spacing.section.Minor />

          <Typography variant="body1">{getPlayCount()}</Typography>
        </Flex>
      )}
    </Container>
  );
};
