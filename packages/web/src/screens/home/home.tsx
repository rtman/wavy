import { Screen, TextInput, ContentContainer } from 'components';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { Avatar, Card, Divider, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/storage';
import { PlayerContext } from '../../App';

const SEARCH_SONGS_QUERY = gql`
  query SearchSongsWithArtist($query: String!) {
    searchSongsWithArtists(query: $query) {
      song_id
      title
      artist_id
      artist_name
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
  const history = useHistory();

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
      const songs = data?.searchSongsWithArtists ?? [];

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

  const onClickArtist = (artist_id: string) => {
    history.push(`/artist/${artist_id}`);
  };

  const renderSearchResults = () => {
    console.log('searchResults', searchResults);
    if (searchResults.length > 0) {
      const songsList = searchResults.map((song: any) => {
        return (
          <React.Fragment key={`${song.artist_name} - ${song.title}`}>
            <ListItem key={song.id} alignItems="flex-start" onClick={() => onClickSong(song)}>
              <ListItemAvatar>
                <Avatar variant="square" src={song.artwork} />
              </ListItemAvatar>
              <ListItemText primary={song.title} secondary={song.artist_name} onClick={() => onClickArtist(song.artist_id)} />
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
