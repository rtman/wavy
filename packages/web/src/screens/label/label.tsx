import {
  ProfileContainer,
  ProfileHeaderImage,
  ProfileHeaderImageContainer,
  ProfileHeaderTitle,
  ContentContainer,
  Screen,
  // SongRow,
  RowContainer,
} from 'components';
import * as consts from 'consts';
import React, {
  // Fragment,
  // useContext,
  useEffect,
  // useState
} from 'react';
import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  // Divider,
  // List,
  Typography,
} from '@material-ui/core';
// import { PlayerContext } from 'context';
import * as helpers from 'helpers';
import { Label as LabelType } from 'types';

interface LabelByIdData {
  labelById: LabelType;
}

interface LabelByIdVars {
  id: string;
}

export const Label = () => {
  const { id } = useParams();
  // const playerContext = useContext(PlayerContext);
  const [getLabel, { loading: queryLoading, data: queryData }] = useLazyQuery<
    LabelByIdData,
    LabelByIdVars
  >(consts.queries.LABEL_BY_ID, {
    fetchPolicy: 'network-only',
  });

  // const labelSongs = queryData?.labelById?.songs ?? [];
  const labelImage = queryData?.labelById?.image ?? '';
  const labelName = queryData?.labelById?.name ?? '';
  const labelDescription = queryData?.labelById?.description ?? '';
  const labelImageUrl = helpers.hooks.useGetStorageHttpUrl(labelImage);

  useEffect(() => {
    if (id) {
      getLabel({ variables: { id } });
    }
  }, [getLabel, id]);

  // const renderSongs = () => {
  //   if (labelSongs.length > 0) {
  //     const songsList = labelSongs.map(
  //       (songInstance: SongLabel, index: number) => {
  //         const song = songInstance.song;
  //         return (
  //           <Fragment key={song.id}>
  //             <SongRow song={song} />
  //             {index < labelSongs.length - 1 ? <Divider /> : null}
  //           </Fragment>
  //         );
  //       }
  //     );
  //     return <List>{songsList}</List>;
  //   } else {
  //     return null;
  //   }
  // };

  // const onClickPlayNow = () => {
  //   if (labelSongs.length > 0) {
  //     const songs = labelSongs.map(
  //       (songInstance: SongLabel) => songInstance.song
  //     );

  //     playerContext.replaceQueueWithSongs(songs);
  //   }
  // };

  console.log('data', queryData);
  return (
    <Screen>
      {queryLoading ? (
        <CircularProgress />
      ) : (
        <ContentContainer>
          <ProfileHeaderImageContainer>
            <ProfileHeaderImage src={labelImageUrl} />
            <ProfileHeaderTitle>{labelName}</ProfileHeaderTitle>
          </ProfileHeaderImageContainer>
          <ProfileContainer>
            <RowContainer>
              <Button
                variant="contained"
                color="primary"
                // onClick={onClickPlayNow}
              >
                Play Now
              </Button>
            </RowContainer>
            <Typography variant="h1">Description</Typography>
            <Typography variant="body1">{labelDescription}</Typography>
            <Typography variant="h1">Songs</Typography>
            {/* {renderSongs()} */}
          </ProfileContainer>
        </ContentContainer>
      )}
    </Screen>
  );
};
