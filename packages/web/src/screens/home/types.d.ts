type EmailAndPasswordProps = EmailAndPasswordDispatchProps & EmailAndPasswordStateProps;

interface EmailAndPasswordStateProps {
  email: string;
  error?: 'invalid_email' | 'empty_email' | '';
  errorMessage: string;
  loading: boolean;
  // recoveryCode: string;
  password: string;
  passwordIsEmpty: boolean;
  // passwordHasSpecialCharacter: boolean;
  // passwordHasDigit: boolean;
  passwordIsLongEnough: boolean;
}

// type EmailAndPasswordDispatchProps = typeof import('./EmailAndPasswordContainer').mapDispatchToProps;

type PasswordRequirementStatus = 'done' | 'blank' | 'fail';

interface Song {
  id: string;
  artist: string;
  title: string;
  album: string;
  genre: string[];
  artwork: string;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
  date: Date;
}
