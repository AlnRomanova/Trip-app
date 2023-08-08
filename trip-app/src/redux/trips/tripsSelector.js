import { createSelector } from "@reduxjs/toolkit";
import { parse } from 'date-fns'; 
export const selectTrips = state => state.trips;
export const selectAllTrips = state => state.trips.trips;
export const selectFilteredTrips = state => state.trips.filteredTrips;
export const selectStatus = state => state.trips.status;
export const selectError = state => state.trips.error;
export const selectSelectedTrip = state => state.trips.selectedTrip;


export const sortTripsByStartDate = createSelector(
  selectAllTrips,
  (trips) => {
    return [...trips].sort((a, b) =>
      parse(a.startDate, 'dd.MM.yyyy', new Date()) - parse(b.startDate, 'dd.MM.yyyy', new Date())
    );
  }
);



