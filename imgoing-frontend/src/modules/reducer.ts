import { combineReducers } from 'redux';
import users from './slices/user';
import modal from './slices/modal';

const reducer = combineReducers({
  users,
  modal,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
