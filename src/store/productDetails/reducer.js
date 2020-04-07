import { PRODUCT_DETAILS_FETCHED } from "./actions";

const initialState = {
  loading: false, 
  productName: null, 
  imageUrl: null, 
  price: null, 
  description: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case PRODUCT_DETAILS_FETCHED:
      return {...action.payload };

    default:
      return state;
  }
};