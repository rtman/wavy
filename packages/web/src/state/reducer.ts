import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// TODO: If we start using redux, fix this type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
  });

export let rootReducer: ReturnType<typeof createReducer>;
