import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/menu/counterMenu';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
