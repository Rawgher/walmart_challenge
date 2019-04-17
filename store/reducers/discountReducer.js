import { DISCOUNT_CODE } from "../actions/actionTypes";

const initialState = {
  value: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DISCOUNT_CODE:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
}
