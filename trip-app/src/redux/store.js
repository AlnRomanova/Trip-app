import { configureStore } from '@reduxjs/toolkit';
import { tripsReducer } from './tripsSlices';

const store = configureStore({
    reducer: {
      trips: tripsReducer,
    },
  });
  
  export default store;