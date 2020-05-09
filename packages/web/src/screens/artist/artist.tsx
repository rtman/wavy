import {
  AlbumWithSongs,
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderTitle,
  RowContainer,
  Spacing,
  Screen,
} from 'components';
import * as consts from 'consts';
import * as helpers from 'helpers';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import {
  Button,
  Container,
  List,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { UserContext } from 'context';
import { Album, Artist as ArtistType, QueryArtistByIdArgs } from 'types';

interface ArtistByIdData {
  artistById: ArtistType;
}

export const Artist = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState<ArtistType | undefined>(undefined);

  const [getArtistById, { loading: queryLoading }] = useLazyQuery<
    ArtistByIdData,
    QueryArtistByIdArgs
  >(consts.queries.ARTIST_BY_ID, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setArtist(data.artistById);
    },
  });

  const userContext = useContext(UserContext);
  const following = userContext?.user?.following ?? [];
  const artistImage = artist?.image ?? '';
  // const artistSongs = artist.songs ?? [];
  const artistAlbums = artist?.albums ?? [];
  const artistName = artist?.name ?? '';
  const artistDescription = artist?.description ?? '';
  const artistImageUrl = helpers.hooks.useGetStorageHttpUrl(artistImage);

  useEffect(() => {
    if (id) {
      getArtistById({
        variables: { id },
      });
    } else {
      console.log('artist.getArtistById - no Id');
    }
  }, [getArtistById, id]);

  const onClickToggleFollow = () => {
    if (id) {
      userContext?.updateFollowing(id);
    }
  };

  const getFollowTitle = () => {
    if (id) {
      return following?.find((f) => f.artist.id === id) ? 'Unfollow' : 'Follow';
    } else {
      return 'Loading';
    }
  };

  const renderAlbums = () => {
    if (artistAlbums) {
      const albumsList = artistAlbums.map((album: Album) => (
        <AlbumWithSongs key={album.id} album={album} />
      ));
      return <List>{albumsList}</List>;
    } else {
      return null;
    }
  };

  // const renderSongs = () => {
  //   if (artist.albums.length > 0) {
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

  console.log('artist', artist);

  return (
    <Screen>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <Container>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={artistImageUrl} />
            <ProfileHeaderTitle>{artistName}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <Spacing.section.Minor />
          <RowContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={onClickToggleFollow}
            >
              {getFollowTitle()}
            </Button>
          </RowContainer>
          <Spacing.section.Minor />
          <Typography variant="h1">Description</Typography>
          <Spacing.section.Minor />
          <Typography variant="body1">{artistDescription}</Typography>
          <Spacing.section.Minor />
          <Typography variant="h1">Albums</Typography>
          <Spacing.section.Minor />
          {renderAlbums()}
        </Container>
      )}
    </Screen>
  );
};
