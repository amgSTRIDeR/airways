import { createAction, props } from '@ngrx/store';
import {
  AirportsRes,
  Flight,
  FlightRes,
  PassengersCount,
} from '@redux/models/main-page.models';

const PassengersCount = createAction(
  '[MAIN PAGE] Passengers count',
  props<PassengersCount>()
);

const FlightStart = createAction('[MAIN PAGE] Flight Start', props<Flight>());

const FlightSuccess = createAction(
  '[MAIN PAGE] Flight Success',
  props<{ flight: FlightRes[] }>()
);
const FlightError = createAction(
  '[MAIN PAGE] Flight Error',
  props<{ error: string }>()
);
const AirportsForwardStart = createAction(
  '[MAIN PAGE] Airports Start',
  props<{ search: string }>
);
const AirportsForwardSuccess = createAction(
  '[MAIN PAGE] Airports Success',
  props<AirportsRes>()
);
const AirportsForwardError = createAction(
  '[MAIN PAGE] Airports Error',
  props<{ error: string }>()
);
const AirportsBackStart = createAction(
  '[MAIN PAGE] Airports Start',
  props<{ search: string }>
);
const AirportsBackSuccess = createAction(
  '[MAIN PAGE] Airports Success',
  props<AirportsRes>()
);
const AirportsBackError = createAction(
  '[MAIN PAGE] Airports Error',
  props<{ error: string }>()
);

export const MainPageActions = {
  PassengersCount,
  FlightStart,
  FlightSuccess,
  FlightError,
  AirportsForwardStart,
  AirportsForwardSuccess,
  AirportsForwardError,
  AirportsBackStart,
  AirportsBackSuccess,
  AirportsBackError,
};
