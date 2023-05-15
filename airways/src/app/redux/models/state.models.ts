import { CurrencyType, DateType } from '@redux/models/settings.models';
import { UserRes } from '@redux/models/auth.models';
import {
  AirportsRes,
  FlightsRes,
  PassengersCount,
} from '@redux/models/main-page.models';
import {
  AllInformation,
  PassengerInfo,
  ReadyFlight,
  SelectedFlight,
  Total,
} from '@redux/models/booking-page.models';
import { Order, sort } from '@redux/models/basket.models';

export interface SettingsState {
  currency: CurrencyType;
  dateType: DateType;
}

export interface AuthState {
  isLogged: boolean;
  token: string | null;
  email: string | null;
  user: UserRes | null;
  error: string | null;
}

export interface MainPageState {
  passengersCount: PassengersCount | null;
  isRoundTrip: boolean;
  airports: AirportsRes[];
  airportForward: AirportsRes | null;
  airportBack: AirportsRes | null;
  flightForward: Date | null;
  flightBack: Date | null;
}

export type CurrentPageDirection = 'flight' | 'passengers' | 'review';

export interface BookingPageState {
  id: string;
  passengersCount: PassengersCount | null;
  onBookingPage: boolean;
  currentPageDirection: CurrentPageDirection;
  isEditWindowOpen: boolean;
  flights: SelectedFlight | null;
  passengersInfo: PassengerInfo | null;
  allInformation: AllInformation | null;
  readyFlight: ReadyFlight | null;
  totalPrice: Total | null;
  availableFlights: FlightsRes[] | null;
}

export interface BasketPageState {
  sortType: sort;
  isReverse: boolean;
  orders: Order[];
  discont: number;
  totalPrice: number;
  promoCode: '1111';
}
