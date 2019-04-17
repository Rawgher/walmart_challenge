import { DISCOUNT_APPLIED } from "../actions/actionTypes";

const initialState = {
  discountCode: "",
  estTotal: 108.03
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DISCOUNT_APPLIED:
      return {
        ...state,
        discountCode: action.payload,
        estTotal: 108.03 * 0.9
      };
    default:
      return state;
  }
}
