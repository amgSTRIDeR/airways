import { BookingPageState } from '@redux/models/state.models';
import { createReducer, on } from '@ngrx/store';
import { BookingActions } from '@redux/actions/booking-page.actions';

export const initialState: BookingPageState = {
  id: 'SomeId',
  onBookingPage: false,
  currentPageDirection: 'flight',
  isEditWindowOpen: false,
  totalPrice: null,
  selectedForwardFlight: null,
  selectedBackFlight: null,
  selectedFlightCounter: {
    value: 0,
  },
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
        baggageBig: 0,
        baggageSmall: 0,
        seat: '33',
      },
      {
        firstName: 'Anna',
        lastName: 'arabei',
        gender: 'female',
        birthdayDate: '2023-05-01T22:00:00.000Z',
        invalid: 'false',
        baggageBig: 0,
        baggageSmall: 0,
        seat: '33',
      },
    ],
    child: [
      {
        firstName: 'Pavel',
        lastName: 'arabei',
        gender: 'male',
        birthdayDate: '2023-05-01T22:00:00.000Z',
        invalid: 'true',
        baggageBig: 0,
        baggageSmall: 0,
        seat: '33',
      },
    ],
    infant: [
      {
        firstName: 'Pavel',
        lastName: 'arabei',
        gender: 'male',
        birthdayDate: '2023-05-01T22:00:00.000Z',
        invalid: 'true',
        baggageBig: 0,
        baggageSmall: 0,
        seat: '33',
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
    adults: 1,
    children: 0,
    infants: 0,
  },
  availableFlights: [
    {
      seats: {
        total: 405,
        avaible: 239,
      },
      flightNumber: 'VG-6186',
      timeMins: 200,
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
      takeoffDate: '2023-09-21T10:25:00.000Z',
      landingDate: '2023-09-21T13:40:00.000Z',
      price: {
        eur: 138,
        usd: 152.2278,
        rub: 12208.86,
        pln: 633.42,
      },
      otherFlights: {
        '1': {
          seats: {
            total: 124,
            avaible: 83,
          },
          flightNumber: 'DE-3563',
          timeMins: 200,
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
          takeoffDate: '2023-09-22T11:10:00.000Z',
          landingDate: '2023-09-22T14:25:00.000Z',
          price: {
            eur: 142,
            usd: 156.6402,
            rub: 12562.74,
            pln: 651.78,
          },
        },
        '2': {
          seats: {
            total: 274,
            avaible: 112,
          },
          flightNumber: 'HZ-2293',
          timeMins: 191,
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
          takeoffDate: '2023-09-23T20:27:00.000Z',
          landingDate: '2023-09-23T23:42:00.000Z',
          price: {
            eur: 139,
            usd: 153.33089999999999,
            rub: 12297.33,
            pln: 638.01,
          },
        },
        '3': {
          seats: {
            total: 323,
            avaible: 166,
          },
          flightNumber: 'PN-4075',
          timeMins: 194,
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
          takeoffDate: '2023-09-24T03:20:00.000Z',
          landingDate: '2023-09-24T06:35:00.000Z',
          price: {
            eur: 118,
            usd: 130.1658,
            rub: 10439.46,
            pln: 541.62,
          },
        },
        '5': {
          seats: {
            total: 426,
            avaible: 33,
          },
          flightNumber: 'TJ-1310',
          timeMins: 192,
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
          takeoffDate: '2023-09-26T10:19:00.000Z',
          landingDate: '2023-09-26T13:34:00.000Z',
          price: {
            eur: 126,
            usd: 138.9906,
            rub: 11147.22,
            pln: 578.34,
          },
        },
        '-5': {
          seats: {
            total: 147,
            avaible: 122,
          },
          flightNumber: 'JH-7743',
          timeMins: 199,
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
          takeoffDate: '2023-09-16T17:18:00.000Z',
          landingDate: '2023-09-16T20:33:00.000Z',
          price: {
            eur: 137,
            usd: 151.1247,
            rub: 12120.39,
            pln: 628.8299999999999,
          },
        },
        '-4': {
          seats: {
            total: 309,
            avaible: 185,
          },
          flightNumber: 'BU-6054',
          timeMins: 199,
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
          takeoffDate: '2023-09-17T10:11:00.000Z',
          landingDate: '2023-09-17T13:26:00.000Z',
          price: {
            eur: 152,
            usd: 167.6712,
            rub: 13447.44,
            pln: 697.68,
          },
        },
        '-3': {
          seats: {
            total: 178,
            avaible: 71,
          },
          flightNumber: 'ZC-8320',
          timeMins: 190,
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
          takeoffDate: '2023-09-18T13:49:00.000Z',
          landingDate: '2023-09-18T17:04:00.000Z',
          price: {
            eur: 130,
            usd: 143.403,
            rub: 11501.1,
            pln: 596.6999999999999,
          },
        },
        '-2': {
          seats: {
            total: 249,
            avaible: 35,
          },
          flightNumber: 'LZ-5547',
          timeMins: 199,
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
          takeoffDate: '2023-09-19T19:42:00.000Z',
          landingDate: '2023-09-19T22:57:00.000Z',
          price: {
            eur: 123,
            usd: 135.6813,
            rub: 10881.81,
            pln: 564.5699999999999,
          },
        },
        '-1': {
          seats: {
            total: 436,
            avaible: 108,
          },
          flightNumber: 'XW-8160',
          timeMins: 192,
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
          takeoffDate: '2023-09-20T02:11:00.000Z',
          landingDate: '2023-09-20T05:26:00.000Z',
          price: {
            eur: 150,
            usd: 165.465,
            rub: 13270.5,
            pln: 688.5,
          },
        },
      },
    },
    {
      seats: {
        total: 406,
        avaible: 14,
      },
      flightNumber: 'YG-717',
      timeMins: 198,
      form: {
        key: 'MAD',
        name: 'Barajas',
        city: 'Madrid',
        gmt: '+1.0',
        country: 'Spain',
      },
      to: {
        key: 'AMS',
        name: 'Amsterdam-Schiphol',
        city: 'Amsterdam',
        gmt: '+1.0',
        country: 'Netherlands',
      },
      takeoffDate: '2023-10-11T11:43:00.000Z',
      landingDate: '2023-10-11T14:58:00.000Z',
      price: {
        eur: 618,
        usd: 681.7158,
        rub: 54674.46,
        pln: 2836.62,
      },
      otherFlights: {
        '2': {
          seats: {
            total: 237,
            avaible: 79,
          },
          flightNumber: 'BW-5576',
          timeMins: 196,
          form: {
            key: 'MAD',
            name: 'Barajas',
            city: 'Madrid',
            gmt: '+1.0',
            country: 'Spain',
          },
          to: {
            key: 'AMS',
            name: 'Amsterdam-Schiphol',
            city: 'Amsterdam',
            gmt: '+1.0',
            country: 'Netherlands',
          },
          takeoffDate: '2023-10-13T00:43:00.000Z',
          landingDate: '2023-10-13T03:58:00.000Z',
          price: {
            eur: 611,
            usd: 673.9941,
            rub: 54055.17,
            pln: 2804.49,
          },
        },
        '3': {
          seats: {
            total: 200,
            avaible: 127,
          },
          flightNumber: 'SN-5198',
          timeMins: 191,
          form: {
            key: 'MAD',
            name: 'Barajas',
            city: 'Madrid',
            gmt: '+1.0',
            country: 'Spain',
          },
          to: {
            key: 'AMS',
            name: 'Amsterdam-Schiphol',
            city: 'Amsterdam',
            gmt: '+1.0',
            country: 'Netherlands',
          },
          takeoffDate: '2023-10-14T19:00:00.000Z',
          landingDate: '2023-10-14T22:15:00.000Z',
          price: {
            eur: 604,
            usd: 666.2724,
            rub: 53435.88,
            pln: 2772.36,
          },
        },
        '4': {
          seats: {
            total: 143,
            avaible: 54,
          },
          flightNumber: 'MH-6614',
          timeMins: 199,
          form: {
            key: 'MAD',
            name: 'Barajas',
            city: 'Madrid',
            gmt: '+1.0',
            country: 'Spain',
          },
          to: {
            key: 'AMS',
            name: 'Amsterdam-Schiphol',
            city: 'Amsterdam',
            gmt: '+1.0',
            country: 'Netherlands',
          },
          takeoffDate: '2023-10-15T06:23:00.000Z',
          landingDate: '2023-10-15T09:38:00.000Z',
          price: {
            eur: 606,
            usd: 668.4786,
            rub: 53612.82,
            pln: 2781.54,
          },
        },
        '5': {
          seats: {
            total: 133,
            avaible: 85,
          },
          flightNumber: 'OS-3149',
          timeMins: 195,
          form: {
            key: 'MAD',
            name: 'Barajas',
            city: 'Madrid',
            gmt: '+1.0',
            country: 'Spain',
          },
          to: {
            key: 'AMS',
            name: 'Amsterdam-Schiphol',
            city: 'Amsterdam',
            gmt: '+1.0',
            country: 'Netherlands',
          },
          takeoffDate: '2023-10-16T22:09:00.000Z',
          landingDate: '2023-10-17T01:24:00.000Z',
          price: {
            eur: 615,
            usd: 678.4064999999999,
            rub: 54409.05,
            pln: 2822.85,
          },
        },
        '-4': {
          seats: {
            total: 457,
            avaible: 118,
          },
          flightNumber: 'MC-7135',
          timeMins: 200,
          form: {
            key: 'MAD',
            name: 'Barajas',
            city: 'Madrid',
            gmt: '+1.0',
            country: 'Spain',
          },
          to: {
            key: 'AMS',
            name: 'Amsterdam-Schiphol',
            city: 'Amsterdam',
            gmt: '+1.0',
            country: 'Netherlands',
          },
          takeoffDate: '2023-10-07T15:21:00.000Z',
          landingDate: '2023-10-07T18:36:00.000Z',
          price: {
            eur: 608,
            usd: 670.6848,
            rub: 53789.76,
            pln: 2790.72,
          },
        },
        '-3': {
          seats: {
            total: 250,
            avaible: 69,
          },
          flightNumber: 'ND-464',
          timeMins: 199,
          form: {
            key: 'MAD',
            name: 'Barajas',
            city: 'Madrid',
            gmt: '+1.0',
            country: 'Spain',
          },
          to: {
            key: 'AMS',
            name: 'Amsterdam-Schiphol',
            city: 'Amsterdam',
            gmt: '+1.0',
            country: 'Netherlands',
          },
          takeoffDate: '2023-10-08T18:46:00.000Z',
          landingDate: '2023-10-08T22:01:00.000Z',
          price: {
            eur: 632,
            usd: 697.1591999999999,
            rub: 55913.04,
            pln: 2900.88,
          },
        },
        '-2': {
          seats: {
            total: 291,
            avaible: 45,
          },
          flightNumber: 'LF-6007',
          timeMins: 197,
          form: {
            key: 'MAD',
            name: 'Barajas',
            city: 'Madrid',
            gmt: '+1.0',
            country: 'Spain',
          },
          to: {
            key: 'AMS',
            name: 'Amsterdam-Schiphol',
            city: 'Amsterdam',
            gmt: '+1.0',
            country: 'Netherlands',
          },
          takeoffDate: '2023-10-09T21:39:00.000Z',
          landingDate: '2023-10-10T00:54:00.000Z',
          price: {
            eur: 601,
            usd: 662.9630999999999,
            rub: 53170.47,
            pln: 2758.5899999999997,
          },
        },
      },
    },
  ],
};
export const BookingPageReducer = createReducer(
  initialState,
  on(BookingActions.PassengersCount, (state, action) => ({
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
  on(BookingActions.SelectForwardFlight, (state, action) => ({
    ...state,
    selectedForwardFlight: action,
  })),
  on(BookingActions.SelectBackFlight, (state, action) => ({
    ...state,
    selectedBackFlight: action,
  })),
  on(BookingActions.SelectedFlightCounter, (state, action) => ({
    ...state,
    selectedFlightCounter: action,
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
  })),
  on(BookingActions.ClearBookingPageState, (state) => ({
    ...state,
    onBookingPage: false,
    id: null,
    currentPageDirection: 'flight',
    isEditWindowOpen: false,
    totalPrice: null,
    flights: null,
    passengersInfo: null,
    allInformation: null,
    readyFlight: null,
    passengersCount: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    selectedForwardFlight: null,
    selectedBackFlight: null,
    selectedFlightCounter: {
      value: 0,
    },
    availableFlights: null,
  }))
  // on(BookingActions.ChangeAvailableSeats, (state, action) => {
  //   const flights = state.flights;
  //
  //   const newFlights = changeSeats(action.seats, flights);
  //   if (newFlights === null) return { ...state };
  //   else
  //     return {
  //       ...state,
  //       flights: newFlights,
  //     };
  // })
);

// function changeSeats(
//   seatsIndex: { i: number; j: number },
//   flights: SelectedFlight | null
// ) {
//   if (!flights) return null;
//   const flight = { ...flights };
//   const availableSeats = flight?.forwardFlight?.seats.avaibleArr;
//   if (!availableSeats || !flight.forwardFlight) return null;
//   flight.forwardFlight.seats.avaibleArr = changeSeatArr(
//     availableSeats,
//     seatsIndex
//   );
//   return flight;
// }
//
// function changeSeatArr(
//   seats: (string | boolean)[][],
//   seatsIndex: { i: number; j: number }
// ) {
//   const newSeats = [...seats];
//   const SeatI = newSeats[seatsIndex.i];
//   const SeatJ = [
//     ...[...SeatI].slice(0, seatsIndex.j),
//     false,
//     ...[...SeatI].slice(seatsIndex.j + 1),
//   ];
//   const newSeatI = [
//     ...[...newSeats].slice(0, seatsIndex.i),
//     SeatJ,
//     ...[...newSeats].slice(seatsIndex.i + 1),
//   ];
//   console.log(7788);
//   return newSeatI;
// }
