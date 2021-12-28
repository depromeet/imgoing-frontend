import { combineReducers } from 'redux';
import { planApi } from './services/plan';

const reducer = combineReducers({
  [planApi.reducerPath]: planApi.reducer,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
