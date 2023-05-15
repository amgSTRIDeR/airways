import { MainPageState } from '@redux/models/state.models';
import { createReducer, on } from '@ngrx/store';
import { MainPageActions } from '@redux/actions/main-page.actions';

export const initialState: MainPageState = {
  passengersCount: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  isRoundTrip: true,
  airports: [],
  airportForward: null,
  airportBack: null,
  flightForward: null,
  flightBack: null,
  isShowMainForm: false,
};

export const MainPageReducer = createReducer(
  initialState,
  on(MainPageActions.PassengersCount, (state, action) => ({
    ...state,
    passengersCount: { ...action },
  })),

  on(MainPageActions.IsRoundTrip, (state, action) => ({
    ...state,
    isRoundTrip: action.isRoundTrip,
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

  on(MainPageActions.ChangeIsShownValue, (state, action) => ({
    ...state,
    isShowMainForm: action.IsShownMainPage,
  }))
);
