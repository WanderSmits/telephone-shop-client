const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "POST_ORDER":
      [...state, { ...action.payload }];

    default:
      return state;
  }
};
