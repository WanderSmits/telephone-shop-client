import { FETCH_PRODUCTS_SUCCESS } from "./actions";

const initialState = {
  productName: null,
  price: null,
  details: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
   
    case FETCH_PRODUCTS_SUCCESS:
      return { ...action.payload };

    default:
      return state;
  }
};
