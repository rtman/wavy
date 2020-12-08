import { useLazyQuery } from '@apollo/client';
import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItemAvatar,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IdParam, Query, QueryLabelByIdArgs, Song } from 'commonTypes';
import { AlbumListItem, Flex, SongListItem, Spacing } from 'components';
import * as consts from 'consts';
import { UserContext } from 'context';
import React, {
  Fragment,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

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
  const theme = useTheme();

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

  const [
    getLabelById,
    { loading: queryLoading, data: labelData },
  ] = useLazyQuery<Pick<Query, 'labelById'>, QueryLabelByIdArgs>(
    consts.queries.label.LABEL_BY_ID,
    {
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setSelectedOption(data.labelById.id);
      },
    }
  );

  useEffect(() => {
    if (id) {
      getLabelById({
        variables: { labelId: id },
      });
    } else {
      console.log('*debug* Label.getLabelById - no Id');
    }
  }, [getLabelById, id]);

  const labelAlbums = labelData?.labelById.albums ?? [];

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
        if (
          location.pathname !==
          `${consts.routes.ARTIST_DASHBOARD}/${selectedId}`
        ) {
          history.push(`${consts.routes.ARTIST_DASHBOARD}/${selectedId}`);
        }
        break;
      case 'Label':
        if (
          location.pathname !== `${consts.routes.LABEL_DASHBOARD}/${selectedId}`
        ) {
          history.push(`${consts.routes.LABEL_DASHBOARD}/${selectedId}`);
        }
        break;
    }
  };

  const renderAlbums = () => {
    if (labelAlbums.length > 0) {
      const albumsList = labelAlbums.map((album, albumIndex) => {
        const songsList = (album.songs ?? []).map((song, songIndex) => (
          <Fragment key={song.id}>
            <SongListItem
              leftAccessory={
                <Flex alignItems="center" alignSelf="center">
                  <Typography variant="body1">{songIndex + 1}</Typography>
                  <Spacing.BetweenParagraphs />
                </Flex>
              }
              title={song.title}
              data={song}
            />
            {songIndex < (album.songs ?? []).length - 1 ? <Divider /> : null}
          </Fragment>
        ));

        return (
          <Fragment key={album.id}>
            <AlbumListItem
              style={{
                marginBottom: theme.spacing(2),
                marginTop: theme.spacing(2),
              }}
              data={album}
              title={album.title}
              subtitle={album.artist.name}
              leftAccessory={
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={album.profileImageUrlSmall ?? undefined}
                  />
                </ListItemAvatar>
              }
            />
            {songsList}
            {albumIndex < labelAlbums.length - 1 ? <Divider /> : null}
          </Fragment>
        );
      });
      return (
        <>
          <Grid item={true} xs={12}>
            <List>{albumsList}</List>
          </Grid>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <Container maxWidth={false}>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={12}>
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
          </Grid>

          <Spacing.section.Minor />

          <Grid item={true} container={true}>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                history.push(`${consts.routes.LABEL_CREATE_RELEASE}/${id}`)
              }
            >
              Create Release
            </Button>

            <Spacing.BetweenComponents />

            <Button
              variant="outlined"
              color="primary"
              onClick={() =>
                history.push(
                  `${consts.routes.LABEL_CREATE_UNCLAIMED_ARTIST}/${id}`
                )
              }
            >
              Create Artist
            </Button>

            <Spacing.BetweenComponents />

            <Button
              variant="outlined"
              color="primary"
              onClick={() => history.push(`${consts.routes.LABEL}/${id}`)}
            >
              View Label
            </Button>

            {/* <Spacing.BetweenComponents />

            <Button
              variant="outlined"
              color="primary"
              onClick={() => history.push(`${consts.routes.PERMISSIONS}/${id}`)}
            >
              Permissions
            </Button> */}
          </Grid>

          <Spacing.section.Minor />
          <Grid item={true} container={true} xs={12}>
            <Grid item={true} xs={6}>
              <Typography variant="h5">Discography</Typography>
            </Grid>
            <Grid item={true} xs={6} alignContent="flex-end">
              <Typography align="right" variant="h5">
                {`${getPlayCount} plays`}
              </Typography>
            </Grid>
          </Grid>

          {renderAlbums()}
        </Grid>
      )}
    </Container>
  );
};
