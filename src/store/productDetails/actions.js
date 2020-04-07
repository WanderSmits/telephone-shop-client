import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage
} from "../appState/actions";
// import { selectToken } from "../user/selectors";


export const PRODUCT_DETAILS_FETCHED = "PRODUCT_DETAILS_FETCHED";

const productDetailsFetched = product => ({
    type: PRODUCT_DETAILS_FETCHED,
    payload: product
  });


export const fetchProductById = id => {
    return async (dispatch, getState) => {
      dispatch(appLoading());
      try {
        const response = await axios.get(`${apiUrl}/products/${id}`);
        // console.log("RESPONSE FROM THE THUNK", response.data.product);
        dispatch(productDetailsFetched(response.data.product));
        dispatch(appDoneLoading());
      } catch (error) {
        if (error.response) {
          console.log(error.response.message);
          dispatch(setMessage("danger", true, error.response.data.message));
        } else {
          console.log(error);
          dispatch(setMessage("danger", true, error.message));
        }
        dispatch(appDoneLoading());
      }
    };
  };