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

    dispatch({
      type: "POST_ORDER",
    });

    dispatch(appDoneLoading());
  };
};
