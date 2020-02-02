import { useEffect } from 'react';

export const useTimer = (interval: number, callback: () => void) => {
  useEffect(() => {
    const timer = setTimeout(callback, interval);

    return () => clearTimeout(timer);
  });

  return;
};
