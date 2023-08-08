import { createSlice } from "@reduxjs/toolkit";
import { addTrip } from "./tripsOperation";
import { searchTrips } from "./tripsOperation";

const initialState = {
  trips: [
    {
      id: '25',
      startDate: "20.08.2023",
      endDate: "30.08.2023",
      city: "Kyiv",
      photo: "https://lp-cms-production.imgix.net/2019-06/a6469f3993128cbcdde6e2b0a90aa1d3-kyiv.jpg",
    },
  ],
  filteredTrips: [],
  status: "idle",
  error: null,
  selectedTrip: "Kyiv",
};

const tripSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    setSelectedTrip: (state, action) => {
      state.selectedTrip = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTrip.pending, (state) => {})
      .addCase(addTrip.fulfilled, (state, action) => {
        state.trips.push(action.payload);
      })
      .addCase(searchTrips.pending, (state, action) => {
        if (action.meta.arg === "") {
          state.filteredTrips = state.trips.trips;
        }
        state.status = "loading";
      })
      .addCase(searchTrips.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.filteredTrips = action.payload;
      })
      .addCase(searchTrips.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSelectedTrip } = tripSlice.actions; 
export const tripsReducer = tripSlice.reducer;