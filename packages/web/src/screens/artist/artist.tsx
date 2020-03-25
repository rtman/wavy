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
import { UserContext, PlayerContext } from 'context';

export const Artist = () => {
  const { id } = useParams();
  const { loading, error, data, networkStatus } = useQuery(consts.queries.ARTIST_BY_ID, { variables: { id: id?.toString() } });
  const history = useHistory();
  const userContext = useContext(UserContext);
  const artistImageUrl = helpers.hooks.useGetStorageHttpUrl(data?.artistById?.image);

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
    const albums = data?.artistById?.albums;
    console.log('artist renderAlbums - albums', albums);

    if (albums) {
      const albumsList = albums.map((album: Album) => <AlbumWithSongs key={album.id} album={album} />);
      return <List>{albumsList}</List>;
    } else {
      return null;
    }
  };

  // const renderSongs = () => {
  //   if (data?.artistById?.albums.length > 0) {
  //     const songs = data.artistById.songs;
  //     console.log('artist renderSongs - songs', songs);
  //     const songsList = songs.map((song: Song, index: number) => {
  //       return (
  //         <React.Fragment key={song.id}>
  //           <SongRow song={song} />
  //           {index < songs.length - 1 ? <Divider /> : null}
  //         </React.Fragment>
  //       );
  //     });

  //     return <List>{songsList}</List>;
  //   } else {
  //     return null;
  //   }
  // };

  console.log('data', data);
  return (
    <Screen>
      {loading ? (
        <div>loading</div>
      ) : (
        <ContentContainer>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={artistImageUrl} />
            <ProfileHeaderTitle>{data?.artistById?.name}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <ProfileContainer>
            <Button onClick={onClickToggleFollow}>{getFollowTitle()}</Button>
            <SubTitle>Description</SubTitle>
            <div>{data?.artistById?.description}</div>
            {/* <SubTitle>Songs</SubTitle>
            {renderSongs()} */}
            <SubTitle>Albums</SubTitle>
            {renderAlbums()}
          </ProfileContainer>
        </ContentContainer>
      )}
    </Screen>
  );
};
