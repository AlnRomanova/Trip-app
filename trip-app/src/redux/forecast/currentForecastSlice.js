import { createSlice } from "@reduxjs/toolkit";
import { fetchForecast } from "./forecastOperation";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

const currentForecastSlice = createSlice({
  name: "currentForecast",
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
      });
  },
});

export const currentForecastReducer = currentForecastSlice.reducer;
