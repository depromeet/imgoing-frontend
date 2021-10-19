import { combineReducers } from 'redux';

import users from 'modules/slices/user';
import modal from 'modules/slices/modal';

const reducer = combineReducers({
  users,
  modal,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
