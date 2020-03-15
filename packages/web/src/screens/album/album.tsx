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

// const ARTIST_ALL = gql`
//   query ArtistAll($id: ID!) {
//     artistAll(id: $id) {
//       name
//       song_title
//       song_url
//       album_title
//       album_image
//       description
//       image
//     }
//   }
// `;

export const Album = () => {
  const { id } = useParams();
  const playerContext = useContext(PlayerContext);
  const { loading, error, data, networkStatus } = useQuery(consts.queries.ALBUM_ALL, { variables: { id: id?.toString() } });
  const history = useHistory();
  const albumImageUrl = helpers.hooks.useGetStorageHttpUrl(data?.albumWithSongsArtistsJoined?.image);

  const renderSongs = () => {
    if (data?.albumWithSongsArtistsJoined?.songs.length > 0) {
      const songsList = data.albumWithSongsArtistsJoined.songs.map((song: Song, index: number) => {
        return (
          <>
            <SongRow key={song.id} song={song} secondaryStyle={true} />
            {index < data.albumWithSongsArtistsJoined.songs.length - 1 ? <Divider /> : null}
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
            <ProfileHeaderImage src={albumImageUrl} />
            <ProfileHeaderTitle>{data?.albumWithSongsArtistsJoined?.title}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <ProfileContainer>
            <Button onClick={() => playerContext.replaceQueueWithSongs(data?.albumWithSongsArtistsJoined?.songs)}>Play Now</Button>
            <SubTitle>Description</SubTitle>
            <div>{data?.albumWithSongsArtistsJoined?.description}</div>
            <SubTitle>Songs</SubTitle>
            {renderSongs()}
          </ProfileContainer>
        </ContentContainer>
      )}
    </Screen>
  );
};
