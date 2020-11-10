export const filterMediaStates = (
  currentMediaState: string,
  latchedMediaState: string
) => {
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

  if (dontCareStates.includes(currentMediaState)) {
    return latchedMediaState;
  } else if (['playing', 'pause', 'ended'].includes(currentMediaState)) {
    return currentMediaState;
  } else if (statesThatStopPlayback.includes(currentMediaState)) {
    return latchedMediaState;
  } else {
    return latchedMediaState;
  }
};
