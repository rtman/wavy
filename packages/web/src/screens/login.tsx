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
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// interface SignupFieldErrors {
//   email: boolean;
//   password: boolean;
// }

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  //   const [fieldErrors, setFieldErrors] = useState({
  //     email: false,
  //     password: false,
  //   });

  const onTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setValueCb: (value: string) => void
  ) => {
    setValueCb(event.target.value);
  };

  const onClickSignup = () => {
    history.push(`${consts.routes.SIGN_UP}`);
  };

  const onClickLogin = async () => {
    setLoading(true);
    await firebase.auth().signInWithEmailAndPassword(email, password);
    setLoading(false);
  };

  return (
    <Container maxWidth="md">
      <Title>Welcome to AppName</Title>
      <Typography variant="h1">Login</Typography>
      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              value={email}
              label="Email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onTextFieldChange(event, setEmail)
              }
            />
          </FormControl>
        </Grid>
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              value={password}
              type="password"
              label="Password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onTextFieldChange(event, setPassword)
              }
            />
          </FormControl>
        </Grid>
        <Button variant="contained" color="primary" onClick={onClickLogin}>
          {loading ? <CircularProgress color="secondary" /> : 'Log in'}
        </Button>
        <Spacing.section.Major />
        <Button variant="outlined" color="secondary" onClick={onClickSignup}>
          {"Don't have an account? Sign in"}
        </Button>
      </Grid>
    </Container>
  );
};
