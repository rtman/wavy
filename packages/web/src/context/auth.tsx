import 'firebase/auth';

import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { ApolloError } from 'apollo-boost';
import {
  Mutation,
  MutationCreateUserArgs,
  Query,
  QueryUserIdExistsArgs,
} from 'commonTypes';
import * as consts from 'consts';
import firebase from 'firebase';
import { GraphQLError } from 'graphql';
import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LoginForm } from 'screens/login';
import { SignUpForm } from 'screens/signup';

import { UserContext } from './user';

interface AuthContextProps {
  firebaseUser: firebase.User | undefined;
  firebaseInitialising: boolean;
  loading: boolean;
  error: firebase.auth.Error | ApolloError | GraphQLError | undefined;
  signup: (data: SignUpForm) => Promise<void>;
  login: (data: LoginForm) => Promise<void>;
  logout: () => Promise<void>;
  signedIn?: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider: FunctionComponent = (props) => {
  const userContext = useContext(UserContext);

  const [firebaseUser, firebaseInitialising] = useAuthState(firebase.auth());
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<
    firebase.auth.Error | ApolloError | GraphQLError | undefined
  >(undefined);
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [firstSession, setFirstSession] = useState<boolean>(true);
  const apolloClient = useApolloClient();

  const [createUser, { error: createUserError }] = useMutation<
    Pick<Mutation, 'createUser'>,
    MutationCreateUserArgs
  >(consts.mutations.user.CREATE_USER);

  const signup = async (data: SignUpForm) => {
    const { firstName, lastName, email, password } = data;
    setLoading(true);
    setError(undefined);

    try {
      const firebaseCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (firebaseCredential?.user) {
        const result = await createUser({
          variables: {
            input: {
              firstName,
              lastName,
              email,
              password,
              userId: firebaseCredential.user.uid,
            },
          },
        });

        if (result.errors) {
          setError(createUserError);
          logout();
          return;
        }

        setSignedIn(true);
      }
    } catch (error_) {
      setError(error_);
      if (firebaseUser) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (data: LoginForm) => {
    const { email, password } = data;
    try {
      setLoading(true);
      setError(undefined);

      const firebaseSignInResult = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (firebaseSignInResult.user?.uid && userContext) {
        const result = await userContext?.loadUserById(
          firebaseSignInResult.user?.uid
        );
        console.log('*debug* authContext -  loadUserById', result);

        setSignedIn(result.ok);
        if (!result.ok) {
          setError(result.error);
        }
      }
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

      await firebase.auth().signOut();

      setSignedIn(false);
    } catch (error_) {
      const logoutError = error_ as firebase.auth.Error;
      setError(logoutError);
    } finally {
      setLoading(false);
    }
  };

  // only runs on opening a session that is already has firebaseUser (already loggedin/signednup)
  useEffect(() => {
    const getUserData = async () => {
      if (firebaseUser && !signedIn && firstSession) {
        setFirstSession(false);
        setLoading(true);
        setError(undefined);

        console.log('*debug* authContext -  userContext', userContext);
        if (userContext) {
          const result = await userContext?.loadUserById(firebaseUser.uid);
          console.log('*debug* authContext -  loadUserById', result);

          setSignedIn(result.ok);

          if (!result.ok) {
            setError(result.error);
          }
        }

        setLoading(false);
      }
    };

    if (!firebaseInitialising && firebaseUser === null && !signedIn) {
      setLoading(false);
    }
    getUserData();
  }, [
    firebaseInitialising,
    firebaseUser,
    signedIn,
    apolloClient,
    firstSession,
    userContext,
  ]);

  return (
    <AuthContext.Provider
      value={{
        firebaseUser,
        firebaseInitialising,
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
