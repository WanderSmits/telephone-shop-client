import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const postPhoneOrder = () => {
  return async (dispatch, getState) => {
    const state = getState();

    console.log("What is my state?", state);

    dispatch(appLoading());

    // const response = await axios.post(`${apiUrl}/products/order`);

    // console.log("Response?", response.data)

    dispatch({
      type: "POST_ORDER",
      // payload: response.data,
      payload: state,
    });
    dispatch(appDoneLoading());
  };
};
