import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { Spacing, Title } from 'components';
import * as consts from 'consts';
import firebase from 'firebase';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Signup = () => {
  const [createUser, { loading }] = useMutation(consts.mutations.CREATE_USER);
  const { register, handleSubmit, getValues, errors } = useForm<SignUpForm>();

  const history = useHistory();

  const onClickSignup = async (data: SignUpForm) => {
    const { firstName, lastName, email, password } = data;

    console.log('*debug* onClickSignup', data);

    const firebaseCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (firebaseCredential?.user) {
      createUser({
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
    }
  };

  const onClickLogin = () => {
    history.push(consts.routes.LOG_IN);
  };

  return (
    <Container maxWidth="md">
      <Title>Welcome to AppName</Title>
      <Typography variant="h1">Create an account</Typography>
      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              inputRef={register({
                required: 'Required',
                minLength: {
                  value: 2,
                  message: 'Enter at least 2 characters',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Only letters allowed',
                },
              })}
              label="First Name"
              name="firstName"
              helperText={errors.firstName?.message}
              error={errors.firstName !== undefined}
            />
          </FormControl>
        </Grid>
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              inputRef={register({
                required: 'Required',
                minLength: {
                  value: 2,
                  message: 'Enter at least 2 characters',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Only letters allowed',
                },
              })}
              label="Last Name"
              name="lastName"
              helperText={errors.lastName?.message}
              error={errors.lastName !== undefined}
            />
          </FormControl>
        </Grid>
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
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              inputRef={register({
                required: 'Required',
                minLength: {
                  value: 6,
                  message: 'Enter atleast 6 characters',
                },
                validate: (value) =>
                  value === getValues('password') || 'Passwords must match',
              })}
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              helperText={errors.confirmPassword?.message}
              error={errors.confirmPassword !== undefined}
            />
          </FormControl>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onClickSignup)}
        >
          {loading ? <CircularProgress color="secondary" /> : 'Sign up'}
        </Button>
        <Spacing.section.Major />
        <Button variant="outlined" color="secondary" onClick={onClickLogin}>
          {'Already have an Account? Log in'}
        </Button>
      </Grid>
    </Container>
  );
};
