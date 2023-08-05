import { createSlice } from '@reduxjs/toolkit';
import { addTrip } from './tripsOperation';

const initialState = {
    trips: [],
  };

 

  const tripSlice = createSlice({
    name: 'trips',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(addTrip.pending, (state) => {})
        .addCase(addTrip.fulfilled, (state, action) => {
          state.trips.push(action.payload);
        });
    },
  });
  
  export const tripsReducer = tripSlice.reducer;