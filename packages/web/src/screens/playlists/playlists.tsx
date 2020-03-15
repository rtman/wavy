import { ContentContainer, PlaylistRow, Screen, SubTitle } from 'components';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Divider, List } from '@material-ui/core';

const PLAYLISTS_BY_USER_ID = gql`
  query PlaylistsByUserId($userId: ID!) {
    playlistsByUserId(userId: $userId) {
      id
      title
      description
      image
      user_ids
      songs
    }
  }
`;

export const Playlists = () => {
  const { loading, error, data } = useQuery(PLAYLISTS_BY_USER_ID, { variables: { userId: 'd97f1d32-647a-11ea-bc55-0242ac130003' } });

  const renderPlaylists = () => {
    if (data?.playlistsByUserId?.length > 0) {
      const playlistsList = data.playlistsByUserId.map((playlist: Playlist, index: number) => {
        return (
          <>
            <PlaylistRow key={playlist.id} playlist={playlist} />
            {index < data.playlistsByUserId.length - 1 ? <Divider /> : null}
          </>
        );
      });
      return <List>{playlistsList}</List>;
    } else {
      return null;
    }
  };

  return (
    <Screen>
      {loading ? (
        <div>loading</div>
      ) : (
        <ContentContainer>
          <SubTitle>Playlists</SubTitle>
          {renderPlaylists()}
        </ContentContainer>
      )}
    </Screen>
  );
};
