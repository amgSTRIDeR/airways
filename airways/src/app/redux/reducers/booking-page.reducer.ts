import { BookingPageState } from '@redux/models/state.models';
import { createReducer, on } from '@ngrx/store';
import { BookingActions } from '@redux/actions/booking-page.actions';
import { MainPageActions } from '@redux/actions/main-page.actions';

export const initialState: BookingPageState = {
  id: 'SomeId',
  onBookingPage: false,
  currentPageDirection: 'passengers',
  isEditWindowOpen: false,
  totalPrice: null,
  flights: {
    twoWays: true,
    forwardFlight: {
      seats: {
        total: 676,
        avaible: 319,
      },
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
      seats: {
        total: 676,
        avaible: 319,
      },
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
        birthdayDate: '2023-05-01T22:00:00.000Z',
        invalid: 'true',
      },
      {
        firstName: 'Anna',
        lastName: 'arabei',
        gender: 'female',
        birthdayDate: '2023-05-01T22:00:00.000Z',
        invalid: 'false',
      },
    ],
    child: [
      {
        firstName: 'Pavel',
        lastName: 'arabei',
        gender: 'male',
        birthdayDate: '2023-05-01T22:00:00.000Z',
        invalid: 'true',
      },
    ],
    infant: [
      {
        firstName: 'Pavel',
        lastName: 'arabei',
        gender: 'male',
        birthdayDate: '2023-05-01T22:00:00.000Z',
        invalid: 'true',
      },
    ],
    details: {
      countryCode: '+591',
      phone: '7777777',
      email: 'Pahsdfsdf@gmail.com',
    },
  },
  allInformation: null,
  readyFlight: null,
  passengersCount: {
    adults: 2,
    children: 1,
    infants: 1,
  },
  availableFlights: null,
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
  on(BookingActions.AddTotalPrice, (state, action) => ({
    ...state,
    totalPrice: action,
  })),
  on(BookingActions.EditFlightAction, (state, action) => ({
    ...state,
    id: action.id,
    flights: action.flights,
    passengersInfo: action.passengersInfo,
    passengersCount: action.passengersCount,
    totalPrice: action.totalPrice,
    currentPageDirection: 'flight',
    onBookingPage: true,
  })),
  on(BookingActions.LoadAvailableFlightsSuccess, (state, action) => ({
    ...state,
    availableFlights: action.availableFlights,
  }))
);
