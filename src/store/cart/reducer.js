const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //what is my state?
      console.log("State?", state, action.payload);

      return [...state, { ...action.payload }];

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};
