const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "POST_ORDER":
      return [];

    default:
      return state;
  }
};
