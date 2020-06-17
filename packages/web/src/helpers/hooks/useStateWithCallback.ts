import { useEffect, useLayoutEffect, useState } from 'react';

export const useStateWithCallback = (
  initialState: unknown,
  callback: (state: unknown) => void
) => {
  const [state, setState] = useState(initialState);

  useEffect(() => callback(state), [state, callback]);

  return [state, setState];
};

export const useStateWithCallbackInstant = (
  initialState: unknown,
  callback: (state: unknown) => void
) => {
  const [state, setState] = useState(initialState);

  useLayoutEffect(() => callback(state), [state, callback]);

  return [state, setState];
};
