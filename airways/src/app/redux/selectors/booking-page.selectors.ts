import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookingPageState } from '@redux/models/state.models';
import { selectMainPage } from '@redux/selectors/main-page.selectors';

export const selectBooking = createFeatureSelector<BookingPageState>('booking');

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
    selectedFlight: bookState.flights,
    passengersInfo: bookState.passengersInfo,
    passengersCount: MainState.passengersCount,
  })
);

export const BookingSelectors = {
  onBookingPageSelector,
  currentPageDirectionSelector,
  isEditWindowOpenSelector,
  flightsSelector,
  passengersInfoSelector,
  allInformationSelector,
};
