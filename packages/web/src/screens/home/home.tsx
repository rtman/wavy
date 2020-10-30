import { UserContext } from 'context';
import React, { useContext } from 'react';

import { HomeFeed } from './homeFeed';
import { SetupHome } from './setupHome';

export const Home = () => {
  const userContext = useContext(UserContext);
  const user = userContext?.user;

  return (user?.subscriptions?.length ?? 0) > 0 ? <HomeFeed /> : <SetupHome />;
  // return <SetupHome />;
};
