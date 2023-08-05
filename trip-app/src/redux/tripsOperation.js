import { createAsyncThunk } from '@reduxjs/toolkit';

export const addTrip = createAsyncThunk('trips/addTrip', async (formData) => {
    console.log(formData)
    return formData;
  
  });