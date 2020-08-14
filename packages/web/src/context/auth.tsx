import 'firebase/auth';

import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { ApolloError } from 'apollo-boost';
import * as consts from 'consts';
import firebase from 'firebase';
import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LoginForm } from 'screens/login';
import { SignUpForm } from 'screens/signup';
import { QueryUserIdExistsArgs, User } from 'types';

interface AuthContextProps {
  firebaseUser: firebase.User | undefined;
  initialising: boolean;
  loading: boolean;
  error: firebase.auth.Error | ApolloError | undefined;
  signup: (data: SignUpForm) => Promise<void>;
  login: (data: LoginForm) => Promise<void>;
  logout: () => Promise<void>;
  signedIn?: boolean;
}

interface UserIdExistsData {
  userIdExists: User;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider: FunctionComponent = (props) => {
  const [firebaseUser, initialising] = useAuthState(firebase.auth());
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<
    firebase.auth.Error | ApolloError | undefined
  >(undefined);
  const [signedIn, setSignedIn] = useState<boolean>(false);

  const [createUser] = useMutation(consts.mutations.CREATE_USER, {
    onError: (e) => setError(e),
    // onCompleted: () => setSign,
  });

  const [userIdExists, { loading: userIdExistsLoading }] = useLazyQuery<
    UserIdExistsData,
    QueryUserIdExistsArgs
  >(consts.queries.USER_ID_EXISTS, {
    fetchPolicy: 'no-cache',
    onCompleted: () => setSignedIn(true),
  });

  useEffect(() => {
    if (firebaseUser) {
      userIdExists({ variables: { id: firebaseUser.uid } });
    }
  }, [firebaseUser, userIdExists]);

  const signup = async (data: SignUpForm) => {
    const { firstName, lastName, email, password } = data;
    setLoading(true);
    setError(undefined);

    try {
      const firebaseCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (firebaseCredential?.user) {
        await createUser({
          variables: {
            input: {
              firstName,
              lastName,
              email,
              password,
              id: firebaseCredential.user.uid,
            },
          },
        });

        if (error) {
          logout();
        }
      }
    } catch (error_) {
      const signupError = error_ as firebase.auth.Error | ApolloError;
      setError(signupError);
    } finally {
      setLoading(false);
    }
  };

  const login = async (data: LoginForm) => {
    const { email, password } = data;
    try {
      setLoading(true);
      setError(undefined);

      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error_) {
      const loginError = error_ as firebase.auth.Error;
      setError(loginError);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      setError(undefined);

      await firebase.auth().signOut();
    } catch (error_) {
      const signupError = error_ as firebase.auth.Error;
      setError(signupError);
    } finally {
      setLoading(false);
    }
  };

  console.log('*debug* error', error);

  return (
    <AuthContext.Provider
      value={{
        firebaseUser,
        initialising,
        loading,
        error,
        signup,
        login,
        logout,
        signedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
