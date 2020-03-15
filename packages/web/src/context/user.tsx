import React, { createContext, useEffect, useReducer, useState } from 'react';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import * as consts from 'consts';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase';

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
  const [getUserById, { data: userByIdData, loading: userByIdLoading, error: userByIdError }] = useLazyQuery(consts.queries.USER_BY_ID, {
    onCompleted: (data) => {
      console.log('getUserById data.userById', data.userById);
      setUser(data.userById);
    }
  });
  const [submitUpdateFollowing, { data: updateFollowingData, loading: updateFollowingLoading, error: updateFollowingError }] = useMutation(
    consts.mutations.UPDATE_USER_FOLLOWING,
    {
      onCompleted: (data) => {
        loadUser(data.id);
      }
    }
  );
  const [
    submitUpdateFavourites,
    { data: updateFavouritesData, loading: updateFavouritesLoading, error: updateFavouritesError }
  ] = useMutation(consts.mutations.UPDATE_USER_FAVOURITES, {
    onCompleted: (data) => {
      loadUser(data.id);
    }
  });
  const [submitUpdatePlaylists, { data: updatePlaylistsData, loading: updatePlaylistsLoading, error: updatePlaylistsError }] = useMutation(
    consts.mutations.UPDATE_USER_PLAYLISTS,
    {
      onCompleted: (data) => {
        loadUser(data.id);
      }
    }
  );
  const [user, setUser] = useState<User | undefined>(undefined);

  const loadUser = (id: string) => {
    getUserById({ variables: { id } });
  };

  useEffect(() => {
    // TODO: temp hardcode user id until its hooked up proper
    // Also not how it will be called, called in loadApp somehow
    loadUser('d97f1d32-647a-11ea-bc55-0242ac130003');
  }, []);

  const updateFollowing = (id: string) => {
    submitUpdateFollowing({ variables: { id } });
  };

  const updateFavourites = (id: string) => {
    submitUpdateFavourites({ variables: { id } });
  };

  const updatePlaylists = (id: string) => {
    submitUpdatePlaylists({ variables: { id } });
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
