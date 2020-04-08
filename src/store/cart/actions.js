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

export const postOrder = (productId) => {
  return async (dispatch, getState) => {
    const user = selectUser(getState());
    const token = selectToken(getState());

    const userId = parseInt(user.id);

    const products = productId;
    dispatch(appLoading());

    const response = await axios.post(
      `${apiUrl}/products/order`,
      {
        userId,
        productId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Response?", response.data);

    dispatch(setMessage("success", true, response.data.message));

    // dispatch({
    //   type: "POST_ORDER",
    //   payload: response.data,
    // });

    dispatch(appDoneLoading());
  };
};
