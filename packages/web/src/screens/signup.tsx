import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { Spacing } from 'components';
import * as consts from 'consts';
import { AuthContext } from 'context';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Signup = () => {
  //eslint-disable-next-line @typescript-eslint/unbound-method
  const {
    register,
    handleSubmit,
    getValues,
    errors: signupFormErrors,
  } = useForm<SignUpForm>();
  const history = useHistory();

  const authContext = useContext(AuthContext);
  const { loading, error: authError, signup } = authContext ?? {};

  const onClickSignup = async (data: SignUpForm) => {
    if (signup) {
      await signup(data);
    }
  };

  const onClickLogin = () => {
    history.push(consts.routes.LOG_IN);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Container maxWidth="md">
        <Typography variant="h3">Welcome to AppName</Typography>

        <Spacing.BetweenParagraphs />

        <Typography variant="h5">Create an account</Typography>
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={12}>
            <FormControl fullWidth={true}>
              <TextField
                inputRef={register({
                  required: {
                    value: true,
                    message: 'Required',
                  },
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
                helperText={signupFormErrors.firstName?.message}
                error={signupFormErrors.firstName !== undefined}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.target.value = event.target.value.trim();
                }}
              />
            </FormControl>
          </Grid>
          <Grid item={true} xs={12}>
            <FormControl fullWidth={true}>
              <TextField
                inputRef={register({
                  required: {
                    value: true,
                    message: 'Required',
                  },
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
                helperText={signupFormErrors.lastName?.message}
                error={signupFormErrors.lastName !== undefined}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.target.value = event.target.value.trim();
                }}
              />
            </FormControl>
          </Grid>
          <Grid item={true} xs={12}>
            <FormControl fullWidth={true}>
              <TextField
                inputRef={register({
                  required: {
                    value: true,
                    message: 'Required',
                  },
                  pattern: {
                    value: consts.regex.email,
                    message: 'Enter a valid email',
                  },
                })}
                label="Email"
                name="email"
                helperText={signupFormErrors.email?.message}
                error={signupFormErrors.email !== undefined}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.target.value = event.target.value.trim();
                }}
              />
            </FormControl>
          </Grid>
          <Grid item={true} xs={12}>
            <FormControl fullWidth={true}>
              <TextField
                inputRef={register({
                  required: {
                    value: true,
                    message: 'Required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Enter atleast 6 characters',
                  },
                })}
                type="password"
                label="Password"
                name="password"
                helperText={signupFormErrors.password?.message}
                error={signupFormErrors.password !== undefined}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.target.value = event.target.value.trim();
                }}
              />
            </FormControl>
          </Grid>
          <Grid item={true} xs={12}>
            <FormControl fullWidth={true}>
              <TextField
                inputRef={register({
                  required: {
                    value: true,
                    message: 'Required',
                  },
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
                helperText={signupFormErrors.confirmPassword?.message}
                error={signupFormErrors.confirmPassword !== undefined}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.target.value = event.target.value.trim();
                }}
              />
            </FormControl>
          </Grid>
          {authError ? (
            <Grid item={true} xs={12}>
              <Typography color="error" variant="body1">
                {authError?.message}
              </Typography>
            </Grid>
          ) : null}
          <Grid spacing={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onClickSignup)}
            >
              {loading ? <CircularProgress color="secondary" /> : 'Sign up'}
            </Button>

            <Spacing.section.Major />

            <Button variant="text" color="secondary" onClick={onClickLogin}>
              Already have an Account? Log in
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
