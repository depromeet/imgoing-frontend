import { combineReducers } from 'redux';

import users from 'modules/slices/user';
import modal from 'modules/slices/modal';
import stepOfAddingPlan from './slices/stepOfAddingPlan';
import plan from 'modules/slices/plan';

const reducer = combineReducers({
  users,
  modal,
  stepOfAddingPlan,
  plan,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
