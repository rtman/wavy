import { ArtistRow, ContentContainer, Screen, SubTitle } from 'components';
import React, { useContext } from 'react';
import { CircularProgress, Divider, List } from '@material-ui/core';
import { UserContext } from 'context';

export const Following = () => {
  const userContext = useContext(UserContext);
  console.log('userContext?.user', userContext?.user);

  const renderArtists = () => {
    // eslint-disable-next-line no-self-compare
    if (userContext?.user?.following?.length ?? 0 > 0) {
      const following = userContext?.user?.following ?? [];
      const artistList = following.map((artist: Artist, index: number) => {
        return (
          <React.Fragment key={artist.id}>
            <ArtistRow artist={artist} />
            {index < following.length - 1 ? <Divider /> : null}
          </React.Fragment>
        );
      });
      return <List>{artistList}</List>;
    } else {
      return null;
    }
  };

  return (
    <Screen>
      {userContext?.user ? (
        <ContentContainer>
          <SubTitle>Following</SubTitle>
          {renderArtists()}
        </ContentContainer>
      ) : (
        <CircularProgress />
      )}
    </Screen>
  );
};
