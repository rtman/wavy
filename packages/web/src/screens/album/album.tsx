import {
  AlbumWithSongs,
  ProfileContainer,
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderTitle,
  ContentContainer,
  Screen,
  SongRow,
  SubTitle
} from 'components';
import * as consts from 'consts';
import * as helpers from 'helpers';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Button, Divider, List } from '@material-ui/core';
import { PlayerContext } from 'context';

export const Album = () => {
  const { id } = useParams();
  const playerContext = useContext(PlayerContext);
  const { loading, error, data, networkStatus } = useQuery(consts.queries.ALBUM_BY_ID, { variables: { id: id?.toString() } });
  const history = useHistory();
  const albumImageUrl = helpers.hooks.useGetStorageHttpUrl(data?.albumWithSongsArtistsJoined?.image);

  const renderSongs = () => {
    if (data?.albumById?.album_songs && data.albumById.album_songs.length > 0) {
      const songs = data?.albumById?.album_songs;
      const songsList = songs.map((song: Song, index: number) => {
        return (
          <>
            <SongRow key={song.id} song={song} secondaryStyle={true} />
            {index < songs.length - 1 ? <Divider /> : null}
          </>
        );
      });
      return <List>{songsList}</List>;
    } else {
      return null;
    }
  };

  console.log('album data', data);
  return (
    <Screen>
      {loading ? (
        <div>loading</div>
      ) : (
        <ContentContainer>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={albumImageUrl} />
            <ProfileHeaderTitle>{data?.albumById?.album_title}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <ProfileContainer>
            <Button onClick={() => playerContext.replaceQueueWithSongs(data?.albumById?.album_songs)}>Play Now</Button>
            <SubTitle>Description</SubTitle>
            <div>{data?.albumById?.album_description}</div>
            <SubTitle>Songs</SubTitle>
            {data?.albumById?.album_songs ? renderSongs() : null}
          </ProfileContainer>
        </ContentContainer>
      )}
    </Screen>
  );
};
