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
import * as helpers from 'helpers';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Divider, List } from '@material-ui/core';

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

const ARTIST_ALL = gql`
  query ArtistAll($id: ID!) {
    artistAll(id: $id) {
      name
      image
      description
      albums {
        id
        title
        image
        songs {
          id
          title
          artist_name
          album_title
          artist_id
          album_id
          image
          url
          duration
        }
      }
    }
  }
`;

export const Artist = () => {
  const { id } = useParams();
  const { loading, error, data, networkStatus } = useQuery(ARTIST_ALL, { variables: { id: id?.toString() } });
  const history = useHistory();
  const artistImageUrl = helpers.hooks.useGetStorageHttpUrl(data?.artistAll?.image);

  console.log('error', error);

  const renderAlbums = () => {
    const albums = data?.artistAll?.albums;
    if (albums) {
      const albumsList = albums.map((album: Album) => <AlbumWithSongs key={album.id} album={album} />);
      return <List>{albumsList}</List>;
    } else {
      return null;
    }
  };

  const renderSongs = () => {
    if (data?.artistAll?.albums.length > 0) {
      const albums = data.artistAll.albums;
      const songsList = albums.map((album: Album) =>
        album.songs.map((song: Song, index: number) => {
          return (
            <>
              <SongRow key={song.song_id} song={song} />
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

  return (
    <Screen>
      {loading ? (
        <div>loading</div>
      ) : (
        <ContentContainer>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={artistImageUrl} />
            <ProfileHeaderTitle>{data?.artistAll?.name}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <ProfileContainer>
            <SubTitle>Description</SubTitle>
            <div>{data?.artistAll?.description}</div>
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
