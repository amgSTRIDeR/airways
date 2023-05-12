import { BasketPageState } from '@redux/models/state.models';
import { createReducer, on } from '@ngrx/store';
import { BaskedActions } from '@redux/actions/bascet.actions';
import { Order } from '@redux/models/basket.models';

const totalPrise = (orders: Order[] | undefined) => {
  if (orders === undefined) return 0;
  return orders.reduce((acc, order) => {
    if (order.isChecked) acc += +order.total.totalPrice;
    return acc;
  }, 0);
};

const checkFlight = (orders: Order[], id: string) => {
  return orders.map((el) => {
    if (el.id === id) {
      el = { ...el, isChecked: !el.isChecked };
    }
    return el;
  });
};

const notCheckedFlight = (orders: Order[]) => {
  return orders.filter((el) => el.isChecked);
};
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
  orders: [
    {
      flights: {
        twoWays: true,
        forwardFlight: {
          seats: {
            total: 676,
            avaible: 319,
          },
          flightNumber: 'PS-3911',
          timeMins: 412,
          form: {
            key: 'AMS',
            name: 'Amsterdam-Schiphol',
            city: 'Amsterdam',
            gmt: '+1.0',
            country: 'Netherlands',
          },
          to: {
            key: 'MAD',
            name: 'Barajas',
            city: 'Madrid',
            gmt: '+1.0',
            country: 'Spain',
          },
          takeoffDate: '2023-09-22T16:48:00.000Z',
          landingDate: '2023-09-22T23:36:00.000Z',
          price: {
            eur: 470,
            usd: 518.457,
            rub: 41580.9,
            pln: 2157.2999999999997,
          },
        },
        backFlight: {
          seats: {
            total: 676,
            avaible: 319,
          },
          flightNumber: 'PS-3911',
          timeMins: 412,
          form: {
            key: 'AMS',
            name: 'Amsterdam-Schiphol',
            city: 'Amsterdam',
            gmt: '+1.0',
            country: 'Netherlands',
          },
          to: {
            key: 'MAD',
            name: 'Barajas',
            city: 'Madrid',
            gmt: '+1.0',
            country: 'Spain',
          },
          takeoffDate: '2023-09-22T16:48:00.000Z',
          landingDate: '2023-09-22T23:36:00.000Z',
          price: {
            eur: 470,
            usd: 518.457,
            rub: 41580.9,
            pln: 2157.2999999999997,
          },
        },
      },
      passengersInfo: {
        adult: [
          {
            firstName: 'Pavel',
            lastName: 'arabei',
            gender: 'male',
            birthdayDate: '2023-05-01T22:00:00.000Z',
            invalid: 'true',
          },
          {
            firstName: 'Anna',
            lastName: 'arabei',
            gender: 'female',
            birthdayDate: '2023-05-01T22:00:00.000Z',
            invalid: 'false',
          },
        ],
        child: [
          {
            firstName: 'Pavel',
            lastName: 'arabei',
            gender: 'male',
            birthdayDate: '2023-05-01T22:00:00.000Z',
            invalid: 'true',
          },
        ],
        infant: [
          {
            firstName: 'Pavel',
            lastName: 'arabei',
            gender: 'male',
            birthdayDate: '2023-05-01T22:00:00.000Z',
            invalid: 'true',
          },
        ],
        details: {
          countryCode: '+355',
          phone: '7777777',
          email: 'Pahsdfsdf@gmail.com',
        },
      },
      passengersCount: {
        adults: 1,
        children: 1,
        infants: 1,
      },
      total: {
        adult: {
          name: 'adult',
          count: 3,
          fare: 2820,
          tax: 1410,
          allPrice: 4230,
        },
        child: {
          name: 'child',
          count: 2,
          fare: 1316,
          tax: 658,
          allPrice: 1974,
        },
        infant: {
          name: 'infant',
          count: 2,
          fare: 376,
          tax: 188,
          allPrice: 564,
        },
        totalPrice: 6768,
      },
      id: 'SomeId',
      isChecked: true,
    },
  ],
  discont: 0.7,
  totalPrice: 6768,
  promoCode: '1111',
};

export const BasketPageReducer = createReducer(
  initialState,
  on(BaskedActions.AddFlight, (state, action) => {
    const isOrderExist = !!state.orders.find((order) => order.id === action.id);
    let newOrders: Order[];
    if (isOrderExist)
      newOrders = [
        ...state.orders.filter((order) => order.id !== action.id),
        action,
      ];
    else newOrders = [...state.orders, action];

    return {
      ...state,
      orders: newOrders,
      totalPrice: totalPrise(newOrders),
    };
  }),
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
  on(BaskedActions.DeleteFlight, (state, action) => {
    const newOrders = deleteFlight(state.orders, action.id);
    return {
      ...state,
      orders: newOrders,
      totalPrice: totalPrise(newOrders),
    };
  }),
  on(BaskedActions.Pay, (state) => ({
    ...state,
    orders: notCheckedFlight(state.orders),
  })),
  on(BaskedActions.CheckFlight, (state, action) => {
    const newOrders = checkFlight(state.orders, action.id);
    return {
      ...state,
      orders: newOrders,
      totalPrice: totalPrise(newOrders),
    };
  })
);
