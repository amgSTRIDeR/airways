import { createAction, props } from '@ngrx/store';
import {
  EditFlight,
  PassengerInfo,
  SelectedFlight,
  Total,
} from '@redux/models/booking-page.models';

const OnBookingPage = createAction('[BOOKING PAGE] On Booking Page');
const OutBookingPage = createAction('[BOOKING PAGE] Out Booking Page');
const OnFlightSubPage = createAction('[BOOKING PAGE] On FlightSubPage');
const OnPassengersSubPage = createAction('[BOOKING PAGE] On PassengersSubPage');
const OnReviewSubPage = createAction('[BOOKING PAGE] On ReviewSubPage');
const EditWindowToggle = createAction('[BOOKING PAGE] Edit WindowToggle');

const AddSelectedFlight = createAction(
  '[BOOKING PAGE] Add Selected Flight',
  props<SelectedFlight>()
);

const AddPassengersInformation = createAction(
  '[BOOKING PAGE] Add Passengers Information',
  props<PassengerInfo>()
);

const AddTotalPrice = createAction(
  '[BOOKING PAGE] Add Total Price',
  props<Total>()
);

const EditFlightAction = createAction(
  '[BOOKING PAGE] EditFlight',
  props<EditFlight>()
);

export const BookingActions = {
  OnBookingPage,
  OutBookingPage,
  OnFlightSubPage,
  OnPassengersSubPage,
  OnReviewSubPage,
  EditWindowToggle,
  AddSelectedFlight,
  AddPassengersInformation,
  AddTotalPrice,
  EditFlightAction,
};
