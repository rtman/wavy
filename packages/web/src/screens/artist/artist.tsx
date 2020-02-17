import { ArtistImage, ArtistImageContainer, ArtistTitle, ContentContainer, Screen, SubTitle } from 'components';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import firebase from 'firebase';
import { Avatar, Card, Divider, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { PlayerContext } from '../../App';

const ARTIST = gql`
  query Artist($id: ID!) {
    artist(id: $id) {
      name
      description
      image
      albums
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
  const { loading, error, data, networkStatus } = useQuery(ARTIST, { variables: { id: id?.toString() } });
  const playerContext = useContext(PlayerContext);
  const [imageUrl, setImageUrl] = useState<string>('');

  console.log('error', error);

  useEffect(() => {
    const runAysnc = async () => {
      if (data?.artist?.image) {
        const url = await getHttpUrl(data.artist.image);
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
    if (data?.artist?.albums?.length > 0) {
      const albums = data.artist.albums;
      const albumsList = albums.map((album: Album) => {
        return (
          <React.Fragment key={`${album.title}`}>
            <ListItem key={album.id} alignItems="flex-start" onClick={() => onClickAlbum(album)}>
              <ListItemAvatar>
                <Avatar variant="square" src={album.artwork} />
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

  const onClickSong = (song: Song) => {
    if (playerContext?.playAudio) {
      playerContext.playAudio(song);
    }
  };

  const renderSongs = () => {
    if (data?.artist?.songs?.length > 0) {
      const songs = data.artist.songs;
      const songsList = songs.map((song: Song) => {
        return (
          <React.Fragment key={`${song.artist_name} - ${song.title}`}>
            <ListItem key={song.id} alignItems="flex-start" onClick={() => onClickSong(song)}>
              <ListItemAvatar>
                <Avatar variant="square" src={song.artwork} />
              </ListItemAvatar>
              <ListItemText primary={song.title} secondary={song.artist_name} />
            </ListItem>
            <Divider variant="inset" component="li" />
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
      <ContentContainer>
        <Card>
          {loading ? (
            <div>loading</div>
          ) : (
            <>
              <ArtistImageContainer>
                <ArtistImage src={imageUrl} />
                <ArtistTitle>{data.artist.name}</ArtistTitle>
              </ArtistImageContainer>
              <SubTitle>Description</SubTitle>
              <div>{data.artist.description}</div>
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
