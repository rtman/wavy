import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { ApolloError } from 'apollo-boost';
import { Spacing, Title } from 'components';
import * as consts from 'consts';
import firebase from 'firebase';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

interface LoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<
    firebase.FirebaseError | ApolloError | undefined
  >(undefined);
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm<LoginForm>();

  const onClickSignup = () => {
    history.push(`${consts.routes.SIGN_UP}`);
  };

  const onClickLogin = async (data: LoginForm) => {
    const { email, password } = data;
    try {
      setLoading(true);
      setAuthError(undefined);

      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      const loginError = error as firebase.FirebaseError | ApolloError;
      setAuthError(loginError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Title>Welcome to AppName</Title>
      <Typography variant="h1">Login</Typography>
      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              inputRef={register({
                required: 'Required',
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Enter a valid email',
                },
              })}
              label="Email"
              name="email"
              helperText={errors.email?.message}
              error={errors.email !== undefined}
            />
          </FormControl>
        </Grid>
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              inputRef={register({
                required: 'Required',
                minLength: {
                  value: 6,
                  message: 'Enter atleast 6 characters',
                },
              })}
              type="password"
              label="Password"
              name="password"
              helperText={errors.password?.message}
              error={errors.password !== undefined}
            />
          </FormControl>
        </Grid>
        {authError ? (
          <Grid item={true} xs={12}>
            <Typography color="error" variant="body1">
              {authError.message}
            </Typography>
          </Grid>
        ) : null}
        <Grid item={true} xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit(onClickLogin)}
          >
            {loading ? <CircularProgress color="secondary" /> : 'Log in'}
          </Button>
          <Spacing.section.Major />
          <Button variant="outlined" color="secondary" onClick={onClickSignup}>
            Don't have an account? Sign up
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
