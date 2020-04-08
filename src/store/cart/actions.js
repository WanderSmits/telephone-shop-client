import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

import { selectUser } from "../user/selectors";
import { selectToken } from "../user/selectors";

export const fetchCartProductsSuccess = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const addToCart = (id) => {
  return async (dispatch, getState) => {
    console.log(`what is id?`, id);
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/products/${id}`);
      // console.log(response.data);
      dispatch(fetchCartProductsSuccess(response.data));

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
