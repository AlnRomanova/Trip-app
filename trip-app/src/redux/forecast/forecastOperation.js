import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

export const fetchForecast = createAsyncThunk(
  'forecast/fetchForecast',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.get('Kyiv/today?unitGroup=metric&include=days&key=SNNWH33FYCJG5RVL2GR23MAQQ&contentType=json', formData);
      console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



