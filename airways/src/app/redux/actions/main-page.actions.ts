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
  '[MAIN PAGE] Airport back',
  props<FlightsRes>()
);

export const MainPageActions = {
  PassengersCount,
  FlightForward,
  FlightBack,
  AirportForward,
  AirportBack,
  FlightsForBooking,
};

// const selectCurrency = createAction(
//   '[Settings] Select Currency',
//   props<CurrencyI>()
// );

// const selectDateType = createAction(
//   '[Settings] Select DateType',
//   props<DateI>()
// );

// export const SettingsActions = {
//   selectDateType,
//   selectCurrency,
// };
