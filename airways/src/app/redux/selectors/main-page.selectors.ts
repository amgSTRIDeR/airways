import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MainPageState } from '@redux/models/state.models';

export const selectMainPage = createFeatureSelector<MainPageState>('mainPage');
const PassengersCount = createSelector(
  selectMainPage,
  (state) => state.passengersCount
);

const FlightForwardSelector = createSelector(
  selectMainPage,
  (state) => state.flightForward
);

const FlightBackSelector = createSelector(
  selectMainPage,
  (state) => state.flightBack
);

const AirportForwardSelector = createSelector(
  selectMainPage,
  (state) => state.airportForward
);

const AirportBackSelector = createSelector(
  selectMainPage,
  (state) => state.airportBack
);

const FlightsForBookingSelector = createSelector(
  selectMainPage,
  (state) => state.flightsForBooking
);

export const MainPageSelectors = {
  PassengersCount,
  FlightForwardSelector,
  FlightBackSelector,
  AirportForwardSelector,
  AirportBackSelector,
  FlightsForBookingSelector,
};
