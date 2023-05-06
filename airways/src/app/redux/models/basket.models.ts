import { ReviewPageInfo } from '@redux/models/booking-page.models';

export type sort = 'flight' | 'Num' | 'trip' | 'date' | 'price';

export interface SortType {
  sort: sort;
}

export interface BasketFlight {
  id: string;
  isChecked: boolean;
  flight: ReviewPageInfo;
}
