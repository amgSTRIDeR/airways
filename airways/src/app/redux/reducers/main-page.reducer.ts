import { MainPageState } from '@redux/models/state.models';
import { createReducer, on } from '@ngrx/store';
import { MainPageActions } from '@redux/actions/main-page.actions';

export const initialState: MainPageState = {
  passengersCount: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  airports: [],
  airportForward: null,
  airportBack: null,
  flightForward: null,
  flightBack: null,
  flightsForBooking: null,
  flightsForBookingReturn: null,
};

export const MainPageReducer = createReducer(
  initialState,
  on(MainPageActions.PassengersCount, (state, action) => ({
    ...state,
    passengersCount: { ...action },
  })),

  on(MainPageActions.LoadAirportsSuccess, (state, action) => ({
    ...state,
    airports: action.airports,
  })),

  on(MainPageActions.FlightForward, (state, action) => ({
    ...state,
    flightForward: action.date,
  })),

  on(MainPageActions.FlightBack, (state, action) => ({
    ...state,
    flightBack: action.date,
  })),

  on(MainPageActions.AirportForward, (state, action) => ({
    ...state,
    airportForward: { ...action },
  })),

  on(MainPageActions.AirportBack, (state, action) => ({
    ...state,
    airportBack: { ...action },
  })),

  on(MainPageActions.FlightsForBooking, (state, action) => ({
    ...state,
    flightsForBooking: { ...action },
  })),

  on(MainPageActions.FlightsForBookingReturn, (state, action) => ({
    ...state,
    flightsForBookingReturn: { ...action },
  }))
);
