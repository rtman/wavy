import { useEffect, useState } from 'react';

export const usePlayState = (audio: HTMLAudioElement) => {
  const [currentState, setCurrentState] = useState<string | null>(null);

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
    'waiting'
  ];

  const addListenerMulti = (el: HTMLAudioElement, eventArray: string[], fn: (event: any) => void) => {
    eventArray.forEach((event) => el.addEventListener(event, fn, false));
  };

  const removeListenerMulti = (el: HTMLAudioElement, eventArray: string[], fn: (event: any) => void) => {
    eventArray.forEach((event) => el.removeEventListener(event, fn, false));
  };

  const filterStates = (type: string) => {
    // const statesThatStopPlayback = ['abort', 'pause', 'error', 'ended', 'seeked', 'seeking', 'stalled', 'suspend', 'waiting'];
    const statesThatStopPlayback = ['abort', 'pause', 'error', 'ended', 'seeked', 'seeking', 'stalled', 'suspend'];

    if (type === 'playing') {
      return type;
    } else if (statesThatStopPlayback.includes(type)) {
      return null;
    } else {
      return currentState;
    }
  };

  useEffect(() => {
    const callback = (event: any) => {
      setCurrentState(filterStates(event.type));
    };
    addListenerMulti(audio, events, callback);

    return () => removeListenerMulti(audio, events, callback);
  });

  return currentState;
};