import {
  PENDING,
  SET_ITEMS_SUCCESS,
  SET_ITEMS_ERROR,
} from "../constants/actionTypes"

export function pending() {
  return {
    type: PENDING
  }
}

export function setItemProductsSuccess(products) {
  return {
    type: SET_ITEMS_SUCCESS,
    payload: { products }
  }
}

export function setItemProductsFailed(error) {
  return {
    type: SET_ITEMS_ERROR,
    payload: { error }
  }
}
