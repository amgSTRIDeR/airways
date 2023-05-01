import { CurrencyType, DateType } from '@redux/models/settings.models';
import { UserRes } from '@redux/models/auth.models';
import {
  AirportsRes,
  FlightRes,
  PassengersCount,
} from '@redux/models/main-page.models';

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
