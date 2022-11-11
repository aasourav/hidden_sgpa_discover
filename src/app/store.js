import { configureStore } from '@reduxjs/toolkit';
import sgpaSlice from '../features/sgpa/sgpaSlice';

export const store = configureStore({
  reducer: {
    sgpa_cal : sgpaSlice.reducer
  },
});
