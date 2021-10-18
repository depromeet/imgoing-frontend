import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from 'redux-logger';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export default store;
