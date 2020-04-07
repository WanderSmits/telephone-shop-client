
import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage
} from "../appState/actions";
// import { selectToken } from "../user/selectors";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});


export const fetchProducts = () => {
    return async (dispatch, getState) => {
      dispatch(appLoading());
  
      try {
        const response = await axios.get(`${apiUrl}/products`);
  
        // console.log(response.data);
        dispatch(fetchProductsSuccess(response.data));
        dispatch(appDoneLoading());
      } catch (error) {
        if (error.response) {
          // console.log(error.response.message);
          dispatch(setMessage("danger", true, error.response.data.message));
        } else {
          // console.log(error);
          dispatch(setMessage("danger", true, error.message));
        }
        dispatch(appDoneLoading());
      }
    };
  };