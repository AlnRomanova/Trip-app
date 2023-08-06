import { createSlice } from '@reduxjs/toolkit';
import { addTrip } from './tripsOperation';
import { searchTrips } from './tripsOperation';

const initialState = {
    trips: [],
    filteredTrips: [], 
    status: 'idle', 
    error: null,
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
        })
        .addCase(searchTrips.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(searchTrips.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.filteredTrips = action.payload;
        })
        .addCase(searchTrips.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export const tripsReducer = tripSlice.reducer;