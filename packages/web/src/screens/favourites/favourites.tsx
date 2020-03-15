import { ContentContainer, Screen, SongRow, SubTitle } from 'components';
import * as consts from 'consts';
import React, { useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { CircularProgress, Divider, List } from '@material-ui/core';
import { UserContext } from 'context';

export const Favourites = () => {
  const userContext = useContext(UserContext);
  const [getSongs, { loading: queryLoading, data: queryData, error: queryError }] = useLazyQuery(consts.queries.SONGS_BY_ID_QUERY, {
    fetchPolicy: 'no-cache'
  });
  useEffect(() => {
    if (userContext?.user?.favourites) {
      getSongs({ variables: { ids: userContext?.user?.favourites } });
    }
  }, [userContext?.user?.favourites]);

  const renderSongs = () => {
    if (queryData?.songsByIdWithAlbumArtistsJoined?.length > 0) {
      const songsList = queryData.songsByIdWithAlbumArtistsJoined.map((song: Song, index: number) => {
        return (
          <>
            <SongRow key={song.id} song={song} />
            {index < queryData.songsByIdWithAlbumArtistsJoined.length - 1 ? <Divider /> : null}
          </>
        );
      });
      return <List>{songsList}</List>;
    } else {
      return null;
    }
  };

  return (
    <Screen>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <ContentContainer>
          <SubTitle>Favourites</SubTitle>
          {renderSongs()}
        </ContentContainer>
      )}
    </Screen>
  );
};
