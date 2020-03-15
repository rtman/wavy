import { ArtistRow, ContentContainer, Screen, SubTitle } from 'components';
import * as consts from 'consts';
import React, { useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { CircularProgress, Divider, List } from '@material-ui/core';
import { UserContext } from 'context';

export const Following = () => {
  const userContext = useContext(UserContext);
  const [getArtists, { loading: queryLoading, data: queryData, error: queryError }] = useLazyQuery(consts.queries.ARTISTS_BY_ID, {
    // fetchPolicy: 'no-cache'
  });

  useEffect(() => {
    if (userContext?.user?.following) {
      getArtists({ variables: { ids: userContext?.user?.following } });
    }
  }, [userContext?.user?.following]);

  const renderArtists = () => {
    if (queryData?.artistsById?.length > 0) {
      const artistList = queryData.artistsById.map((artist: Artist, index: number) => {
        return (
          <>
            <ArtistRow key={artist.id} artist={artist} />
            {index < queryData.artistsById.length - 1 ? <Divider /> : null}
          </>
        );
      });
      return <List>{artistList}</List>;
    } else {
      return null;
    }
  };

  return (
    <Screen>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <ContentContainer>
          <SubTitle>Following</SubTitle>
          {renderArtists()}
        </ContentContainer>
      )}
    </Screen>
  );
};
