import { combineReducers } from "redux";
import discountReducer from "./discountReducer";

export default combineReducers({
  discountCode: discountReducer
});