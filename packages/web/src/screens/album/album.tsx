import {
  AlbumWithSongs,
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderTitle,
  ContentContainer,
  Screen,
  SongRow,
  SubTitle
} from 'components';
import * as helpers from 'helpers';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Button, Card, List } from '@material-ui/core';
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

const ALBUM_ALL = gql`
  query AlbumAll($id: ID!) {
    albumAll(id: $id) {
      title
      image
      description
      songs {
        id
        title
        image
        url
        duration
      }
    }
  }
`;

export const Album = () => {
  const { id } = useParams();
  const playerContext = useContext(PlayerContext);
  const { loading, error, data, networkStatus } = useQuery(ALBUM_ALL, { variables: { id: id?.toString() } });
  const history = useHistory();
  const albumImageUrl = helpers.hooks.useGetStorageHttpUrl(data?.albumAll?.image);

  console.log('error', error);

  const renderSongs = () => {
    if (data?.albumAll?.songs.length > 0) {
      const songsList = data.albumAll.songs.map((song: Song) => <SongRow key={song.song_id} song={song} />);
      return <List>{songsList}</List>;
    } else {
      return null;
    }
  };

  return (
    <Screen>
      <Card>
        {loading ? (
          <div>loading</div>
        ) : (
          <>
            <ProfileHeaderImageContainer>
              <ProfileHeaderImage src={albumImageUrl} />
              <ProfileHeaderTitle>{data?.albumAll?.title}</ProfileHeaderTitle>
            </ProfileHeaderImageContainer>
            <Button onClick={() => playerContext.replaceQueueWithSongs(data?.albumAll?.songs)}>Play Now</Button>
            <SubTitle>Description</SubTitle>
            <div>
              <div>{data?.albumAll?.description}</div>
              <SubTitle>Songs</SubTitle>
              {renderSongs()}
            </div>
          </>
        )}
      </Card>
    </Screen>
  );
};
