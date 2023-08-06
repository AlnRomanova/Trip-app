import { createSelector } from "@reduxjs/toolkit";
export const selectTrips = state => state.trips;
export const selectAllTrips = state => state.trips.trips;
export const selectFilteredTrips = state => state.trips.filteredTrips;
export const selectStatus = state => state.trips.status;
export const selectError = state => state.trips.error;

export const sortTripsByStartDate = createSelector(
    selectAllTrips,
    (trips) => [...trips].sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
  );



