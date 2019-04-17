import { DISCOUNT_CODE } from "./actionTypes";

export const handleChange = value => dispatch => {
  dispatch({
    type: DISCOUNT_CODE,
    payload: value
  });
};
