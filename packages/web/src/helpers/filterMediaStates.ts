export const filterMediaStates = (type: string, state: string) => {
  // const statesThatStopPlayback = ['abort', 'pause', 'error', 'ended', 'seeked', 'seeking', 'stalled', 'suspend', 'waiting'];
  const statesThatStopPlayback = ['abort', 'error', 'emptied', 'encrypted', 'ended', 'waiting', 'stalled'];

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
    'volumechange'
  ];

  if (dontCareStates.includes(type)) {
    return state;
  } else if (['playing', 'pause', 'ended'].includes(type)) {
    return type;
  } else if (statesThatStopPlayback.includes(type)) {
    return state;
  } else {
    return state;
  }
};
