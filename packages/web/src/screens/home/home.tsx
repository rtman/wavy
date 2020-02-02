import { BottomBar, Card, Screen, SearchBar, TopBar, ContentContainer } from 'components';
// import * as helpers from 'helpers';
import React, { useEffect, useState } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';

// import c_quenz from './public/audio/c_quenz.mp3';
// import { useDispatch, useSelector } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import * as state from 'state';

const SONG_QUERY = gql`
  {
    songs {
      title
      artist
      album
      genre
      url
      duration
      artwork
      date
    }
  }
`;

const SEARCH_SONGS_QUERY = gql`
  query SearchSongs($query: String!) {
    searchSongs(query: $query) {
      title
      artist
      album
      genre
      url
      duration
      artwork
      date
    }
  }
`;

// function submitSearchQuery(searchQuery: string) {
//   const { loading, error, data } = useQuery(SEARCH_SONGS_QUERY, { variables: { query: searchQuery } });
//   if (loading) return <p>Loading ...</p>;
//   return <h1>Hello {data.greeting.message}!</h1>;
// }

export const Home = () => {
  const COMPONENT_NAME = 'Home';

  const [searchText, setSearchText] = useState<string>('');
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

  const onKeyDownSearchBar = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode == 13) {
      submitSearch({ variables: { query: searchText } });
    }
  };

  const renderSearchResults = () => {
    const songs = data?.searchSongs ?? [];
    const songList = songs.map((song: any) => {
      return (
        <div key={song.id}>
          <div>{song.artist}</div>
          <div>{song.title}</div>
        </div>
      );
    });
    return <li>{songList}</li>;
  };

  console.log('searchText', searchText);
  console.log('loading', loading);

  return (
    <Screen>
      <ContentContainer>
        <TopBar></TopBar>
        <SearchBar onChange={onChangeSearchBar} value={searchText} placeholder={'Search'} onKeyDown={onKeyDownSearchBar} />
        <Card>{loading ? <div>Loading</div> : renderSearchResults()}</Card>
      </ContentContainer>
      <BottomBar>
        <audio
          preload="none"
          src={
            'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/B2_Exit%20Point.mp3?alt=media&token=b7dab356-8989-4251-a4a3-2b7302354595'
          }
          controls={true}
        />
      </BottomBar>
    </Screen>
  );
};
