import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import products from "./products/reducer";
import productDetails from "./productDetails/reducer";
import cart from "./cart/reducer";

export default combineReducers({
  appState,
  user,
  products,
  productDetails,
  cart,
});
