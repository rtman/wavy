import { useEffect, useState } from 'react';

export const usePlayState = (audio: HTMLAudioElement) => {
  const [latchedState, setLatchedState] = useState<string | null>(null);
  console.log('usePlayState start');

  const events: string[] = [
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
    fn: (event: any) => void
  ) => {
    eventArray.forEach((event) => el.addEventListener(event, fn, false));
  };

  const removeListenerMulti = (
    el: HTMLAudioElement,
    eventArray: string[],
    fn: (event: any) => void
  ) => {
    eventArray.forEach((event) => el.removeEventListener(event, fn, false));
  };

  const filterStates = (type: string) => {
    // const statesThatStopPlayback = ['abort', 'pause', 'error', 'ended', 'seeked', 'seeking', 'stalled', 'suspend', 'waiting'];
    const statesThatStopPlayback = [
      'abort',
      'error',
      'emptied',
      'encrypted',
      'ended',
      'waiting',
      'stalled',
    ];

    const dontCareStates = [
      'canplay',
      'canplaythrough',
      'durationchange',
      'interruptbegin',
      'interruptend',
      'loadeddata',
      'loadedmetadata',
      'loadstart',
      'mozaudioavailable',
      'progress',
      'ratechange',
      'seeked',
      'seeking',
      'suspend',
      'timeupdate',
      'volumechange',
    ];

    if (dontCareStates.includes(type)) {
      return latchedState;
    } else if (['playing', 'pause', 'ended'].includes(type)) {
      return type;
    } else if (statesThatStopPlayback.includes(type)) {
      return latchedState;
    } else {
      return latchedState;
    }
  };

  useEffect(() => {
    const callback = (event: any) => {
      setLatchedState(filterStates(event.type));
    };
    addListenerMulti(audio, events, callback);

    return () => removeListenerMulti(audio, events, callback);
  });

  return latchedState;
};
