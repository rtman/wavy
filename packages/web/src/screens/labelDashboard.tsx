import { useLazyQuery } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  IdParam,
  Label as LabelType,
  Query,
  QueryLabelByIdArgs,
} from 'commonTypes';
import { Flex, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

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
  const { id } = useParams<IdParam>();
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

  const labelAlbums = label?.albums ?? [];

  const getPlayCount = useMemo(() => {
    let totalPlayCount = 0;
    labelAlbums.forEach((album) =>
      (album.songs ?? []).forEach((song) => {
        totalPlayCount += song.playCount;
      })
    );
    return totalPlayCount;
  }, [labelAlbums]);

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

          <Grid container={true}>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                history.push(`${consts.routes.LABEL_CREATE_RELEASE}/${id}`)
              }
            >
              Create Release
            </Button>

            {/* <IconButton
            color="primary"
            onClick={() => history.push(`/manageDiscography/${id}`)}
          >
            <AlbumIcon />
            Manage Discography
          </IconButton> */}

            <Spacing.BetweenComponents />

            <Button
              variant="outlined"
              color="primary"
              onClick={() => history.push(`${consts.routes.LABEL}/${id}`)}
            >
              View Label
            </Button>

            <Spacing.BetweenComponents />

            <Button
              variant="outlined"
              color="primary"
              onClick={() =>
                history.push(consts.routes.LABEL_CREATE_UNCLAIMED_ARTIST)
              }
            >
              Add Artist
            </Button>

            <Button
              variant="outlined"
              color="primary"
              onClick={() =>
                history.push(consts.routes.LABEL_CREATE_CONNECTION)
              }
            >
              Add Connections
            </Button>
          </Grid>
          <Spacing.section.Major />

          <Typography variant="h5">Stats</Typography>

          <Spacing.section.Minor />

          <Typography variant="h5">Plays</Typography>

          <Spacing.section.Minor />

          <Typography variant="body1">{getPlayCount}</Typography>
        </Flex>
      )}
    </Container>
  );
};
