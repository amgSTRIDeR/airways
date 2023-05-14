import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MainPageState } from '@redux/models/state.models';

export const selectMainPage = createFeatureSelector<MainPageState>('mainPage');
const PassengersCount = createSelector(
  selectMainPage,
  (state) => state.passengersCount
);

const IsRoundTripSelector = createSelector(
  selectMainPage,
  (state) => state.isRoundTrip
);

const AirportsSelector = createSelector(
  selectMainPage,
  (state) => state.airports
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

const FlightsForBookingReturnSelector = createSelector(
  selectMainPage,
  (state) => state.flightsForBookingReturn
);

export const MainPageSelectors = {
  PassengersCount,
  AirportsSelector,
  FlightForwardSelector,
  FlightBackSelector,
  AirportForwardSelector,
  AirportBackSelector,
  FlightsForBookingSelector,
  FlightsForBookingReturnSelector,
  IsRoundTripSelector,
};
