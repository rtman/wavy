import { ContentContainer, Screen, SongRow, SubTitle } from 'components';
import React, { useContext } from 'react';
import { CircularProgress, Divider, List } from '@material-ui/core';
import { UserContext } from 'context';

export const Favourites = () => {
  const userContext = useContext(UserContext);

  const renderSongs = () => {
    // eslint-disable-next-line no-self-compare
    if (userContext?.user?.favourites?.length ?? 0 > 0) {
      const favourites = userContext?.user?.favourites ?? [];
      const songsList = favourites.map((song: Song, index: number) => {
        return (
          <>
            <SongRow key={song.id} song={song} />
            {index < favourites.length - 1 ? <Divider /> : null}
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
      {userContext?.user ? (
        <ContentContainer>
          <SubTitle>Favourites</SubTitle>
          {renderSongs()}
        </ContentContainer>
      ) : (
        <CircularProgress />
      )}
    </Screen>
  );
};
