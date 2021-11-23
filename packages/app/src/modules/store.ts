import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import reducer from 'modules/reducer';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export default store;
