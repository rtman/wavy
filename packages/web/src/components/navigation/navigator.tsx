import React from 'react';
import { Routes } from './routes';

export const Navigator = () => {
  // const RenderPathname = (pathname) => {
  //   switch (true) {
  //     case /home/.test(pathname):
  //       return 'Home';
  //     case /emailAndPassword/.test(pathname):
  //       return 'EmailAndPassword';
  //     default:
  //       return pathname;
  //   }
  // };

  return (
    <>
      <Routes />
    </>
  );
};
