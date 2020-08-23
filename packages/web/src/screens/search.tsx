import { useLazyQuery } from '@apollo/react-hooks';
import {
  CircularProgress,
  Container,
  List,
  makeStyles,
  Paper,
  Tab,
  Tabs,
} from '@material-ui/core';
import {
  AlbumRow,
  ArtistRow,
  LabelRow,
  PlaylistRow,
  Screen,
  SongRow,
  TextInput,
} from 'components';
import * as consts from 'consts';
import { SearchContext } from 'context';
import React, { useContext, useEffect, useState } from 'react';
import {
  Album,
  Artist,
  Label,
  Playlist,
  Query,
  QuerySearchAllArgs,
  Song,
} from 'types';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export const Search = () => {
  // const COMPONENT_NAME = 'Home';
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

  // const onChangeSearchBar = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchText(event.target.value);
  // };

  useEffect(() => {
    if (searchContext?.searchText && searchContext?.isSearching) {
      const formattedSearchText = `*${searchContext?.searchText}*`;
      submitSearchAll({
        variables: { query: formattedSearchText },
      });
      searchContext?.searchComplete();
    }
  }, [searchContext, submitSearchAll]);

  // const onClickArtist = (artist_id: string) => {
  //   history.push(`${consts.routes.ARTIST}/${artist_id}`);
  // };

  const renderSongResults = () => {
    if (searchResults.songs.length > 0) {
      const songsList = searchResults.songs.map((song: Song) => {
        return <SongRow key={song.id} song={song} />;
      });
      return <List>{songsList}</List>;
    }
    return null;
  };

  const renderArtistResults = () => {
    if (searchResults.artists.length > 0) {
      const artistList = searchResults.artists.map((artist: Artist) => {
        return <ArtistRow key={artist.id} artist={artist} />;
      });
      return <List>{artistList}</List>;
    }
    return null;
  };

  const renderAlbumResults = () => {
    if (searchResults.albums.length > 0) {
      const albumList = searchResults.albums.map((album: Album) => {
        return <AlbumRow key={album.id} album={album} />;
      });
      return <List>{albumList}</List>;
    }
    return null;
  };

  const renderPlaylistResults = () => {
    if (searchResults.playlists.length > 0) {
      const playlistList = searchResults.playlists.map((playlist: Playlist) => {
        return <PlaylistRow key={playlist.id} playlist={playlist} />;
      });
      return <List>{playlistList}</List>;
    }
    return null;
  };

  const renderLabelsResults = () => {
    if (searchResults.labels.length > 0) {
      const labelList = searchResults.labels.map((label: Label) => {
        return <LabelRow key={label.id} label={label} />;
      });
      return <List>{labelList}</List>;
    }
    return null;
  };

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    setCurrentTab(newValue);
  };

  // console.log('queryData', queryData);

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
    <Screen>
      <Container>
        <TextInput
          onChange={searchContext?.onChangeSearchText}
          value={searchContext?.searchText}
          placeholder={'Search'}
          onKeyDown={searchContext?.onKeyDownSearchBar}
          fullWidth={true}
        />
        <Paper square className={classes.root}>
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
    </Screen>
  );
};
