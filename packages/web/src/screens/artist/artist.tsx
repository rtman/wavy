import {
  AlbumWithSongs,
  MoreByArtist,
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderTitle,
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
  GridList,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from 'context';
import { Album, Artist as ArtistType, QueryArtistByIdArgs } from 'types';

interface ArtistByIdData {
  artistById: ArtistType;
}

const useStyles = makeStyles(() => ({
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  }
}));

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
  const classes = useStyles();

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

  const renderMoreBy = () => {
    if (artistAlbums) {
      const albumsList = artistAlbums.map((album: Album) => (
        <MoreByArtist key={album.id} album={album} />
      ));
      return <GridList className={classes.gridList}>{albumsList}</GridList>;
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
          <Typography variant="body1">{artistDescription}</Typography>
          <Spacing.BetweenComponents />
          <Typography variant="h1">Albums</Typography>
          <Spacing.BetweenComponents />
          {renderAlbums()}
          <Spacing.BetweenComponents />
          <Typography variant="h1">More By {artistName}</Typography>
          <Spacing.BetweenComponents />
          {renderMoreBy()}
          <Spacing.BetweenComponents />
        </Container>
      )}
    </Screen>
  );
};
