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

export interface LoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  //eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, handleSubmit, errors: formErrors } = useForm<LoginForm>();
  const history = useHistory();

  const authContext = useContext(AuthContext);
  const { loading, error: authError, login } = authContext ?? {};

  const onClickLogin = async (data: LoginForm) => {
    if (login) {
      await login(data);
    }
  };

  const onClickSignup = () => {
    history.push(`${consts.routes.SIGN_UP}`);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Container maxWidth="md">
        <Typography variant="h3">Welcome to Wavy</Typography>

        <Spacing.BetweenParagraphs />

        <Typography variant="h5">Login</Typography>
        <Grid container={true} spacing={2}>
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
                helperText={formErrors.email?.message}
                error={formErrors.email !== undefined}
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
                helperText={formErrors.password?.message}
                error={formErrors.password !== undefined}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.target.value = event.target.value.trim();
                }}
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

            <Spacing.BetweenComponents />

            <Button variant="text" color="secondary" onClick={onClickSignup}>
              Don't have an account? Sign up
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
