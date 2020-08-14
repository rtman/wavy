import 'firebase/auth';

import {
  useApolloClient,
  // useLazyQuery,
  useMutation,
} from '@apollo/react-hooks';
import { ApolloError } from 'apollo-boost';
import * as consts from 'consts';
import firebase from 'firebase';
import { GraphQLError } from 'graphql';
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
  error: firebase.auth.Error | ApolloError | GraphQLError | undefined;
  signup: (data: SignUpForm) => Promise<void>;
  login: (data: LoginForm) => Promise<void>;
  logout: () => Promise<void>;
  signedIn?: boolean;
}

interface UserIdExistsData {
  userIdExists: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider: FunctionComponent = (props) => {
  const [firebaseUser, initialising] = useAuthState(firebase.auth());
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<
    firebase.auth.Error | ApolloError | GraphQLError | undefined
  >(undefined);
  const [signedIn, setSignedIn] = useState<boolean>(false);

  const apolloClient = useApolloClient();

  const [createUser, { error: createUserError }] = useMutation(
    consts.mutations.CREATE_USER
  );

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

        if (createUserError) {
          setError(createUserError);
          logout();
        }
      }
    } catch (error_) {
      setError(error_);
      if (firebaseUser) {
        logout();
      }
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

  // verifies user has user table entry on signin
  useEffect(() => {
    const userExists = async (id: string) => {
      try {
        setLoading(true);
        setError(undefined);
        const result = await apolloClient.query<
          UserIdExistsData,
          QueryUserIdExistsArgs
        >({
          query: consts.queries.USER_ID_EXISTS,
          variables: { id },
        });

        if (result.data) {
          setSignedIn(result.data.userIdExists);
        }

        if (result.errors) {
          setSignedIn(false);
          setError(result.errors[0]);
          logout();
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

    if (firebaseUser) {
      userExists(firebaseUser.uid);
    }
  }, [firebaseUser, apolloClient]);

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
