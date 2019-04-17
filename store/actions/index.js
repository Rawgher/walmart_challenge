import { DISCOUNT_APPLIED } from "./actionTypes";

export const discountApplied = e => dispatch => {
  dispatch({
    type: DISCOUNT_APPLIED,
    payload: e.target.value
  });
};
