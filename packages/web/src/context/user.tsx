import { useApolloClient, useMutation } from '@apollo/client';
import * as consts from 'consts';
import { useSnackbar } from 'notistack';
import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useState,
} from 'react';
import * as services from 'services';
import * as tasks from 'tasks';
import {
  ApiFail,
  ApiSuccess,
  Mutation,
  MutationAddPlaylistSongsArgs,
  MutationRemovePlaylistSongsArgs,
  MutationUpdateFavouritesArgs,
  MutationUpdateFollowingArgs,
  Playlist,
  UpdateFollowingArgs,
  User,
} from 'types';

interface UserContextProps {
  user?: User;
  loadUser(): void;
  loadUserById(userId: string): Promise<ApiSuccess<User> | ApiFail>;
  updateFollowing(args: Omit<UpdateFollowingArgs, 'userId'>): void;
  updateFavourites(songId: string): void;
  addSongsToPlaylist(playlistId: string, songIds: string[]): void;
  removeSongsFromPlaylist(playlistId: string, songIds: string[]): void;
  playlists?: Playlist[] | null;
  ipAddress?: string;
  geoLocation?: services.IpifyLocation;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider: FunctionComponent = (props) => {
  // const authContext = useContext(AuthContext);
  const apolloClient = useApolloClient();
  const { enqueueSnackbar } = useSnackbar();

  const [playlists, setPlaylists] = useState<Playlist[] | null | undefined>([]);
  const [user, setUser] = useState<User | undefined>(undefined);
  // TODO: re enable when ip address credits are reinstated
  // const [ipAddress, setIpAddress] = useState<string | undefined>(undefined);
  // const [geoLocation, setGeoLocation] = useState<
  //   services.IpifyLocation | undefined
  // >(undefined);

  const loadUser = useCallback(async () => {
    try {
      if (user && user.id) {
        const userResult = await tasks.getUserById(
          { userId: user.id },
          apolloClient
        );

        const playlistsResult = await tasks.getPlaylistsByUserId(
          { userId: user.id },
          apolloClient
        );

        console.log('*debug* loadUser userResult', userResult);
        if (userResult.ok && playlistsResult.ok) {
          setUser(userResult.data);
          setPlaylists(playlistsResult.data);
        }
      }
    } catch (error_) {
      // TODO: Log error
    }
  }, [user, apolloClient]);

  const loadUserById = useCallback(
    async (userId: string) => {
      try {
        const userResult = await tasks.getUserById({ userId }, apolloClient);

        const playlistsResult = await tasks.getPlaylistsByUserId(
          { userId },
          apolloClient
        );

        console.log('*debug* loadUser userResult', userResult);
        if (userResult.ok && playlistsResult.ok) {
          setUser(userResult.data);
          setPlaylists(playlistsResult.data);
        }

        return userResult;
      } catch (error_) {
        // FIXME: no unsafe assigment
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        // FIXME: disabled eslint
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const fail: ApiFail = { ok: false, error: error_ };

        return fail;
      }
    },
    [apolloClient]
  );

  const [submitUpdateFollowing] = useMutation<
    Pick<Mutation, 'updateFollowing'>,
    MutationUpdateFollowingArgs
  >(consts.mutations.user.UPDATE_FOLLOWING, {
    onCompleted: () => {
      void loadUser();
      enqueueSnackbar('Follows updated', {
        variant: 'success',
        autoHideDuration: 4000,
      });
    },
  });

  const [submitUpdateFavourites] = useMutation<
    Pick<Mutation, 'updateFavourites'>,
    MutationUpdateFavouritesArgs
  >(consts.mutations.user.UPDATE_FAVOURITES, {
    onCompleted: () => {
      void loadUser();
      enqueueSnackbar('Favourites updated', {
        variant: 'success',
        autoHideDuration: 4000,
      });
    },
  });
  const [submitAddSongsToPlaylists] = useMutation<
    Pick<Mutation, 'addPlaylistSongs'>,
    MutationAddPlaylistSongsArgs
  >(consts.mutations.playlist.ADD_PLAYLIST_SONGS, {
    onCompleted: () => {
      void loadUser();
      enqueueSnackbar('Playlist updated', {
        variant: 'success',
        autoHideDuration: 4000,
      });
    },
  });

  const [submitRemoveSongsFromPlaylist] = useMutation<
    Pick<Mutation, 'removePlaylistSongs'>,
    MutationRemovePlaylistSongsArgs
  >(consts.mutations.playlist.REMOVE_PLAYLIST_SONGS, {
    onCompleted: () => {
      void loadUser();
      enqueueSnackbar('Playlist updated', {
        variant: 'success',
        autoHideDuration: 4000,
      });
    },
  });

  // useEffect(() => {
  //   console.log(
  //     '*debug* authContext?.firebaseUser?.uid',
  //     authContext?.firebaseUser?.uid
  //   );
  //   if (authContext?.firebaseUser?.uid) {
  //     loadUser(authContext?.firebaseUser?.uid);
  //   }
  // }, [authContext, loadUser]);

  const updateFollowing = ({
    id,
    type,
  }: {
    id: string;
    type: UpdateFollowingArgs['type'];
  }) => {
    if (user?.id) {
      void submitUpdateFollowing({
        variables: { input: { userId: user?.id, id, type } },
      });
    }
  };

  const updateFavourites = (songId: string) => {
    if (user?.id) {
      void submitUpdateFavourites({
        variables: { input: { userId: user?.id, songId } },
      });
    }
  };

  const addSongsToPlaylist = (playlistId: string, songIds: string[]) => {
    void submitAddSongsToPlaylists({
      variables: { input: { playlistId, songIds } },
    });
  };

  const removeSongsFromPlaylist = (playlistId: string, songIds: string[]) => {
    void submitRemoveSongsFromPlaylist({
      variables: { input: { playlistId, songIds } },
    });
  };

  // TODO: re enable when credits are re instated
  // useEffect(() => {
  //   const getClientGeoLocation = async () => {
  //     const getIpAddressResponse = await services.getIpAddress();
  //     console.log('*debug* getIpAddressResponse', getIpAddressResponse);

  //     if (getIpAddressResponse.ok && getIpAddressResponse.data) {
  //       setIpAddress(getIpAddressResponse.data.ip);
  //       const getGeoLocationresponse = await services.getGeoLocation(
  //         getIpAddressResponse.data.ip
  //       );
  //       console.log('*debug* getGeoLocationresponse', getGeoLocationresponse);

  //       if (getGeoLocationresponse.ok && getGeoLocationresponse.data) {
  //         setGeoLocation(getGeoLocationresponse.data);
  //       }
  //     }
  //   };

  //   getClientGeoLocation();
  // }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        loadUser,
        loadUserById,
        updateFollowing,
        updateFavourites,
        addSongsToPlaylist,
        removeSongsFromPlaylist,
        playlists,
        // ipAddress,
        // geoLocation,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
