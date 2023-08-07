import { createSlice } from "@reduxjs/toolkit";
import { fetchForecastDuringWeeks } from "./forecastOperation";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

const weeklyForecastSlice = createSlice({
  name: "weeklyForecast",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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

export const weeklyForecastReducer = weeklyForecastSlice.reducer;