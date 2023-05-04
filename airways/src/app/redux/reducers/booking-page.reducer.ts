import { BookingPageState } from '@redux/models/state.models';
import { createReducer, on } from '@ngrx/store';
import { BookingActions } from '@redux/actions/booking-page.actions';
import {
  PassengerInfo,
  SelectedFlight,
} from '@redux/models/booking-page.models';
import { MainPageActions } from '@redux/actions/main-page.actions';
import { PassengersCount } from '@redux/models/main-page.models';

export const initialState: BookingPageState = {
  onBookingPage: false,
  currentPageDirection: 'flight',
  isEditWindowOpen: false,
  flights: null,
  passengersInfo: null,
  allInformation: null,
  readyFlight: null,
  passengersCount: null,
};
export const BookingPageReducer = createReducer(
  initialState,
  on(MainPageActions.PassengersCount, (state, action) => ({
    ...state,
    passengersCount: { ...action },
  })),
  on(BookingActions.OnBookingPage, (state) => ({
    ...state,
    onBookingPage: true,
  })),
  on(BookingActions.OutBookingPage, (state) => ({
    ...state,
    onBookingPage: false,
  })),
  on(BookingActions.OnFlightSubPage, (state) => ({
    ...state,
    currentPageDirection: 'flight',
  })),
  on(BookingActions.OnPassengersSubPage, (state) => ({
    ...state,
    currentPageDirection: 'passengers',
  })),
  on(BookingActions.OnFlightSubPage, (state) => ({
    ...state,
    currentPageDirection: 'review',
  })),
  on(BookingActions.AddSelectedFlight, (state, action) => ({
    ...state,
    flights: action,
  })),
  on(BookingActions.AddPassengersInformation, (state, action) => ({
    ...state,
    passengersInfo: action,
  })),
  on(BookingActions.AddAllInformation, (state) => ({
    ...state,
    allInformation: {
      selectedFlight: state.flights as SelectedFlight,
      passengersInfo: state.passengersInfo as PassengerInfo,
      passengersCount: state.passengersCount as PassengersCount,
    },
  }))
);
