import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

export const createReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history)
  });

export let rootReducer: ReturnType<typeof createReducer>;
