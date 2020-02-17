import { BottomBar, Screen, SearchBar, TextInput, TopBar, ContentContainer, Player } from 'components';
// import * as helpers from 'helpers';
import React, { useContext, useEffect, useState } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { Avatar, Card, Divider, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/storage';
import { PlayerContext } from '../../App';

// import c_quenz from './public/audio/c_quenz.mp3';
// import { useDispatch, useSelector } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import * as state from 'state';

const SEARCH_SONGS_QUERY = gql`
  query SearchSongs($query: String!) {
    searchSongs(query: $query) {
      title
      artist_id
      album
      genre
      url
      duration
      artwork
      date
    }
  }
`;

const getHttpUrl = async (googleStorageUri: string) => {
  const fileRef = firebase.storage().refFromURL(googleStorageUri);
  const url = await fileRef.getDownloadURL();
  return url;
};

export const Home = () => {
  const COMPONENT_NAME = 'Home';

  const [searchText, setSearchText] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Song[]>([]);
  const playerContext = useContext(PlayerContext);

  // const { loading, error, data } = useQuery(SONG_QUERY);
  const [submitSearch, { loading, error, data }] = useLazyQuery(SEARCH_SONGS_QUERY);
  console.log('data', data);

  // useEffect(() => {
  //   const audio = new Audio(c_quenz);
  //   audio.load();
  //   audio.play();
  // }, []);

  const onChangeSearchBar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const onKeyDownSearchBar = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode == 13) {
      const formattedSearchText = `*${searchText}*`;
      submitSearch({ variables: { query: formattedSearchText } });
    }
  };

  useEffect(() => {
    const convertSongUrls = async () => {
      const songs = data?.searchSongs ?? [];

      const songUrlPromises = songs.map((song: Song) => getHttpUrl(song.url));
      const artworkUrlPromises = songs.map((song: Song) => getHttpUrl(song.artwork));
      const songUrls = await Promise.all(songUrlPromises);
      const artworkUrls = await Promise.all(artworkUrlPromises);

      const resolvedSongs = songs.map((song: any, index: number) => {
        return { ...song, artwork: artworkUrls[index], url: songUrls[index] };
      });

      setSearchResults(resolvedSongs);
    };

    convertSongUrls();
  }, [data]);

  const onClickSong = (song: Song) => {
    if (playerContext?.playAudio) {
      playerContext.playAudio(song);
    }
  };

  const renderSearchResults = () => {
    console.log('searchResults', searchResults);
    if (searchResults.length > 0) {
      const songsList = searchResults.map((song: any) => {
        return (
          <React.Fragment key={`${song.artist} - ${song.title}`}>
            <ListItem key={song.id} alignItems="flex-start" onClick={() => onClickSong(song)}>
              <ListItemAvatar>
                <Avatar variant="square" src={song.artwork} />
              </ListItemAvatar>
              <ListItemText primary={song.title} secondary={song.artist} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        );
      });
      return <List>{songsList}</List>;
    }
    return null;
  };

  console.log('searchText', searchText);
  console.log('loading', loading);

  return (
    <Screen>
      <ContentContainer>
        <TextInput onChange={onChangeSearchBar} value={searchText} placeholder={'Search'} onKeyDown={onKeyDownSearchBar} fullWidth={true} />
        <Card>{loading ? <div>Loading</div> : renderSearchResults()}</Card>
      </ContentContainer>
    </Screen>
  );
};
