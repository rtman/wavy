import * as consts from 'consts';
import { AuthContextState } from 'context';
import { QueryUserByIdArgs, User, UserPlaylist } from 'types';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import React, {
  FunctionComponent,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface UserContextProps {
  user?: User;
  loadUser(id: string): void;
  updateFollowing(id: string): void;
  updateFavourites(id: string): void;
  addSongsToPlaylist(id: string, songIds: string[]): void;
  removeSongsFromPlaylist(id: string, songIds: string[]): void;
  playlists?: UserPlaylist[] | null;
  loading: boolean;
}

interface UserByIdData {
  userById: User;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider: FunctionComponent = (props) => {
  //   const [firebaseUser, initialising, error] = useAuthState(firebase.auth());
  const authContextState = useContext(AuthContextState);
  const [playlists, setPlaylists] = useState<UserPlaylist[] | null | undefined>(
    []
  );
  const [user, setUser] = useState<User | undefined>(undefined);
  const [getUserById, { loading: queryLoading }] = useLazyQuery<
    UserByIdData,
    QueryUserByIdArgs
  >(consts.queries.USER_BY_ID, {
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      console.log('getUserById data.userById', data.userById);
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

  const [submitUpdateFollowing] = useMutation(
    consts.mutations.UPDATE_FOLLOWING,
    {
      onCompleted: () => {
        if (user?.id) {
          loadUser(user?.id);
        }
      },
    }
  );
  const [submitUpdateFavourites] = useMutation(
    consts.mutations.UPDATE_FAVOURITES,
    {
      onCompleted: () => {
        if (user?.id) {
          loadUser(user?.id);
        }
      },
    }
  );
  const [submitAddSongsToPlaylists] = useMutation(
    consts.mutations.ADD_PLAYLIST_SONGS,
    {
      onCompleted: () => {
        if (user?.id) {
          loadUser(user?.id);
        }
      },
    }
  );

  const [submitRemoveSongsFromPlaylist] = useMutation(
    consts.mutations.REMOVE_PLAYLIST_SONGS,
    {
      onCompleted: () => {
        if (user?.id) {
          loadUser(user?.id);
        }
      },
    }
  );

  useEffect(() => {
    console.log(
      'authContextState?.firebaseUser?.uid',
      authContextState?.firebaseUser?.uid
    );
    if (authContextState?.firebaseUser?.uid) {
      loadUser(authContextState?.firebaseUser?.uid);
    }
  }, [authContextState, loadUser]);

  const updateFollowing = (artistId: string) => {
    submitUpdateFollowing({
      variables: { input: { userId: user?.id, artistId } },
    });
  };

  const updateFavourites = (songId: string) => {
    submitUpdateFavourites({
      variables: { input: { userId: user?.id, songId } },
    });
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
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
