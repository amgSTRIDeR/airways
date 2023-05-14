import { createAction, props } from '@ngrx/store';
import {
  AirportsRes,
  FlightsRes,
  IDate,
  PassengersCount,
} from '@redux/models/main-page.models';

const PassengersCount = createAction(
  '[MAIN PAGE] Passengers count',
  props<PassengersCount>()
);

const LoadAirports = createAction('[MAIN PAGE] Load Airports');

const LoadAirportsSuccess = createAction(
  '[MAIN PAGE] Load Airports Success',
  props<{ airports: AirportsRes[] }>()
);

const LoadAirportsError = createAction(
  '[MAIN PAGE] Load Airports Error',
  props<{ error: string }>()
);

const FlightForward = createAction(
  '[MAIN PAGE] Flight forward',
  props<IDate>()
);

const FlightBack = createAction('[MAIN PAGE] Flight back', props<IDate>());

const AirportForward = createAction(
  '[MAIN PAGE] Airport forward',
  props<AirportsRes>()
);

const AirportBack = createAction(
  '[MAIN PAGE] Airport back',
  props<AirportsRes>()
);

const FlightsForBooking = createAction(
  '[MAIN PAGE] Flights for booking',
  props<FlightsRes>()
);

const FlightsForBookingReturn = createAction(
  '[MAIN PAGE] Flights for booking return',
  props<FlightsRes>()
);

export const MainPageActions = {
  PassengersCount,
  LoadAirports,
  LoadAirportsSuccess,
  LoadAirportsError,
  FlightForward,
  FlightBack,
  AirportForward,
  AirportBack,
  FlightsForBooking,
  FlightsForBookingReturn,
};
