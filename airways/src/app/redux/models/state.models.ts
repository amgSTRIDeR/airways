import { CurrencyType, DateType } from '@redux/models/settings.models';
import { UserRes } from '@redux/models/auth.models';
import {
  AirportsRes,
  FlightRes,
  PassengersCount,
} from '@redux/models/main-page.models';
import {
  AllInformation,
  PassengerInfo,
  ReadyFlight,
  SelectedFlight,
} from '@redux/models/booking-page.models';
import { BasketFlight, sort } from '@redux/models/basket.models';

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
  AirportsForward: AirportsRes | null;
  AirportsBack: AirportsRes | null;
  FlightForward: FlightRes | null;
  FlightBack: FlightRes | null;
  AirportsForwardError: string | null;
  AirportsBackError: string | null;
  FlightError: string | null;
}

export type CurrentPageDirection = 'flight' | 'passengers' | 'review';

export interface BookingPageState {
  passengersCount: PassengersCount | null;
  onBookingPage: boolean;
  currentPageDirection: CurrentPageDirection;
  isEditWindowOpen: boolean;
  flights: SelectedFlight | null;
  passengersInfo: PassengerInfo | null;
  allInformation: AllInformation | null;
  readyFlight: ReadyFlight | null;
}

export interface BasketPageState {
  sortType: sort;
  isReverse: boolean;
  flight: BasketFlight[];
  discont: number;
  totalPrice: number;
  promoCode: '1111';
}
