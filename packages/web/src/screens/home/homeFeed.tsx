import { useQuery } from '@apollo/react-hooks';
import {
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import {
  Album,
  Artist,
  Label,
  Playlist,
  Query,
  Song,
  User,
  UserSubscriptionData,
  UserSubscriptionEntity,
  UserSubscriptionResult,
} from 'commonTypes';
import {
  AlbumCard,
  ArtistCard,
  Flex,
  LabelCard,
  PlaylistCard,
  SongCard,
  Spacing,
  UserCard,
} from 'components';
import * as consts from 'consts';
import React, { CSSProperties, memo, useCallback, useMemo } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';

const cardWidth = 150;

const useStyles = makeStyles(() => ({
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  arrowButtons: {
    fontSize: '2em',
  },
  list: {
    width: '100%',
  },
}));

interface BreakpointsConfig {
  xs: BreakpointConfigType;
  sm: BreakpointConfigType;
  md: BreakpointConfigType;
  lg: BreakpointConfigType;
}

interface RowBreakpointValues {
  itemSize: number;
}

interface ColumnBreakpointValues {
  itemSize: number;
  height: number;
}

interface BreakpointConfigType {
  row: RowBreakpointValues;
  column: ColumnBreakpointValues;
  itemsPerBlock: number;
}

interface GetCurrentBreakpointProps {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
}

const getBreakpoint = (props: GetCurrentBreakpointProps) => {
  const { xs, sm, md, lg } = props;

  if (lg) {
    return 'lg';
  }

  if (md) {
    return 'md';
  }
  if (sm) {
    return 'sm';
  }
  if (xs) {
    return 'xs';
  }

  return 'xs';
};

const FixedSizeListConfig: BreakpointsConfig = {
  xs: {
    row: { itemSize: 0.53 },
    column: { itemSize: 0.95 / 3, height: 0.42 },
    itemsPerBlock: 3,
  },
  sm: {
    row: { itemSize: 0.38 },
    column: { itemSize: 0.95 / 4, height: 0.34 },
    itemsPerBlock: 4,
  },
  md: {
    row: { itemSize: 0.29 },
    column: { itemSize: 0.95 / 5, height: 0.29 },
    itemsPerBlock: 5,
  },
  lg: {
    row: { itemSize: 0.23 },
    column: { itemSize: 0.95 / 6, height: 0.21 },
    itemsPerBlock: 6,
  },
};

export const HomeFeed = () => {
  const theme = useTheme();

  const xs = useMediaQuery(theme.breakpoints.up('xs'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));

  const currentBreakpoint = getBreakpoint({ xs, sm, md, lg });

  const {
    loading: userSubscriptionsLoading,
    // error: newArtistsError,
    data: userSubscriptionsData,
  } = useQuery<Pick<Query, 'getUserSubscriptions'>>(
    consts.queries.userSubscription.GET_USER_SUBSCRIPTIONS,
    {
      variables: { userId: 'H2qAdR0c81c3xGFk5PmgDXKAjis1' },
      // couldnt get this to work without no-cache, something to do with the union types in the query
      fetchPolicy: 'no-cache',
    }
  );

  return (
    <Container
      maxWidth={false}
      // height: '100%' required for autosizer
      style={{ height: '100%' }}
    >
      <Spacing.section.Minor />
      {userSubscriptionsLoading ? (
        <Grid
          container={true}
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item={true} xs={3}>
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              itemSize={
                width * FixedSizeListConfig[currentBreakpoint].row.itemSize
              }
              width={width}
              height={height}
              itemCount={
                userSubscriptionsData?.getUserSubscriptions.length ?? 0
              }
              itemData={userSubscriptionsData?.getUserSubscriptions}
              overscanCount={2}
            >
              {(props) => RenderSection({ ...props, width, xs, sm, md, lg })}
            </FixedSizeList>
          )}
        </AutoSizer>
      )}
    </Container>
  );
};

