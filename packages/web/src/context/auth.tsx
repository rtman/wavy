import 'firebase/auth';

import firebase from 'firebase';
import React, { createContext, FunctionComponent } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

interface AuthContextStateProps {
  firebaseUser: firebase.User | undefined;
  initialising: boolean;
  error: firebase.auth.Error | undefined;
  logout(): void;
}

export const AuthContextState = createContext<
  AuthContextStateProps | undefined
>(undefined);

export const AuthProvider: FunctionComponent = (props) => {
  const [firebaseUser, initialising, error] = useAuthState(firebase.auth());

  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <AuthContextState.Provider
      value={{
        firebaseUser,
        initialising,
        error,
        logout,
      }}
    >
      {props.children}
    </AuthContextState.Provider>
  );
};
