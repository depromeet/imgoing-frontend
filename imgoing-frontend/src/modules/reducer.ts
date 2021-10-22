import { combineReducers } from 'redux';

import users from 'modules/slices/user';
import modal from 'modules/slices/modal';
import stepOfAddingPlan from './slices/stepOfAddingPlan';

const reducer = combineReducers({
  users,
  modal,
  stepOfAddingPlan,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
