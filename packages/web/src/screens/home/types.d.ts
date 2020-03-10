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
  artist_name: string;
  artist_id: string;
  title: string;
  album_title: string;
  album_id: string;
  genres: string[];
  image: string;
  duration: number;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
  date: Date;
  audio?: HTMLAudioElement;
}

interface Album {
  id: string;
  artist_name: string;
  artist_id: string;
  title: string;
  genre: string[];
  songs: Song[];
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
  date: Date;
}
