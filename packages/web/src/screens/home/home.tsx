import { Screen } from 'components';
// import * as helpers from 'helpers';
import React, { useEffect } from 'react';
// import c_quenz from './public/audio/c_quenz.mp3';
// import { useDispatch, useSelector } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import * as state from 'state';

export const Home = () => {
  const COMPONENT_NAME = 'Home';

  // useEffect(() => {
  //   const audio = new Audio(c_quenz);
  //   audio.load();
  //   audio.play();
  // }, []);

  return (
    <Screen>
      <div>Hello</div>
      <audio
        src={
          'https://firebasestorage.googleapis.com/v0/b/groov-development-ddc9d.appspot.com/o/B2_Exit%20Point.mp3?alt=media&token=b7dab356-8989-4251-a4a3-2b7302354595'
        }
        controls={true}
      />
    </Screen>
  );
};
