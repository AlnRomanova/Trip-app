import { createAsyncThunk } from '@reduxjs/toolkit';

export const addTrip = createAsyncThunk('trips/addTrip', async (formData) => {
    return formData;  
  });

  export const searchTrips = createAsyncThunk(
    'trips/searchTrips',
    async (searchQuery, { getState }) => {
      const trips = getState().trips.trips;
      const filteredTrips = trips.filter((trip) =>
        trip.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return filteredTrips;
    }
  );