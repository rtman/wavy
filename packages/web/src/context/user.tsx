import React, { createContext, useEffect, useContext, useState } from 'react';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { AuthContextState } from 'context';
import * as consts from 'consts';

interface UserContextProps {
  user: User | undefined;
  loadUser(id: string): void;
  updateFollowing(id: string): void;
  updateFavourites(id: string): void;
  updatePlaylists(id: string): void;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

// function userReducer(state, action) {
//   switch (action.type) {
//     case 'addFollowing': {
//       return { user: state.count + 1 };
//     }
//     case 'removeFollowing': {
//       return { count: state.count - 1 };
//     }
//     case 'addPlaylist': {
//       return { count: state.count + 1 };
//     }
//     case 'removePlaylist': {
//       return { count: state.count - 1 };
//     }
//     case 'addFavourite': {
//       return { count: state.count + 1 };
//     }
//     case 'removeFavourite': {
//       return { count: state.count - 1 };
//     }
//     case 'initUserState': {
//       return;
//     }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`);
//     }
//   }
// }

// function useUserState() {
//   const context = React.useContext(UserStateContext);
//   if (context === undefined) {
//     throw new Error('useCountState must be used within a UserProvider');
//   }
//   return context;
// }

// function useUserDispatch() {
//   const context = React.useContext(UserDispatchContext);
//   if (context === undefined) {
//     throw new Error('useCountState must be used within a UserProvider');
//   }
//   return context;
// }

// export const useLoadUser = () => {
//   const [getUserData, { data: queryData, loading: queryLoading, error: errorLoading }] = useLazyQuery(consts.queries.USER_BY_ID, {
//     onCompleted: (data) => {
//       const dispatch = useUserDispatch();
//       dispatch({ type: 'initUser', payload: data });
//     }
//   });
// };

export const UserProvider = ({ children }: any) => {
  //   const [firebaseUser, initialising, error] = useAuthState(firebase.auth());
  const authContextState = useContext(AuthContextState);
  const [getUserById, { data: userByIdData, loading: userByIdLoading, error: userByIdError }] = useLazyQuery(consts.queries.USER_BY_ID, {
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      console.log('getUserById data.userById', data.userById);
      setUser(data.userById);
    }
  });
  const [submitUpdateFollowing, { data: updateFollowingData, loading: updateFollowingLoading, error: updateFollowingError }] = useMutation(
    consts.mutations.UPDATE_FOLLOWING,
    {
      onCompleted: (data) => {
        if (user?.id) {
          loadUser(user?.id);
        }
      }
    }
  );
  const [
    submitUpdateFavourites,
    { data: updateFavouritesData, loading: updateFavouritesLoading, error: updateFavouritesError }
  ] = useMutation(consts.mutations.UPDATE_FAVOURITES, {
    onCompleted: (data) => {
      if (user?.id) {
        loadUser(user?.id);
      }
    }
  });
  const [submitUpdatePlaylists, { data: updatePlaylistsData, loading: updatePlaylistsLoading, error: updatePlaylistsError }] = useMutation(
    consts.mutations.UPDATE_PLAYLISTS,
    {
      onCompleted: (data) => {
        if (user?.id) {
          loadUser(user?.id);
        }
      }
    }
  );
  const [user, setUser] = useState<User | undefined>(undefined);

  const loadUser = (id: string) => {
    getUserById({ variables: { id } });
  };

  useEffect(() => {
    console.log('authContextState?.firebaseUser?.uid', authContextState?.firebaseUser?.uid);
    if (authContextState?.firebaseUser?.uid) {
      loadUser(authContextState?.firebaseUser?.uid);
    }
  }, []);

  const updateFollowing = (artistId: string) => {
    submitUpdateFollowing({ variables: { id: user?.id, artistId } });
  };

  const updateFavourites = (songId: string) => {
    submitUpdateFavourites({ variables: { id: user?.id, songId } });
  };

  const updatePlaylists = (playlistId: string) => {
    submitUpdatePlaylists({ variables: { id: user?.id, playlistId } });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loadUser,
        updateFollowing,
        updateFavourites,
        updatePlaylists
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
