import { Screen, SongRow, TextInput, ContentContainer } from 'components';
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
    searchSongsWithArtistsAlbums(query: $query) {
      song_id
      title
      artist_id
      artist_name
      album_title
      genres
      url
      duration
      image
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
      const songs = data?.searchSongsWithArtistsAlbums ?? [];

      const songUrlPromises = songs.map((song: Song) => getHttpUrl(song.url));
      const imageUrlPromises = songs.map((song: Song) => getHttpUrl(song.image));
      const songUrls = await Promise.all(songUrlPromises);
      const imageUrls = await Promise.all(imageUrlPromises);

      const resolvedSongs = songs.map((song: any, index: number) => {
        return { ...song, image: imageUrls[index], url: songUrls[index] };
      });

      setSearchResults(resolvedSongs);
    };

    convertSongUrls();
  }, [data]);

  // const onClickArtist = (artist_id: string) => {
  //   history.push(`/artist/${artist_id}`);
  // };

  const renderSearchResults = () => {
    if (searchResults.length > 0) {
      const songsList = searchResults.map((song: any) => {
        return <SongRow key={song.song_id} {...song} />;
      });
      return <List>{songsList}</List>;
    }
    return null;
  };

  return (
    <Screen>
      <ContentContainer>
        <TextInput onChange={onChangeSearchBar} value={searchText} placeholder={'Search'} onKeyDown={onKeyDownSearchBar} fullWidth={true} />
        <Card>{loading ? <div>Loading</div> : renderSearchResults()}</Card>
      </ContentContainer>
    </Screen>
  );
};
