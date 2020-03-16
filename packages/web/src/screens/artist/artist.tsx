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
import { gql } from 'apollo-boost';
import { Button, Divider, List } from '@material-ui/core';
import { UserContext, PlayerContext } from 'context';

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

export const Artist = () => {
  const { id } = useParams();
  const { loading, error, data, networkStatus } = useQuery(consts.queries.ARTIST_ALL, { variables: { id: id?.toString() } });
  const history = useHistory();
  const userContext = useContext(UserContext);
  const artistImageUrl = helpers.hooks.useGetStorageHttpUrl(data?.artistWithSongsAlbumsJoined?.image);

  console.log('error', error);

  const onClickToggleFollow = () => {
    if (id) {
      userContext?.updateFollowing(id);
    }
  };

  const getFollowTitle = () => {
    if (id) {
      return userContext?.user?.following.includes(id) ? 'Unfollow' : 'Follow';
    } else {
      return 'Loading';
    }
  };

  const renderAlbums = () => {
    const albums = data?.artistWithSongsAlbumsJoined?.albums;
    if (albums) {
      const albumsList = albums.map((album: Album) => <AlbumWithSongs key={album.id} album={album} />);
      return <List>{albumsList}</List>;
    } else {
      return null;
    }
  };

  const renderSongs = () => {
    if (data?.artistWithSongsAlbumsJoined?.albums.length > 0) {
      const albums = data.artistWithSongsAlbumsJoined.albums;
      const songsList = albums.map((album: Album) =>
        album.songs.map((song: Song, index: number) => {
          return (
            <>
              <SongRow key={song.id} song={song} />
              {index < album.songs.length - 1 ? <Divider /> : null}
            </>
          );
        })
      );
      return <List>{songsList}</List>;
    } else {
      return null;
    }
  };

  console.log('data', data);
  return (
    <Screen>
      {loading ? (
        <div>loading</div>
      ) : (
        <ContentContainer>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={artistImageUrl} />
            <ProfileHeaderTitle>{data?.artistWithSongsAlbumsJoined?.name}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <ProfileContainer>
            <Button onClick={onClickToggleFollow}>{getFollowTitle()}</Button>
            <SubTitle>Description</SubTitle>
            <div>{data?.artistWithSongsAlbumsJoined?.description}</div>
            <SubTitle>Songs</SubTitle>
            {renderSongs()}
            <SubTitle>Albums</SubTitle>
            {renderAlbums()}
          </ProfileContainer>
        </ContentContainer>
      )}
    </Screen>
  );
};
