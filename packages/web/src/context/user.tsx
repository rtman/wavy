import React, {
  createContext,
  useEffect,
  useCallback,
  useContext,
  useState,
} from 'react';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { AuthContextState } from 'context';
import * as consts from 'consts';

interface UserContextProps {
  user: User | undefined;
  loadUser(id: string): void;
  updateFollowing(id: string): void;
  updateFavourites(id: string): void;
  addSongsToPlaylist(id: string, songIds: string[]): void;
  removeSongsFromPlaylist(id: string, songIds: string[]): void;
  playlists: Playlist[];
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider = ({ children }: any) => {
  //   const [firebaseUser, initialising, error] = useAuthState(firebase.auth());
  const authContextState = useContext(AuthContextState);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [getUserById] = useLazyQuery(consts.queries.USER_BY_ID, {
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      console.log('getUserById data.userById', data.userById);
      setUser(data.userById);
      setPlaylists(data.userById.playlists);
    },
  });
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
  const [user, setUser] = useState<User | undefined>(undefined);

  const loadUser = useCallback(
    (id: string) => {
      getUserById({ variables: { id } });
    },
    [getUserById]
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
      variables: { input: { userId: playlistId, songIds } },
    });
  };

  const removeSongsFromPlaylist = (playlistId: string, songIds: string[]) => {
    submitRemoveSongsFromPlaylist({
      variables: { input: { userId: playlistId, songIds } },
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
