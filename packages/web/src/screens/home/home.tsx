import { Screen, SongRow, TextInput, ContentContainer } from 'components';
import * as helpers from 'helpers';
import React, { useEffect, useState } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { List } from '@material-ui/core';

const SEARCH_SONGS_QUERY = gql`
  query SearchSongs($query: String!) {
    searchSongs(query: $query) {
      id
      title
      artist_id
      artist_name
      album_title
      album_id
      genres
      url
      image
      date
    }
  }
`;

export const Home = () => {
  const COMPONENT_NAME = 'Home';

  const [searchText, setSearchText] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Song[]>([]);

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
      const songs = data?.searchSongs ?? [];

      const songUrlPromises = songs.map((song: Song) => helpers.getStorageHttpUrl(song.url));
      const imageUrlPromises = songs.map((song: Song) => helpers.getStorageHttpUrl(song.image));
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
        return <SongRow key={song.id} song={song} />;
      });
      return <List>{songsList}</List>;
    }
    return null;
  };

  console.log('data', data);

  return (
    <Screen>
      <ContentContainer>
        <TextInput onChange={onChangeSearchBar} value={searchText} placeholder={'Search'} onKeyDown={onKeyDownSearchBar} fullWidth={true} />
        {loading ? <div>Loading</div> : renderSearchResults()}
      </ContentContainer>
    </Screen>
  );
};
