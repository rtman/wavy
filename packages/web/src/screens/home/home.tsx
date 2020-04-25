import { Screen, SongRow, TextInput } from 'components';
import * as consts from 'consts';
import * as helpers from 'helpers';
import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { List, Container, CircularProgress } from '@material-ui/core';
import { Song, QuerySearchSongsArgs } from 'types';

interface SearchSongsData {
  searchSongs: Song[];
}

export const Home = () => {
  // const COMPONENT_NAME = 'Home';

  const [searchText, setSearchText] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Song[]>([]);
  const [
    submitSearch,
    { loading: queryLoading, data: queryData },
  ] = useLazyQuery<SearchSongsData, QuerySearchSongsArgs>(
    consts.queries.SEARCH_SONGS_QUERY
  );

  const onChangeSearchBar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const onKeyDownSearchBar = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.keyCode === 13) {
      const formattedSearchText = `*${searchText}*`;
      submitSearch({ variables: { query: formattedSearchText } });
    }
  };

  useEffect(() => {
    const convertSongUrls = async () => {
      const songs = queryData?.searchSongs ?? [];

      const songUrlPromises = songs.map((song: Song) =>
        helpers.getStorageHttpUrl(song.url)
      );
      const imageUrlPromises = songs.map((song: Song) =>
        helpers.getStorageHttpUrl(song.image)
      );
      const songUrls = await Promise.all(songUrlPromises);
      const imageUrls = await Promise.all(imageUrlPromises);

      const resolvedSongs = songs.map((song: any, index: number) => {
        return { ...song, image: imageUrls[index], url: songUrls[index] };
      });

      setSearchResults(resolvedSongs);
    };

    convertSongUrls();
  }, [queryData]);

  // const onClickArtist = (artist_id: string) => {
  //   history.push(`${consts.routes.ARTIST}/${artist_id}`);
  // };

  const renderSearchResults = () => {
    if (searchResults.length > 0) {
      const songsList = searchResults.map((song: Song) => {
        return <SongRow key={song.id} song={song} />;
      });
      return <List>{songsList}</List>;
    }
    return null;
  };

  console.log('queryData', queryData);

  return (
    <Screen>
      <Container>
        <TextInput
          onChange={onChangeSearchBar}
          value={searchText}
          placeholder={'Search'}
          onKeyDown={onKeyDownSearchBar}
          fullWidth={true}
        />
        {queryLoading ? <CircularProgress /> : renderSearchResults()}
      </Container>
    </Screen>
  );
};
