import { BasketPageState } from '@redux/models/state.models';
import { createReducer, on } from '@ngrx/store';
import { BaskedActions } from '@redux/actions/bascet.actions';
import { Order } from '@redux/models/basket.models';

const changeReverse = (
  sortPrev: string,
  sortNext: string,
  isReverse: boolean
): boolean => {
  if (sortPrev === sortNext) return !isReverse;
  else return false;
};
export const promoF = (
  promoCode: string,
  currentPromoCode: string,
  totalPrice: number,
  discont: number
): number =>
  promoCode === currentPromoCode ? totalPrice * discont : totalPrice;

export const deleteFlight = (flight: Order[], id: string): Order[] =>
  flight.filter((el) => el.id !== id);

export const initialState: BasketPageState = {
  sortType: 'Num',
  isReverse: false,
  orders: [],
  discont: 0.7,
  totalPrice: 0,
  promoCode: '1111',
};

export const BasketPageReducer = createReducer(
  initialState,
  on(BaskedActions.AddFlight, (state, action) => ({
    ...state,
    orders: [...state.orders, action],
  })),
  on(BaskedActions.SortAction, (state, action) => ({
    ...state,
    isReverse: changeReverse(state.sortType, action.sort, state.isReverse),
    sortType: action.sort,
  })),
  on(BaskedActions.PromoCode, (state, action) => ({
    ...state,
    totalPrice: promoF(
      action.code,
      state.promoCode,
      state.totalPrice,
      state.discont
    ),
  })),
  on(BaskedActions.DeleteFlight, (state, action) => ({
    ...state,
    orders: deleteFlight(state.orders, action.id),
  })),
  on(BaskedActions.Pay, (state) => ({
    ...state,
    orders: [],
  }))
);