const RenderSection = ({
  data,
  index,
  style,
  width,
  xs,
  sm,
  md,
  lg,
}: {
  data: UserSubscriptionResult;
  index: number;
  style: CSSProperties;
  width: number;
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
}) => {
  // const listRef = React.createRef<FixedSizeList>();
  const outerRef = useMemo(() => React.createRef<HTMLDivElement>(), []);

  const classes = useStyles();
  // const scrollItemsPerBlock = 4;

  const currentBreakpoint = getBreakpoint({ xs, sm, md, lg });

  const itemSize = Math.round(
    FixedSizeListConfig[currentBreakpoint].column.itemSize * width
  );
  const scrollOffset = width % itemSize;

  console.log('scrollOffest', scrollOffset);
  console.log('width', width);

  const scrollTo = useCallback((position) => {
    outerRef.current?.scrollTo({
      left: position,
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const onClickLeft = useCallback(() => {
    let positionToScrollTo = 0;

    if (outerRef.current?.scrollLeft === 0) {
      positionToScrollTo = 0;
    } else {
      positionToScrollTo =
        (outerRef.current?.scrollLeft ?? 0) - width + scrollOffset;

      if (positionToScrollTo < 0) {
        positionToScrollTo = 0;
      }
    }

    scrollTo(positionToScrollTo);
  }, []);

  const onClickRight = useCallback(() => {
    let positionToScrollTo = 0;

    // Not sure why but scrollWidth is always one widths larger than max scrollLeft
    if (
      outerRef.current?.scrollLeft ===
      (outerRef.current?.scrollWidth ?? 0) - width
    ) {
      positionToScrollTo = 0;
    } else {
      positionToScrollTo =
        (outerRef.current?.scrollLeft ?? 0) + (width - scrollOffset);

      if (positionToScrollTo > (outerRef.current?.scrollWidth ?? 0)) {
        positionToScrollTo = outerRef.current?.scrollWidth ?? 0;
      }
    }

    scrollTo(positionToScrollTo);
  }, []);

  return (
    <div key={index} style={style}>
      <Typography variant="h5">{data[index].title}</Typography>
      <Spacing.section.Minor />
      <Flex alignItems="center">
        <IconButton onClick={onClickLeft}>
          <ArrowLeft className={classes.arrowButtons} />
        </IconButton>
        <FixedSizeList
          // ref={listRef}
          outerRef={outerRef}
          itemSize={itemSize}
          width={width}
          height={width * FixedSizeListConfig[currentBreakpoint].column.height}
          layout="horizontal"
          itemCount={data[index].data.length}
          itemData={data[index].data}
          style={{ overflow: 'hidden' }}
        >
          {renderCard}
        </FixedSizeList>
        <IconButton onClick={onClickRight}>
          <ArrowRight className={classes.arrowButtons} />
        </IconButton>
      </Flex>
      <Spacing.section.Minor />
    </div>
  );
};

const renderCard = memo(
  ({
    data,
    index,
    style,
  }: // width,
  {
    data: UserSubscriptionData;
    index: number;
    style: CSSProperties;
    // width: number;
  }) => {
    return (
      <div key={index} style={style}>
        {makeCard({
          data: data[index],
          // width
        })}
      </div>
    );
  }
);

const makeCard = ({ data }: { data: UserSubscriptionData }) => {
  switch (data.type) {
    case UserSubscriptionEntity.Album: {
      const albumData = data as Album;

      return (
        <AlbumCard
          // width={width * 0.5}
          // width={cardWidth}
          title={albumData.title}
          subtitle={albumData.artist.name}
          caption={albumData.label?.name ?? undefined}
          data={albumData}
          image={albumData.profileImageUrlThumb}
        />
      );
    }
    case UserSubscriptionEntity.Artist: {
      const artistData = data as Artist;

      return (
        <ArtistCard
          width={cardWidth}
          title={artistData.name}
          data={artistData}
          image={artistData.profileImageUrlThumb}
        />
      );
    }
    case UserSubscriptionEntity.Label: {
      const labelData = data as Label;

      return (
        <LabelCard
          width={cardWidth}
          title={labelData.name}
          data={labelData}
          image={labelData.profileImageUrlThumb}
        />
      );
    }
    case UserSubscriptionEntity.Playlist: {
      const playlistData = data as Playlist;

      return (
        <PlaylistCard
          width={cardWidth}
          title={playlistData.title}
          data={playlistData}
          image={playlistData.profileImageUrlThumb}
        />
      );
    }

    case UserSubscriptionEntity.Song: {
      const songData = data as Song;

      return (
        <SongCard
          width={cardWidth}
          title={songData.title}
          subtitle={songData.artist.name}
          caption={songData.label?.name ?? undefined}
          data={songData}
          image={songData.album.profileImageUrlThumb}
        />
      );
    }
    case UserSubscriptionEntity.User: {
      const userData = data as User;

      return <UserCard width={cardWidth} data={userData} />;
    }
  }
};
