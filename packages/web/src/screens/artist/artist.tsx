import {
  AlbumWithSongs,
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderTitle,
  Spacing,
  Screen,
} from 'components';
import * as consts from 'consts';
import * as helpers from 'helpers';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import {
  Button,
  Container,
  List,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { UserContext } from 'context';

export const Artist = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(consts.queries.ARTIST_BY_ID, {
    variables: { id },
  });
  const userContext = useContext(UserContext);
  const artistImageUrl = helpers.hooks.useGetStorageHttpUrl(
    data?.artistById?.image
  );

  const onClickToggleFollow = () => {
    if (id) {
      userContext?.updateFollowing(id);
    }
  };

  const getFollowTitle = () => {
    if (id) {
      // TODO: fix user type to have the correct type for following, UserArtistFollowing, remove any
      return userContext?.user?.following.find((f: any) => f.artist.id === id)
        ? 'Unfollow'
        : 'Follow';
    } else {
      return 'Loading';
    }
  };

  const renderAlbums = () => {
    const albums = data?.artistById?.albums;

    if (albums) {
      const albumsList = albums.map((album: Album) => (
        <AlbumWithSongs key={album.id} album={album} />
      ));
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

  console.log('artist - data', data);

  return (
    <Screen>
      {loading ? (
        <CircularProgress />
      ) : (
        <Container>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={artistImageUrl} />
            <ProfileHeaderTitle>{data?.artistById?.name}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <Button
            variant="contained"
            color="primary"
            onClick={onClickToggleFollow}
          >
            {getFollowTitle()}
          </Button>
          <Spacing.BetweenComponents />
          <Typography variant="h1">Description</Typography>
          <Spacing.BetweenComponents />
          <Typography variant="body1">
            {data?.artistById?.description}
          </Typography>
          <Spacing.BetweenComponents />
          <Typography variant="h1">Albums</Typography>
          <Spacing.BetweenComponents />
          {renderAlbums()}
        </Container>
      )}
    </Screen>
  );
};
