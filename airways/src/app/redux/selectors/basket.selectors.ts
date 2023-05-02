import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BasketPageState } from '@redux/models/state.models';

export const selectBasket = createFeatureSelector<BasketPageState>('basket');
const Sort = createSelector(selectBasket, (state) => ({
  sort: state.sortType,
  reverse: state.isReverse,
}));

const Flight = createSelector(selectBasket, (state) => state.flight);
const TotalPrice = createSelector(selectBasket, (state) => state.totalPrice);

export const BasketSelectors = {
  Sort,
  Flight,
  TotalPrice,
};
