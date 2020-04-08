import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";
import { selectToken } from "../user/selectors";
import { selectUser } from "../../store/user/selectors";

export const POST_QUESTION_FORM = "POST_QUESTION_FORM";

export const postSupportSuccess = (question) => ({
  type: POST_QUESTION_FORM,
  payload: question
});


export const postSupport = (subject, description, link, reason) => {
  return async (dispatch, getState) => {
    try {
      const token = selectToken(getState());
      const user = selectUser(getState());
      const userId = parseInt(user.id)
      // console.log(subject, description, link, reason, userId);

      const response = await axios.post(
        `${apiUrl}/support`,
        {
          subject, 
          description, 
          link, 
          reason, 
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log("Yep!", response.data.newSupport);

      dispatch(
        showMessageWithTimeout("success", false, response.data.message, 300000)
      );
      dispatch(postSupportSuccess(response.data.newSupport));
    } catch (error) {
      if (error.response) {
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        dispatch(setMessage("danger", true, error.message));
      }
    }
  };
};