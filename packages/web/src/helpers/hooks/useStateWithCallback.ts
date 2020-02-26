import { useState, useEffect, useLayoutEffect } from 'react';

export const useStateWithCallback = (initialState: any, callback: (state: any) => void) => {
  const [state, setState] = useState(initialState);

  useEffect(() => callback(state), [state, callback]);

  return [state, setState];
};

export const useStateWithCallbackInstant = (initialState: any, callback: (state: any) => void) => {
  const [state, setState] = useState(initialState);

  useLayoutEffect(() => callback(state), [state, callback]);

  return [state, setState];
};
