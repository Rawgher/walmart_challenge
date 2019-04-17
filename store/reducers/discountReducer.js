import { DISCOUNT_APPLIED } from "../actions/actionTypes";

const initialState = {
  discountCode: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DISCOUNT_APPLIED:
      return {
        ...state,
        discountCode: action.payload
      };
    default:
      return state;
  }
}
