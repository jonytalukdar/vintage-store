import { DECREASE, INCREASE, REMOVE, CLEARCART, ADDTOCART } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case REMOVE: {
      return state.filter((item) => item.id !== action.payload);
    }

    case INCREASE: {
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : { ...item };
      });
    }

    case DECREASE: {
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
    }

    case CLEARCART:
      return [];

    case ADDTOCART: {
      const { id, title, image, price } = action.payload;
      let product = { id, title, image: image.url, price, amount: 1 };
      return [...state, product];
    }

    default:
      return state;
  }
};
