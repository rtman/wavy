import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import * as consts from 'consts';
import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import * as services from 'services';
import {
  Mutation,
  MutationAddPlaylistSongsArgs,
  MutationRemovePlaylistSongsArgs,
  MutationUpdateFavouritesArgs,
  MutationUpdateFollowingArgs,
  Query,
  QueryUserByIdArgs,
  User,
  UserPlaylist,
} from 'types';

import { AuthContext } from './auth';

interface UserContextProps {
  user?: User;
  loadUser(id: string): void;
  updateFollowing(id: string): void;
  updateFavourites(id: string): void;
  addSongsToPlaylist(id: string, songIds: string[]): void;
  removeSongsFromPlaylist(id: string, songIds: string[]): void;
  playlists?: UserPlaylist[] | null;
  loading: boolean;
  ipAddress?: string;
  geoLocation?: services.IpifyLocation;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider: FunctionComponent = (props) => {
  const authContext = useContext(AuthContext);
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
  >(consts.queries.USER_BY_ID, {
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      console.log('*debug* getUserById data.userById', data.userById);
      setUser(data.userById);
      setPlaylists(data.userById.playlists);
    },
  });

  const loadUser = useCallback(
    (id: string) => {
      getUserById({ variables: { id } });
    },
    [getUserById]
  );

  const [submitUpdateFollowing] = useMutation<
    Pick<Mutation, 'updateFollowing'>,
    MutationUpdateFollowingArgs
  >(consts.mutations.UPDATE_FOLLOWING, {
    onCompleted: () => {
      if (user?.id) {
        loadUser(user?.id);
      }
    },
  });
  const [submitUpdateFavourites] = useMutation<
    Pick<Mutation, 'updateFavourites'>,
    MutationUpdateFavouritesArgs
  >(consts.mutations.UPDATE_FAVOURITES, {
    onCompleted: () => {
      if (user?.id) {
        loadUser(user?.id);
      }
    },
  });
  const [submitAddSongsToPlaylists] = useMutation<
    Pick<Mutation, 'addPlaylistSongs'>,
    MutationAddPlaylistSongsArgs
  >(consts.mutations.ADD_PLAYLIST_SONGS, {
    onCompleted: () => {
      if (user?.id) {
        loadUser(user?.id);
      }
    },
  });

  const [submitRemoveSongsFromPlaylist] = useMutation<
    Pick<Mutation, 'removePlaylistSongs'>,
    MutationRemovePlaylistSongsArgs
  >(consts.mutations.REMOVE_PLAYLIST_SONGS, {
    onCompleted: () => {
      if (user?.id) {
        loadUser(user?.id);
      }
    },
  });

  useEffect(() => {
    console.log(
      'authContext?.firebaseUser?.uid',
      authContext?.firebaseUser?.uid
    );
    if (authContext?.firebaseUser?.uid) {
      loadUser(authContext?.firebaseUser?.uid);
    }
  }, [authContext, loadUser]);

  const updateFollowing = (artistId: string) => {
    if (user?.id) {
      submitUpdateFollowing({
        variables: { input: { userId: user?.id, artistId } },
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
      variables: { input: { id: playlistId, songIds } },
    });
  };

  const removeSongsFromPlaylist = (playlistId: string, songIds: string[]) => {
    submitRemoveSongsFromPlaylist({
      variables: { input: { id: playlistId, songIds } },
    });
  };

  useEffect(() => {
    const getClientGeoLocation = async () => {
      const getIpAddressResponse = await services.getIpAddress();
      console.log('*debug* getIpAddressResponse', getIpAddressResponse);

      if (getIpAddressResponse.ok && getIpAddressResponse.data) {
        setIpAddress(getIpAddressResponse.data.ip);
        const getGeoLocationresponse = await services.getGeoLocation(
          getIpAddressResponse.data.ip
        );
        console.log('*debug* getGeoLocationresponse', getGeoLocationresponse);

        if (getGeoLocationresponse.ok && getGeoLocationresponse.data) {
          setGeoLocation(getGeoLocationresponse.data);
        }
      }
    };

    getClientGeoLocation();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        loadUser,
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
