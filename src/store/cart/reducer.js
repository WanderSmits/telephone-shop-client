const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case "POST_ORDER":
      //what is my state?
      console.log("State?", state, action.payload);

      return { ...state, ...action.payload };

    default:
      return state;
  }
};
