import {
  PENDING,
  SET_CART_SUCCESS,
  SET_CART_ERROR
} from "../constants/actionTypes"

export function pending() {
  return {
    type: PENDING
  }
}

export function setCartSuccess(cart, total) {
  return {
    type: SET_CART_SUCCESS,
    payload: { cart, total }
  }
}

export function setCartListError(error) {
  return {
    type: SET_CART_ERROR,
    payload: { error }
  }
}