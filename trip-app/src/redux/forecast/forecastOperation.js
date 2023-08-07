import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
const YOUR_API_KEY = "SNNWH33FYCJG5RVL2GR23MAQQ";

export const fetchForecast = createAsyncThunk(
  "forecast/fetchForecast",
  async (city, thunkAPI) => {
    try {
      const response = await axios.get(
        `${city}/today?unitGroup=metric&include=days&key=${YOUR_API_KEY}&contentType=json`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchForecastDuringWeeks = createAsyncThunk(
  "forecas/fetchForecastDuringWeeks",
  async ({ city, startDate, endDate }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${YOUR_API_KEY}&contentType=json`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
