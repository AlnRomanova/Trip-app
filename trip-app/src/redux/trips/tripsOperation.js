import { createAsyncThunk } from '@reduxjs/toolkit';
import { parse } from 'date-fns'; 

export const addTrip = createAsyncThunk('trips/addTrip', async (formData) => {
    return formData;  
  });

export const searchTrips = createAsyncThunk(
  'trips/searchTrips',
  async (searchQuery, { getState, rejectWithValue }) => {
    const trips = getState().trips.trips;
    const filteredTrips = searchQuery
      ? trips.filter((trip) =>
          trip.city.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : trips;

    if (filteredTrips.length === 0) {
      return rejectWithValue('No trips found for the given search query.');
    }
    return filteredTrips.sort((a, b) =>
    parse(a.startDate, 'dd.MM.yyyy', new Date()) - parse(b.startDate, 'dd.MM.yyyy', new Date())
  );;
  }
);