import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookingPageState } from '@redux/models/state.models';
import { selectMainPage } from '@redux/selectors/main-page.selectors';

export const selectBooking = createFeatureSelector<BookingPageState>('booking');
const idSelector = createSelector(selectBooking, (state) => state.id);
const onBookingPageSelector = createSelector(
  selectBooking,
  (state) => state.onBookingPage
);
const currentPageDirectionSelector = createSelector(
  selectBooking,
  (state) => state.currentPageDirection
);
const isEditWindowOpenSelector = createSelector(
  selectBooking,
  (state) => state.isEditWindowOpen
);
const flightsSelector = createSelector(selectBooking, (state) => state.flights);
const passengersInfoSelector = createSelector(
  selectBooking,
  (state) => state.passengersInfo
);
const allInformationSelector = createSelector(
  selectBooking,
  selectMainPage,
  (bookState, MainState) => ({
    flights: bookState.flights,
    passengersInfo: bookState.passengersInfo,
    passengersCount: MainState.passengersCount,
    total: bookState.totalPrice,
    id: bookState.id,
  })
);

const AvailableFlightsSelector = createSelector(
  selectBooking,
  (state) => state.availableFlights
);

export const BookingSelectors = {
  idSelector,
  onBookingPageSelector,
  currentPageDirectionSelector,
  isEditWindowOpenSelector,
  flightsSelector,
  passengersInfoSelector,
  allInformationSelector,
  AvailableFlightsSelector,
};
