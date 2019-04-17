import { combineReducers } from "redux";
import discountCodeReducer from "./discountReducer";

export default combineReducers({
  discountCode: discountCodeReducer
});
