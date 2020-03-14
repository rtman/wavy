import {
  ProfileContainer,
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderTitle,
  ContentContainer,
  Screen,
  SongRow,
  SubTitle
} from 'components';
import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Button, Divider, List } from '@material-ui/core';
import { PlayerContext } from 'context';
import * as helpers from 'helpers';

const PLAYLIST_BY_ID_WITH_SONGS_QUERY = gql`
  query PlaylistByIdWithSongs($id: ID!) {
    playlistByIdWithSongs(id: $id) {
      title
      description
      image
      user_ids
      songs {
        id
        album_id
        artist_id
        artist_name
        title
        image
        url
      }
    }
  }
`;

export const Playlist = () => {
  const history = useHistory();
  const { id } = useParams();
  const playerContext = useContext(PlayerContext);
  const [songIds, setSongIds] = useState<string[]>([]);
  const { loading, error, data } = useQuery(PLAYLIST_BY_ID_WITH_SONGS_QUERY, { variables: { id } });
  const playlistImageUrl = helpers.hooks.useGetStorageHttpUrl(data?.playlistByIdWithSongs?.image);

  const renderSongs = () => {
    if (data?.playlistByIdWithSongs?.songs.length > 0) {
      const songsList = data.playlistByIdWithSongs.songs.map((song: Song, index: number) => {
        return (
          <>
            <SongRow key={song.id} song={song} />
            {index < data.playlistByIdWithSongs.songs.length - 1 ? <Divider /> : null}
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
      {loading ? (
        <div>loading</div>
      ) : (
        <ContentContainer>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={playlistImageUrl} />
            <ProfileHeaderTitle>{data?.playlistByIdWithSongs?.title}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <ProfileContainer>
            <Button onClick={() => playerContext.replaceQueueWithSongs(data?.playlistByIdWithSongs?.songs)}>Play Now</Button>
            <SubTitle>Description</SubTitle>
            <div>{data?.playlistByIdWithSongs?.description}</div>
            <SubTitle>Songs</SubTitle>
            {renderSongs()}
          </ProfileContainer>
        </ContentContainer>
      )}
    </Screen>
  );
};
