import { Card, Screen, SearchBar } from 'components';
// import * as helpers from 'helpers';
import React, { useEffect, useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

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

export const Home = () => {
  const COMPONENT_NAME = 'Home';

  const [searchText, setSearchText] = useState<string>('');
  const { loading, error, data } = useQuery(SONG_QUERY);

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
      // submitSearchQuery();
    }
  };

  return (
    <Screen>
      <div>Hello</div>
      <SearchBar onChange={onChangeSearchBar} value={searchText} placeholder={'Search'} onKeyDown={onKeyDownSearchBar} />
      <Card>
        <audio
          preload="none"
          src={
            'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/B2_Exit%20Point.mp3?alt=media&token=b7dab356-8989-4251-a4a3-2b7302354595'
          }
          controls={true}
        />
      </Card>
    </Screen>
  );
};
