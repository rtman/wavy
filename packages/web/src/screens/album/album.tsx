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
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { Button, Divider, List } from '@material-ui/core';
import { PlayerContext } from 'context';

export const Album = () => {
  const { id } = useParams();
  const playerContext = useContext(PlayerContext);
  const { loading, error, data, networkStatus } = useQuery(consts.queries.ALBUM_BY_ID, { variables: { id: id?.toString() } });
  const albumImageUrl = helpers.hooks.useGetStorageHttpUrl(data?.albumById?.image);

  const renderSongs = () => {
    if (data?.albumById?.songs.length > 0) {
      const songs = data?.albumById?.songs;
      const songsList = songs.map((song: Song, index: number) => {
        return (
          <React.Fragment key={song.id}>
            <SongRow song={song} secondaryStyle={true} />
            {index < songs.length - 1 ? <Divider /> : null}
          </React.Fragment>
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
            <ProfileHeaderImage src={albumImageUrl} />
            <ProfileHeaderTitle>{data?.albumById?.title}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <ProfileContainer>
            <Button onClick={() => playerContext.replaceQueueWithSongs(data?.albumById?.songs)}>Play Now</Button>
            <SubTitle>Description</SubTitle>
            <div>{data?.albumById?.description}</div>
            <SubTitle>Songs</SubTitle>
            {data?.albumById?.songs ? renderSongs() : null}
          </ProfileContainer>
        </ContentContainer>
      )}
    </Screen>
  );
};
