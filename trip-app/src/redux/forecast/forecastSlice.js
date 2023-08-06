import { createSlice } from "@reduxjs/toolkit";
import { fetchForecast, fetchForecastDuringWeeks } from "./forecastOperation";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchForecastDuringWeeks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchForecastDuringWeeks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchForecastDuringWeeks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const forecastReducer = forecastSlice.reducer;




