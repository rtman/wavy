import { Button, CircularProgress, Container, Grid, FormControl, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Title, SubTitle } from 'components';
import firebase from 'firebase';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const CREATE_USER = gql`
  mutation CREATE_USER($firstName: String!, $lastName: String!, $email: String!, $password: String!, $id: String!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, id: $id) {
      id
      firstName
      lastName
      email
      password
    }
  }
`;

interface SignupFieldErrors {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}

export const Signup = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [createUser, { data, error, loading }] = useMutation(CREATE_USER);
  //   const [fieldErrors, setFieldErrors] = useState({
  //     firstName: false,
  //     lastName: false,
  //     email: false,
  //     password: false,
  //     confirmPassword: false
  //   });

  const onTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>, setValueCb: (value: string) => void) => {
    setValueCb(event.target.value);
  };

  const onClickSignup = async () => {
    const firebaseCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    if (firebaseCredential?.user) {
      createUser({ variables: { firstName, lastName, email, password, id: firebaseCredential.user.uid } });
    }
  };

  return (
    <Container maxWidth="md">
      <Title>Welcome to AppName</Title>
      <SubTitle>Create an account</SubTitle>
      <Grid container={true} spacing={2}>
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              value={firstName}
              label="First Name"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => onTextFieldChange(event, setFirstName)}
            />
          </FormControl>
        </Grid>
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              value={lastName}
              label="Last Name"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => onTextFieldChange(event, setLastName)}
            />
          </FormControl>
        </Grid>
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              value={email}
              label="Email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => onTextFieldChange(event, setEmail)}
            />
          </FormControl>
        </Grid>
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              value={password}
              type="password"
              label="Password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => onTextFieldChange(event, setPassword)}
            />
          </FormControl>
        </Grid>
        <Grid item={true} xs={12}>
          <FormControl fullWidth={true}>
            <TextField
              value={confirmPassword}
              type="password"
              label="Confirm Password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => onTextFieldChange(event, setConfirmPassword)}
            />
          </FormControl>
        </Grid>
        <Button onClick={onClickSignup}>{loading ? <CircularProgress /> : 'Sign up'}</Button>
      </Grid>
    </Container>
  );
};
