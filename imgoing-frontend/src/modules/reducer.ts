import { combineReducers } from 'redux';

import users from 'modules/slices/user';
import modal from 'modules/slices/modal';
import stepOfAddingPlan from './slices/stepOfAddingPlan';
import plan from 'modules/slices/plan';
import identify from 'modules/slices/identify';
import bookmark from 'modules/slices/bookmark';

const reducer = combineReducers({
  users,
  modal,
  stepOfAddingPlan,
  plan,
  identify,
  bookmark,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
