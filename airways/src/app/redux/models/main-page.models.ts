export interface PassengersCount {
  adults: number;
  children: number;
  infants: number;
}

export interface FlightLoadInformation {
  originAirportKey: string;
  destinationAirportKey: string;
  departureDate: Date;
  returnDate: Date | null;
}

export interface IDate {
  date: Date | null;
}

export interface FlightRes {
  seats: {
    total: number;
    avaible: number;
  };
  flightNumber: string;
  timeMins: number;
  form: {
    key: string;
    name: string;
    city: string;
    gmt: string;
    country: string;
  };
  to: {
    key: string;
    name: string;
    city: string;
    gmt: string;
    country: string;
  };
  takeoffDate: string;
  landingDate: string;
  price: {
    eur: number;
    usd: number;
    rub: number;
    pln: number;
  };
}

export interface FlightsRes extends FlightRes {
  otherFlights: {
    '1'?: FlightRes;
    '2'?: FlightRes;
    '3'?: FlightRes;
    '4'?: FlightRes;
    '5'?: FlightRes;
    '-5'?: FlightRes;
    '-4'?: FlightRes;
    '-3'?: FlightRes;
    '-2'?: FlightRes;
    '-1'?: FlightRes;
  };
}

export interface AirportsRes {
  key: string;
  country: string;
  city: string;
  name: string;
}
