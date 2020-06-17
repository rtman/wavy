import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

// TODO: If we start using redux, fix this type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
  });

export let rootReducer: ReturnType<typeof createReducer>;
