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
import {
  AddBox,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Navigation,
} from '@material-ui/icons';
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
import React, {
  CSSProperties,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';

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
  xs: ColumnBreakpointValues;
  sm: ColumnBreakpointValues;
  md: ColumnBreakpointValues;
  lg: ColumnBreakpointValues;
  xl: ColumnBreakpointValues;
}
interface ColumnBreakpointValues {
  itemSize: number;
  height: number;
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
  xs: { itemSize: 0.9 / 2, height: 0.7 },
  sm: { itemSize: 0.95 / 3, height: 0.5 },
  md: { itemSize: 0.95 / 4, height: 0.4 },
  lg: { itemSize: 0.95 / 5, height: 0.3 },
  xl: { itemSize: 0.95 / 6, height: 0.2 },
};

export const HomeFeed = () => {
  const theme = useTheme();
  const history = useHistory();

  const xs = useMediaQuery(theme.breakpoints.up('xs'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));

  const currentBreakpoint = getBreakpoint({ xs, sm, md, lg, xl });

  const rowHeightOffset = 120;

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

  const onClickGoToNewSubscription = () =>
    history.push(consts.routes.NEW_SUBSCRIPTION);

  return (
    <>
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
        <>
          <Flex fullWidth={true} style={{ justifyContent: 'flex-end' }}>
            <IconButton
              disableFocusRipple={true}
              onClick={onClickGoToNewSubscription}
            >
              <AddBox />
            </IconButton>
          </Flex>
          <AutoSizer>
            {({ height, width }) => (
              <FixedSizeList
                itemSize={Math.round(
                  FixedSizeListConfig[currentBreakpoint].itemSize * width +
                    rowHeightOffset
                )}
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
        </>
      )}
    </>
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
  const theme = useTheme();
  const classes = useStyles();
  const [renderLeftArrow, setRenderLeftArrow] = useState<boolean>(false);

  const currentBreakpoint = getBreakpoint({ xs, sm, md, lg, xl });

  const itemSize = Math.round(
    FixedSizeListConfig[currentBreakpoint].itemSize * width
  );
  const scrollOffset = width % itemSize;

  const scrollTo = useCallback(
    (position) => {
      outerRef.current?.scrollTo({
        left: position,
        top: 0,
        behavior: 'smooth',
      });

      if (position > 0) {
        setRenderLeftArrow(true);
      }
      if (position === 0) {
        setRenderLeftArrow(false);
      }
    },
    [outerRef]
  );

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
      <Flex>
        <Spacing.section.Minor />
        <Typography variant="h5">{data[index].title}</Typography>
      </Flex>

      <Flex alignItems="center">
        {renderLeftArrow ? (
          <div
            style={{
              position: 'absolute',
              left: 0,
              zIndex: 999,
              backgroundColor: theme.palette.secondary.main,
              boxShadow: '2px 2px 15px 0 #f0f4ff',
            }}
          >
            <IconButton size="small" onClick={onClickLeft} edge="start">
              <KeyboardArrowLeft className={classes.arrowButtons} />
            </IconButton>
          </div>
        ) : null}

        <FixedSizeList
          outerRef={outerRef}
          itemSize={itemSize}
          width={width}
          height={width * FixedSizeListConfig[currentBreakpoint].height}
          layout="horizontal"
          itemCount={data[index].data.length}
          itemData={data[index].data}
          style={{ overflow: 'hidden' }}
        >
          {renderCard}
        </FixedSizeList>
        <div
          style={{
            position: 'absolute',
            right: 0,
            backgroundColor: theme.palette.secondary.main,
            boxShadow: '2px 2px 15px 0 #f0f4ff',
          }}
        >
          <IconButton size="small" onClick={onClickRight} edge="end">
            <KeyboardArrowRight className={classes.arrowButtons} />
          </IconButton>
        </div>
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
          title={albumData.title}
          subtitle={albumData.artist.name}
          caption={albumData.label?.name ?? undefined}
          data={albumData}
          image={albumData.profileImageUrlThumb ?? undefined}
        />
      );
    }
    case UserSubscriptionEntity.Artist: {
      const artistData = data as Artist;

      return (
        <ArtistCard
          title={artistData.name}
          data={artistData}
          image={artistData.profileImageUrlThumb ?? undefined}
        />
      );
    }
    case UserSubscriptionEntity.Label: {
      const labelData = data as Label;

      return (
        <LabelCard
          title={labelData.name}
          data={labelData}
          image={labelData.profileImageUrlThumb ?? undefined}
        />
      );
    }
    case UserSubscriptionEntity.Playlist: {
      const playlistData = data as Playlist;

      return (
        <PlaylistCard
          title={playlistData.title}
          data={playlistData}
          image={playlistData.profileImageUrlThumb ?? undefined}
        />
      );
    }

    case UserSubscriptionEntity.Song: {
      const songData = data as Song;

      return (
        <SongCard
          title={songData.title}
          subtitle={songData.artist.name}
          caption={songData.label?.name ?? undefined}
          data={songData}
          image={songData.album.profileImageUrlThumb ?? undefined}
        />
      );
    }
    case UserSubscriptionEntity.User: {
      const userData = data as User;

      return <UserCard data={userData} />;
    }
  }
};
