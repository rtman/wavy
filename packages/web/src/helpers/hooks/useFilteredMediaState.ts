import { useEffect, useState } from 'react';

export const useFilteredMediaState = (audio: HTMLAudioElement) => {
  const [currentState, setCurrentState] = useState<string>('');

  const events = [
    'abort',
    'canplay',
    'canplaythrough',
    'durationchange',
    'emptied',
    'encrypted',
    'ended',
    'error',
    'interruptbegin',
    'interruptend',
    'loadeddata',
    'loadedmetadata',
    'loadstart',
    'mozaudioavailable',
    'pause',
    'play',
    'playing',
    'progress',
    'ratechange',
    'seeked',
    'seeking',
    'stalled',
    'suspend',
    'timeupdate',
    'volumechange',
    'waiting',
  ];

  const addListenerMulti = (
    el: HTMLAudioElement,
    eventArray: string[],
    fn: (event: Event) => void
  ) => {
    eventArray.forEach((event) => el.addEventListener(event, fn, false));
  };

  const removeListenerMulti = (
    el: HTMLAudioElement,
    eventArray: string[],
    fn: (event: Event) => void
  ) => {
    eventArray.forEach((event) => el.removeEventListener(event, fn, false));
  };

  useEffect(() => {
    const callback = (event: Event) => {
      const { type } = event;

      if (['playing', 'pause', 'ended'].includes(type)) {
        setCurrentState(event.type);
      }
    };
    addListenerMulti(audio, events, callback);

    return () => removeListenerMulti(audio, events, callback);
  });

  return currentState;
};
