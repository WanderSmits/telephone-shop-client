import { POST_QUESTION_FORM } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_QUESTION_FORM:
      return [{...action.payload}];

    default:
      return state;
  }
};
