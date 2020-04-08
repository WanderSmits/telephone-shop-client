import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";
// import { selectToken } from "../user/selectors";

export const POST_QUESTION_FORM = "POST_QUESTION_FORM";

export const postQuestionFormSuccess = (questions) => ({
  type: POST_QUESTION_FORM,
  payload: questions,
});

export const postQuestionForm = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    try {
      const response = await axios.get(`${apiUrl}/support`);

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
