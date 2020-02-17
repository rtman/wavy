import { ProfileHeaderImage, ProfileHeaderImageContainer, ProfileHeaderTitle, ContentContainer, Screen, SubTitle } from 'components';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { gql } from 'apollo-boost';
import firebase from 'firebase';
import { Avatar, Card, Divider, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { PlayerContext } from '../../App';

const ARTIST_ALL = gql`
  query ArtistAll($id: ID!) {
    artistAll(id: $id) {
      name
      song_title
      song_url
      album_title
      album_image
      description
      image
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
      if (data?.artistAll[0]?.image) {
        const url = await getHttpUrl(data.artistAll[0].image);
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
    if (data?.artistAll?.length > 0) {
      const albumsList = data.artistAll.map((d: any) => {
        return (
          <React.Fragment key={`${d.album_title}`}>
            <ListItem key={d.album_id} alignItems="flex-start" onClick={() => onClickAlbum(d)}>
              <ListItemAvatar>
                <Avatar variant="square" src={d.album_image} />
              </ListItemAvatar>
              <ListItemText primary={d.album_title} />
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

  const onClickSong = async (song: ArtistSongs) => {
    if (playerContext?.playAudio) {
      const songUrl = await getHttpUrl(song.song_url);
      const track: Song = {
        id: song.song_id,
        artist_name: song.name,
        artist_id: song.artist_id,
        title: song.song_title,
        album_title: song.album_title,
        album_id: song.album_id,
        image: song.image,
        url: songUrl,
        genres: ['test'],
        duration: 200,
        date: new Date()
      };
      console.log('track', track);
      playerContext.playAudio(track);
    }
  };

  const renderSongs = () => {
    if (data?.artistAll?.length > 0) {
      const songs = data.artistAll;
      const songsList = songs.map((song: ArtistSongs) => {
        return (
          <React.Fragment key={`${song.name} - ${song.song_title}`}>
            <ListItem key={song.song_id} alignItems="flex-start" onClick={() => onClickSong(song)}>
              <ListItemAvatar>
                <Avatar variant="square" src={song.image} />
              </ListItemAvatar>
              <ListItemText primary={song.song_title} secondary={song.name} />
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
              <ProfileHeaderImageContainer>
                <ProfileHeaderImage src={imageUrl} />
                <ProfileHeaderTitle>{data?.artistAll[0]?.name}</ProfileHeaderTitle>
              </ProfileHeaderImageContainer>
              <SubTitle>Description</SubTitle>
              <div>{data?.artistAll[0]?.description}</div>
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
