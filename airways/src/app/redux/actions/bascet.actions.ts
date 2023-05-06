import { createAction, props } from '@ngrx/store';
import { BasketFlight, SortType } from '@redux/models/basket.models';

const SortAction = createAction('[BASKET PAGE] Sort', props<SortType>());
const AddFlight = createAction(
  '[BASKET PAGE] Add Flight',
  props<BasketFlight>()
);
const PromoCode = createAction(
  '[BASKET PAGE] Promo Code',
  props<{ code: string }>()
);

const checkFlight = createAction(
  '[BASKET PAGE] Check Flight',
  props<{ id: string }>()
);

const DeleteFlight = createAction(
  '[BASKET PAGE] Delete Flight',
  props<{ id: string }>()
);

const EditFlight = createAction(
  '[BASKET PAGE] Edit Flight',
  props<{ id: string }>()
);

const Pay = createAction('[BASKET PAGE] Pay');

export const BaskedActions = {
  SortAction,
  AddFlight,
  PromoCode,
  checkFlight,
  DeleteFlight,
  EditFlight,
  Pay,
};
