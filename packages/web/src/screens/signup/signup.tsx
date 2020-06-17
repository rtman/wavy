import * as consts from 'consts';
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
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import firebase from 'firebase';

// interface SignupFieldErrors {
//   firstName: boolean;
//   lastName: boolean;
//   email: boolean;
//   password: boolean;
//   confirmPassword: boolean;
// }

export const Signup = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [createUser, { loading }] = useMutation(consts.mutations.CREATE_USER);

  const history = useHistory();

  //   const [fieldErrors, setFieldErrors] = useState({
  //     firstName: false,
  //     lastName: false,
  //     email: false,
  //     password: false,
  //     confirmPassword: false
  //   });

  const onTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setValueCb: (value: string) => void
  ) => {
    setValueCb(event.target.value);
  };

  const onClickSignup = async () => {
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
              value={firstName}
              label="First Name"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onTextFieldChange(event, setFirstName)
              }
            />
          </FormControl>
        </Grid>
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              value={lastName}
              label="Last Name"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onTextFieldChange(event, setLastName)
              }
            />
          </FormControl>
        </Grid>
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
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              value={confirmPassword}
              type="password"
              label="Confirm Password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onTextFieldChange(event, setConfirmPassword)
              }
            />
          </FormControl>
        </Grid>
        <Button variant="contained" color="primary" onClick={onClickSignup}>
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
