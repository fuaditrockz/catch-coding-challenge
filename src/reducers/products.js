import { FETCH_PRODUCTS } from '../constants/actionTypes';

const initialState = {
  items: []
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}

export default products;