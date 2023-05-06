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
  currentPageDirection: 'review',
  isEditWindowOpen: false,
  flights: {
    twoWays: true,
    forwardFlight: {
      avaible: 294,
      flightNumber: 'PS-3911',
      timeMins: 412,
      form: {
        key: 'AMS',
        name: 'Amsterdam-Schiphol',
        city: 'Amsterdam',
        gmt: '+1.0',
        country: 'Netherlands',
      },
      to: {
        key: 'MAD',
        name: 'Barajas',
        city: 'Madrid',
        gmt: '+1.0',
        country: 'Spain',
      },
      takeoffDate: '2023-09-22T16:48:00.000Z',
      landingDate: '2023-09-22T23:36:00.000Z',
      price: {
        eur: 470,
        usd: 518.457,
        rub: 41580.9,
        pln: 2157.2999999999997,
      },
    },
    backFlight: {
      avaible: 294,
      flightNumber: 'PS-3911',
      timeMins: 412,
      form: {
        key: 'AMS',
        name: 'Amsterdam-Schiphol',
        city: 'Amsterdam',
        gmt: '+1.0',
        country: 'Netherlands',
      },
      to: {
        key: 'MAD',
        name: 'Barajas',
        city: 'Madrid',
        gmt: '+1.0',
        country: 'Spain',
      },
      takeoffDate: '2023-09-22T16:48:00.000Z',
      landingDate: '2023-09-22T23:36:00.000Z',
      price: {
        eur: 470,
        usd: 518.457,
        rub: 41580.9,
        pln: 2157.2999999999997,
      },
    },
  },
  passengersInfo: {
    adult: [
      {
        firstName: 'Pavel',
        lastName: 'arabei',
        gender: 'male',
        birthdayDate: 'Sat May 06 2003 15:55:10',
        invalid: 'true',
      },
      {
        firstName: 'Anna',
        lastName: 'arabei',
        gender: 'female',
        birthdayDate: 'Sat May 06 2003 15:55:10',
        invalid: 'false',
      },
    ],
    child: [
      {
        firstName: 'Pavel',
        lastName: 'arabei',
        gender: 'male',
        birthdayDate: 'Sat May 06 2003 15:55:10',
        invalid: 'true',
      },
    ],
    infant: [
      {
        firstName: 'Pavel',
        lastName: 'arabei',
        gender: 'male',
        birthdayDate: 'Sat May 06 2003 15:55:10',
        invalid: 'true',
      },
    ],
    details: {
      countryCode: 'string',
      phone: '777-55-88',
      email: 'Pahsdfsdf@gmail.com',
    },
  },
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
  on(BookingActions.OnReviewSubPage, (state) => ({
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
