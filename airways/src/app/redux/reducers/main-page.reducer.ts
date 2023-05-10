import { MainPageState } from '@redux/models/state.models';
import { createReducer, on } from '@ngrx/store';
import { MainPageActions } from '@redux/actions/main-page.actions';
import { FlightRes } from '@redux/models/main-page.models';

export const initialState: MainPageState = {
  passengersCount: {
    adults: 1,
    children: 1,
    infants: 1,
  },
  AirportsForward: null,
  AirportsBack: null,
  FlightForward: null,
  FlightBack: null,
  AirportsForwardError: null,
  AirportsBackError: null,
  FlightError: null,
};

const backFlight = (flight: FlightRes[]) => (flight[1] ? flight[1] : null);

export const MainPageReducer = createReducer(
  initialState,
  on(MainPageActions.PassengersCount, (state, action) => ({
    ...state,
    passengersCount: { ...action },
  })),
  on(MainPageActions.FlightSuccess, (state, action) => ({
    ...state,
    FlightError: null,
    FlightForward: action.flight[0],
    FlightBack: backFlight(action.flight),
  })),
  on(MainPageActions.AirportsForwardSuccess, (state, action) => ({
    ...state,
    AirportsForwardError: null,
    AirportsForward: action,
  })),
  on(MainPageActions.AirportsBackSuccess, (state, action) => ({
    ...state,
    AirportsBackError: null,
    AirportsBack: action,
  })),
  on(MainPageActions.FlightError, (state, action) => ({
    ...state,
    FlightError: action.error,
  })),
  on(MainPageActions.AirportsForwardError, (state, action) => ({
    ...state,
    AirportsForwardError: action.error,
  })),
  on(MainPageActions.AirportsBackError, (state, action) => ({
    ...state,
    AirportsBackErrorError: action.error,
  }))
);
