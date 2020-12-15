import { useApolloClient, useLazyQuery, useMutation } from '@apollo/client';
import {
  ApiFail,
  ApiSuccess,
  Mutation,
  MutationAddPlaylistSongsArgs,
  MutationRemovePlaylistSongsArgs,
  MutationUpdateFavouritesArgs,
  MutationUpdateFollowingArgs,
  Query,
  QueryUserByIdArgs,
  UpdateFollowingArgs,
  User,
  UserPlaylist,
} from 'types';
import * as consts from 'consts';
import React, {
  createContext,
  FunctionComponent,
  useCallback,
  // useContext,
  // useEffect,
  useState,
} from 'react';
import * as services from 'services';

// import { AuthContext } from './auth';

interface UserContextProps {
  user?: User;
  loadUser(userId: string): void;
  loadUserById(userId: string): Promise<ApiSuccess<User> | ApiFail>;
  updateFollowing(args: Omit<UpdateFollowingArgs, 'userId'>): void;
  updateFavourites(songId: string): void;
  addSongsToPlaylist(playlistId: string, songIds: string[]): void;
  removeSongsFromPlaylist(playlistId: string, songIds: string[]): void;
  playlists?: UserPlaylist[] | null;
  loading: boolean;
  ipAddress?: string;
  geoLocation?: services.IpifyLocation;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider: FunctionComponent = (props) => {
  // const authContext = useContext(AuthContext);
  const apolloClient = useApolloClient();

  const [playlists, setPlaylists] = useState<UserPlaylist[] | null | undefined>(
    []
  );
  const [user, setUser] = useState<User | undefined>(undefined);
  const [ipAddress, setIpAddress] = useState<string | undefined>(undefined);
  const [geoLocation, setGeoLocation] = useState<
    services.IpifyLocation | undefined
  >(undefined);
  const [getUserById, { loading: queryLoading }] = useLazyQuery<
    Pick<Query, 'userById'>,
    QueryUserByIdArgs
  >(consts.queries.user.USER_BY_ID, {
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      console.log('*debug* getUserById data.userById', data.userById);
      setUser(data.userById);
      setPlaylists(data.userById.playlists);
    },
  });

  const loadUser = useCallback(
    (userId: string) => {
      getUserById({ variables: { userId } });
    },
    [getUserById]
  );

  const loadUserById = useCallback(
    async (userId: string) => {
      try {
        const result = await apolloClient.query<
          Pick<Query, 'userById'>,
          QueryUserByIdArgs
        >({
          query: consts.queries.user.USER_BY_ID,
          variables: { userId },
        });

        if (result.errors) {
          const fail: ApiFail = { ok: false, error: result.errors[0] };
          return fail;
        }
        const success: ApiSuccess<User> = {
          ok: true,
          data: result.data.userById,
        };
        setUser(success.data);
        return success;
      } catch (error_) {
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
      if (user?.id) {
        loadUser(user?.id);
      }
    },
  });
  const [submitUpdateFavourites] = useMutation<
    Pick<Mutation, 'updateFavourites'>,
    MutationUpdateFavouritesArgs
  >(consts.mutations.user.UPDATE_FAVOURITES, {
    onCompleted: () => {
      if (user?.id) {
        loadUser(user?.id);
      }
    },
  });
  const [submitAddSongsToPlaylists] = useMutation<
    Pick<Mutation, 'addPlaylistSongs'>,
    MutationAddPlaylistSongsArgs
  >(consts.mutations.playlist.ADD_PLAYLIST_SONGS, {
    onCompleted: () => {
      if (user?.id) {
        loadUser(user?.id);
      }
    },
  });

  const [submitRemoveSongsFromPlaylist] = useMutation<
    Pick<Mutation, 'removePlaylistSongs'>,
    MutationRemovePlaylistSongsArgs
  >(consts.mutations.playlist.REMOVE_PLAYLIST_SONGS, {
    onCompleted: () => {
      if (user?.id) {
        loadUser(user?.id);
      }
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
      submitUpdateFollowing({
        variables: { input: { userId: user?.id, id, type } },
      });
    }
  };

  const updateFavourites = (songId: string) => {
    if (user?.id) {
      submitUpdateFavourites({
        variables: { input: { userId: user?.id, songId } },
      });
    }
  };

  const addSongsToPlaylist = (playlistId: string, songIds: string[]) => {
    submitAddSongsToPlaylists({
      variables: { input: { playlistId, songIds } },
    });
  };

  const removeSongsFromPlaylist = (playlistId: string, songIds: string[]) => {
    submitRemoveSongsFromPlaylist({
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
        loading: queryLoading,
        ipAddress,
        geoLocation,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
