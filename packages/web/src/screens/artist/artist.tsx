import { ProfileHeaderImage, ProfileHeaderImageContainer, ProfileHeaderTitle, ContentContainer, Screen, SubTitle } from 'components';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import firebase from 'firebase';
import { Avatar, Card, Divider, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { PlayerContext } from '../../App';

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
        title
        image
        songs {
          title
          image
          url
          duration
        }
      }
    }
  }
`;

const getHttpUrl = async (googleStorageUri: string) => {
  const fileRef = firebase.storage().refFromURL(googleStorageUri);
  const url = await fileRef.getDownloadURL();
  return url;
};

export const Artist = () => {
  const { id } = useParams();
  const { loading, error, data, networkStatus } = useQuery(ARTIST_ALL, { variables: { id: id?.toString() } });
  const playerContext = useContext(PlayerContext);
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState<string>('');

  console.log('error', error);

  useEffect(() => {
    const runAysnc = async () => {
      if (data?.artistAll?.image) {
        const url = await getHttpUrl(data.artistAll.image);
        setImageUrl(url);
      }
    };
    runAysnc();
  }, [data]);

  const onClickAlbum = (album: Album) => {
    // if (playerContext?.playAudio) {
    //   playerContext.playAudio(song);
    // }
  };

  const renderAlbums = () => {
    const albums = data?.artistAll?.albums;
    if (albums) {
      const albumsList = albums.map((album: any) => {
        return (
          <React.Fragment key={`${album.title}`}>
            <ListItem key={album.id} alignItems="flex-start" onClick={() => onClickAlbum(album)}>
              <ListItemAvatar>
                <Avatar variant="square" src={album.image} />
              </ListItemAvatar>
              <ListItemText primary={album.title} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        );
      });
      return <List>{albumsList}</List>;
    } else {
      return null;
    }
  };

  const onClickSong = async (song: Song) => {
    if (playerContext?.playAudio) {
      console.log('onClickSong song', song);
      let songUrl = await getHttpUrl(song.url);
      const resolvedSong = {
        ...song,
        url: songUrl
      };
      console.log('onClickSong - resolvedSong', resolvedSong);
      playerContext.playAudio(resolvedSong);
    }
  };

  const renderSongs = () => {
    if (data?.artistAll?.albums.length > 0) {
      const albums = data.artistAll.albums;
      const songsList = albums.map((album: Album) =>
        album.songs.map((song: Song) => {
          const artistName = data.artistAll.name;
          return (
            <React.Fragment key={`${artistName} - ${song.title}`}>
              <ListItem key={song.id} alignItems="flex-start" onClick={() => onClickSong(song)}>
                <ListItemAvatar>
                  <Avatar variant="square" src={song.image} />
                </ListItemAvatar>
                <ListItemText primary={song.title} secondary={artistName} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
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
      <ContentContainer>
        <Card>
          {loading ? (
            <div>loading</div>
          ) : (
            <>
              <ProfileHeaderImageContainer>
                <ProfileHeaderImage src={imageUrl} />
                <ProfileHeaderTitle>{data?.artistAll?.name}</ProfileHeaderTitle>
              </ProfileHeaderImageContainer>
              <SubTitle>Description</SubTitle>
              <div>{data?.artistAll?.description}</div>
              <SubTitle>Songs</SubTitle>
              {renderSongs()}
              <SubTitle>Albums</SubTitle>
              {renderAlbums()}
            </>
          )}
        </Card>
      </ContentContainer>
    </Screen>
  );
};
