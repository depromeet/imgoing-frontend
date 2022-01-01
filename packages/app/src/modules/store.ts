import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import reducer from 'modules/reducer';
import { planApi } from 'modules/services/plan';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, planApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export default store;
