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
  QuerySearchAlbumsArgs,
  QuerySearchArtistsArgs,
  QuerySearchLabelsArgs,
  QuerySearchPlaylistsArgs,
  QuerySearchSongsArgs,
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
  const [songSearchResults, setSongSearchResults] = useState<Song[]>([]);
  const [artistSearchResults, setArtistSearchResults] = useState<Artist[]>([]);
  const [albumSearchResults, setAlbumSearchResults] = useState<Album[]>([]);
  const [playlistSearchResults, setPlaylistSearchResults] = useState<
    Playlist[]
  >([]);
  const [labelSearchResults, setLabelSearchResults] = useState<Label[]>([]);
  const [currentTab, setCurrentTab] = useState<string>('songs');

  const [submitSongSearch, { loading: songQueryLoading }] = useLazyQuery<
    Pick<Query, 'searchSongs'>,
    QuerySearchSongsArgs
  >(consts.queries.SEARCH_SONGS_QUERY, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setSongSearchResults(data.searchSongs);
    },
  });

  const [submitArtistSearch, { loading: artistQueryLoading }] = useLazyQuery<
    Pick<Query, 'searchArtists'>,
    QuerySearchArtistsArgs
  >(consts.queries.SEARCH_ARTISTS_QUERY, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setArtistSearchResults(data.searchArtists);
    },
  });
  const [submitAlbumSearch, { loading: albumQueryLoading }] = useLazyQuery<
    Pick<Query, 'searchAlbums'>,
    QuerySearchAlbumsArgs
  >(consts.queries.SEARCH_ALBUMS_QUERY, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setAlbumSearchResults(data.searchAlbums);
    },
  });

  const [
    submitPlaylistSearch,
    { loading: playlistQueryLoading },
  ] = useLazyQuery<Pick<Query, 'searchPlaylists'>, QuerySearchPlaylistsArgs>(
    consts.queries.SEARCH_PLAYLISTS_QUERY,
    {
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setPlaylistSearchResults(data.searchPlaylists);
      },
    }
  );

  const [submitLabelSearch, { loading: labelQueryLoading }] = useLazyQuery<
    Pick<Query, 'searchLabels'>,
    QuerySearchLabelsArgs
  >(consts.queries.SEARCH_LABELS_QUERY, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setLabelSearchResults(data.searchLabels);
    },
  });

  // const onChangeSearchBar = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchText(event.target.value);
  // };

  useEffect(() => {
    if (searchContext?.searchText && searchContext?.isSearching) {
      const formattedSearchText = `*${searchContext?.searchText}*`;
      submitSongSearch({
        variables: { query: formattedSearchText },
      });
      submitArtistSearch({
        variables: { query: formattedSearchText },
      });
      submitAlbumSearch({
        variables: { query: formattedSearchText },
      });
      submitPlaylistSearch({
        variables: { query: formattedSearchText },
      });
      submitLabelSearch({
        variables: { query: formattedSearchText },
      });
      searchContext?.searchComplete();
    }
  }, [
    searchContext,
    submitSongSearch,
    submitArtistSearch,
    submitAlbumSearch,
    submitPlaylistSearch,
    submitLabelSearch,
  ]);

  // const onClickArtist = (artist_id: string) => {
  //   history.push(`${consts.routes.ARTIST}/${artist_id}`);
  // };

  const renderSongResults = () => {
    if (songSearchResults.length > 0) {
      const songsList = songSearchResults.map((song: Song) => {
        return <SongRow key={song.id} song={song} />;
      });
      return <List>{songsList}</List>;
    }
    return null;
  };

  const renderArtistResults = () => {
    if (artistSearchResults.length > 0) {
      const artistList = artistSearchResults.map((artist: Artist) => {
        return <ArtistRow key={artist.id} artist={artist} />;
      });
      return <List>{artistList}</List>;
    }
    return null;
  };

  const renderAlbumResults = () => {
    if (albumSearchResults.length > 0) {
      const albumList = albumSearchResults.map((album: Album) => {
        return <AlbumRow key={album.id} album={album} />;
      });
      return <List>{albumList}</List>;
    }
    return null;
  };

  const renderPlaylistResults = () => {
    if (playlistSearchResults.length > 0) {
      const playlistList = playlistSearchResults.map((playlist: Playlist) => {
        return <PlaylistRow key={playlist.id} playlist={playlist} />;
      });
      return <List>{playlistList}</List>;
    }
    return null;
  };

  const renderLabelsResults = () => {
    if (labelSearchResults.length > 0) {
      const labelList = labelSearchResults.map((label: Label) => {
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

  const areQueriesLoading = () => {
    return [
      songQueryLoading,
      artistQueryLoading,
      albumQueryLoading,
      playlistQueryLoading,
      labelQueryLoading,
    ].includes(true);
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
        {areQueriesLoading() ? <CircularProgress /> : renderSearchResults()}
      </Container>
    </Screen>
  );
};
