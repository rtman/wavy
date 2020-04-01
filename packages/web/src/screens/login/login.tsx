import * as consts from 'consts';
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  FormControl,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Title, SubTitle } from 'components';
import firebase from 'firebase';

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

  const onClickSignup = async () => {
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
      <SubTitle>Login</SubTitle>
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
        <Button onClick={onClickLogin}>
          {loading ? <CircularProgress /> : 'Log in'}
        </Button>
        <Button onClick={onClickSignup}>
          {`Don't have an account? Sign in`}
        </Button>
      </Grid>
    </Container>
  );
};
