export interface PassengersCount {
  adults: number;
  children: number;
  infants: number;
}

export interface Flight {
  fromKey: string;
  toKey: string;
  forwardDate: string;
  backDate?: string;
}

export interface FlightRes {
  avaible: number;
  flightNumber: string;
  timeMins: number;
  form: {
    key: string;
    country: string;
    city: string;
    name: string;
    gmt: string;
  };
  to: {
    key: string;
    country: string;
    city: string;
    name: string;
    gmt: string;
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

export interface AirportsRes {
  key: string;
  country: string;
  city: string;
  name: string;
}
