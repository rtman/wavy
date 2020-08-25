import { useLazyQuery } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  Divider,
  List,
  Typography,
} from '@material-ui/core';
import {
  AlbumWithSongs,
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderTitle,
  RowContainer,
  SongRow,
  Spacing,
} from 'components';
import * as consts from 'consts';
import { PlayerContext, UserContext } from 'context';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Album,
  Artist as ArtistType,
  Query,
  QueryArtistByIdArgs,
  Song,
} from 'types';

export const Artist = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState<ArtistType | undefined>(undefined);

  const [getArtistById, { loading: queryLoading }] = useLazyQuery<
    Pick<Query, 'artistById'>,
    QueryArtistByIdArgs
  >(consts.queries.artist.ARTIST_BY_ID, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setArtist(data.artistById);
    },
  });

  const userContext = useContext(UserContext);
  const playerContext = useContext(PlayerContext);
  const following = userContext?.user?.followingArtists ?? [];
  const artistSongs = artist?.songs ?? [];
  const artistAlbums = artist?.albums ?? [];
  const artistName = artist?.name ?? '';
  const artistDescription = artist?.description ?? '';
  const artistImageUrl = artist?.imageUrl ?? '';

  useEffect(() => {
    if (id) {
      getArtistById({
        variables: { artistId: id },
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

  const renderTopSongs = () => {
    const artistSongsDesc = artistSongs
      .sort((a, b) => b.playCount - a.playCount)
      .slice(0, 5);

    if (
      artistSongsDesc.length > 0 &&
      artistSongsDesc.filter((song) => song.playCount > 0).length > 0
    ) {
      const songsList = artistSongsDesc.map((song: Song, index: number) => {
        return (
          <React.Fragment key={song.id}>
            <SongRow song={song} secondaryStyle={true} />
            {index < artistSongsDesc.length - 1 ? <Divider /> : null}
          </React.Fragment>
        );
      });
      return <List>{songsList}</List>;
    } else {
      return null;
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

  const onClickPlayNow = () => {
    if (artistSongs.length > 0) {
      playerContext?.replaceQueueWithSongs(artistSongs);
    }
  };

  return (
    <Container>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={artistImageUrl} />
            <ProfileHeaderTitle>{artistName}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <Spacing.section.Minor />
          <RowContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={onClickPlayNow}
            >
              Play Now
            </Button>
            <Spacing.BetweenComponents />
            <Button
              variant="outlined"
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
          <Typography variant="h1">Top Songs</Typography>
          <Spacing.section.Minor />
          {renderTopSongs()}
          <Spacing.section.Minor />
          <Typography variant="h1">Albums</Typography>
          <Spacing.section.Minor />
          {renderAlbums()}
          <Spacing.section.Minor />
        </>
      )}
    </Container>
  );
};
