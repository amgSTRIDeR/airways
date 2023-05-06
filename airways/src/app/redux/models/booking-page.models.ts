import { FlightRes, PassengersCount } from '@redux/models/main-page.models';

export interface SelectedFlight {
  twoWays: boolean;
  forwardFlight: FlightRes;
  backFlight?: FlightRes;
}

export interface passenger {
  firstName: string;
  lastName: string;
  gender: string;
  birthdayDate: string;
  invalid: string;
}

export interface PassengersDetails {
  countryCode: string;
  phone: string;
  email: string;
}

export interface PassengerInfo {
  adult: passenger[];
  child: passenger[];
  infant: passenger[];
  details: PassengersDetails;
}

export interface AllInformation {
  selectedFlight: SelectedFlight;
  passengersInfo: PassengerInfo;
  passengersCount: PassengersCount;
}

export interface ReadyFlight {
  flightNumber: string;
  flight: string[];
  tripType: string;
  prise: number;
}

export interface ReviewPageInfo {
  flightNumber: string;
  flight: string[];
  tripType: string;
}
