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
  xl: BreakpointConfigType;
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
}

interface GetCurrentBreakpointProps {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
}

const getBreakpoint = (props: GetCurrentBreakpointProps) => {
  const { xs, sm, md, lg, xl } = props;

  if (xl) {
    return 'xl';
  }

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
    row: { itemSize: 1 },
    column: { itemSize: 0.95 / 2, height: 0.7 },
  },
  sm: {
    row: { itemSize: 0.65 },
    column: { itemSize: 0.95 / 3, height: 0.5 },
  },
  md: {
    row: { itemSize: 0.5 },
    column: { itemSize: 0.95 / 4, height: 0.4 },
  },
  lg: {
    row: { itemSize: 0.37 },
    column: { itemSize: 0.95 / 5, height: 0.3 },
  },
  xl: {
    row: { itemSize: 0.27 },
    column: { itemSize: 0.95 / 6, height: 0.2 },
  },
};

export const HomeFeed = () => {
  const theme = useTheme();

  const xs = useMediaQuery(theme.breakpoints.up('xs'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));

  const currentBreakpoint = getBreakpoint({ xs, sm, md, lg, xl });

  console.log('*debug* currentBreakpoint', currentBreakpoint);

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
              {(props) =>
                RenderSection({ ...props, width, xs, sm, md, lg, xl })
              }
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
  xl,
}: {
  data: UserSubscriptionResult;
  index: number;
  style: CSSProperties;
  width: number;
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
}) => {
  // const listRef = React.createRef<FixedSizeList>();
  const outerRef = useMemo(() => React.createRef<HTMLDivElement>(), []);

  const classes = useStyles();
  // const scrollItemsPerBlock = 4;

  const currentBreakpoint = getBreakpoint({ xs, sm, md, lg, xl });

  const itemSize = Math.round(
    FixedSizeListConfig[currentBreakpoint].column.itemSize * width
  );
  const scrollOffset = width % itemSize;

  // console.log('scrollOffest', scrollOffset);
  // console.log('width', width);

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

    // console.log(
    //   '*debug* outerRef.current?.scrollLeft',
    //   outerRef.current?.scrollLeft
    // );
    // console.log(
    //   '*debug* outerRef.current?.scrollWidth',
    //   outerRef.current?.scrollWidth
    // );
    // console.log('*debug* width', width);
    // console.log(
    //   '*debug* (outerRef.current?.scrollWidth ?? 0) - width',
    //   (outerRef.current?.scrollWidth ?? 0) - width
    // );

    // Not sure why but scrollWidth is always one widths larger than max scrollLeft
    if (
      // scrollLeft is often a few decimals shy of scrollWidth, so rounding helps
      Math.round(outerRef.current?.scrollLeft ?? 0) ===
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
        <Flex
          style={{
            position: 'absolute',
            left: 0,
            zIndex: 999,
            backgroundColor: 'white',
            boxShadow: '2px 2px 15px 0 #f0f4ff',
          }}
        >
          <IconButton
            // style={{
            //   position: 'absolute',
            //   left: 0,
            //   zIndex: 999,
            //   color: 'white',
            // }}
            size="small"
            onClick={onClickLeft}
            edge="start"
          >
            <ArrowLeft className={classes.arrowButtons} />
          </IconButton>
        </Flex>
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
        <Flex
          style={{
            position: 'absolute',
            right: 0,
            backgroundColor: 'white',
            boxShadow: '2px 2px 15px 0 #f0f4ff',
          }}
        >
          <IconButton
            // style={{ position: 'absolute', right: 0, color: 'white' }}
            size="small"
            onClick={onClickRight}
            edge="end"
          >
            <ArrowRight className={classes.arrowButtons} />
          </IconButton>
        </Flex>
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
