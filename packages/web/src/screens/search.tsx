import { useLazyQuery } from '@apollo/react-hooks';
import {
  Avatar,
  CircularProgress,
  Container,
  createStyles,
  Divider,
  List,
  ListItemAvatar,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  TextField,
  Theme,
} from '@material-ui/core';
import {
  Album,
  Artist,
  Label,
  Playlist,
  Query,
  QuerySearchAllArgs,
  Song,
} from 'commonTypes';
import {
  AlbumListItem,
  ArtistListItem,
  LabelListItem,
  PlaylistListItem,
  SongListItem,
} from 'components';
import * as consts from 'consts';
import { SearchContext } from 'context';
import React, { Fragment, useContext, useEffect, useState } from 'react';

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

export const Search = () => {
  const classes = useStyles();
  const searchContext = useContext(SearchContext);
  const [searchResults, setSearchResults] = useState<Query['searchAll']>({
    albums: [],
    artists: [],
    labels: [],
    playlists: [],
    songs: [],
  });
  const [currentTab, setCurrentTab] = useState<string>('songs');

  const [submitSearchAll, { loading: searchLoading }] = useLazyQuery<
    Pick<Query, 'searchAll'>,
    QuerySearchAllArgs
  >(consts.queries.search.SEARCH_ALL, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setSearchResults(data.searchAll);
    },
  });

  useEffect(() => {
    if (searchContext?.searchText && searchContext?.isSearching) {
      const formattedSearchText = `*${searchContext?.searchText}*`;
      submitSearchAll({
        variables: { query: formattedSearchText },
      });
      searchContext?.searchComplete();
    }
  }, [searchContext, submitSearchAll]);

  const renderSongResults = () => {
    if (searchResults.songs.length > 0) {
      const songsList = searchResults.songs.map((song: Song, index: number) => (
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
            caption={song.label?.name}
            song={song}
          />
          {index < searchResults.songs.length - 1 ? <Divider /> : null}
        </Fragment>
      ));
      return <List className={classes.list}>{songsList}</List>;
    }
    return null;
  };

  const renderArtistResults = () => {
    if (searchResults.artists.length > 0) {
      const artistList = searchResults.artists.map(
        (artist: Artist, index: number) => (
          <Fragment key={artist.id}>
            <ArtistListItem
              leftAccessory={
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={artist.profileImageUrlSmall}
                  />
                </ListItemAvatar>
              }
              title={artist.name}
              artist={artist}
            />
            {index < searchResults.artists.length - 1 ? <Divider /> : null}
          </Fragment>
        )
      );
      return <List className={classes.list}>{artistList}</List>;
    }
    return null;
  };

  const renderAlbumResults = () => {
    if (searchResults.albums.length > 0) {
      const albumList = searchResults.albums.map(
        (album: Album, index: number) => (
          <Fragment key={album.id}>
            <AlbumListItem
              leftAccessory={
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={album.profileImageUrlSmall}
                  />
                </ListItemAvatar>
              }
              title={album.title}
              subtitle={album.artist.name}
              caption={album.label?.name}
              album={album}
            />
            {index < searchResults.albums.length - 1 ? <Divider /> : null}
          </Fragment>
        )
      );
      return <List className={classes.list}>{albumList}</List>;
    }
    return null;
  };

  const renderPlaylistResults = () => {
    if (searchResults.playlists.length > 0) {
      const playlistList = searchResults.playlists.map(
        (playlist: Playlist, index: number) => (
          <Fragment key={playlist.id}>
            <PlaylistListItem
              leftAccessory={
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={playlist.profileImageUrlSmall ?? ''}
                  />
                </ListItemAvatar>
              }
              title={playlist.title}
              playlist={playlist}
            />
            {index < searchResults.playlists.length - 1 ? <Divider /> : null}
          </Fragment>
        )
      );
      return <List className={classes.list}>{playlistList}</List>;
    }
    return null;
  };

  const renderLabelsResults = () => {
    if (searchResults.labels.length > 0) {
      const labelList = searchResults.labels.map(
        (label: Label, index: number) => (
          <Fragment key={label.id}>
            <LabelListItem
              leftAccessory={
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar
                    className={classes.avatar}
                    variant="square"
                    src={label.profileImageUrlSmall}
                  />
                </ListItemAvatar>
              }
              title={label.name}
              label={label}
            />
            {index < searchResults.labels.length - 1 ? <Divider /> : null}
          </Fragment>
        )
      );
      return <List className={classes.list}>{labelList}</List>;
    }
    return null;
  };

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    setCurrentTab(newValue);
  };

  const renderSearchResults = () => {
    switch (currentTab) {
      case 'songs':
        return renderSongResults();
      case 'artists':
        return renderArtistResults();
      case 'albums':
        return renderAlbumResults();
      case 'playlists':
        return renderPlaylistResults();
      case 'labels':
        return renderLabelsResults();
      default:
        return renderSongResults();
    }
  };

  return (
    <Container>
      <TextField
        onChange={searchContext?.onChangeSearchText}
        value={searchContext?.searchText}
        placeholder={'Search'}
        onKeyDown={searchContext?.onKeyDownSearchBar}
        fullWidth={true}
      />
      <Paper>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="search tabs"
        >
          <Tab label="Songs" value="songs" />
          <Tab label="Artists" value="artists" />
          <Tab label="Albums" value="albums" />
          <Tab label="Playlists" value="playlists" />
          <Tab label="Labels" value="labels" />
        </Tabs>
      </Paper>
      {searchLoading ? <CircularProgress /> : renderSearchResults()}
    </Container>
  );
};
