import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MainPageState } from '@redux/models/state.models';

export const selectMainPage = createFeatureSelector<MainPageState>('mainPage');
const PassengersCount = createSelector(
  selectMainPage,
  (state) => state.passengersCount
);
const AirportsForward = createSelector(
  selectMainPage,
  (state) => state.AirportsForward
);
const AirportsBack = createSelector(
  selectMainPage,
  (state) => state.AirportsBack
);

const AirportsTwoWay = createSelector(
  AirportsForward,
  AirportsBack,
  (forward, back) => [forward, back]
);
const FlightForward = createSelector(
  selectMainPage,
  (state) => state.FlightForward
);
const FlightBack = createSelector(selectMainPage, (state) => state.FlightBack);

export const MainPageSelectors = {
  PassengersCount,
  AirportsForward,
  AirportsBack,
  AirportsTwoWay,
  FlightForward,
  FlightBack,
};
