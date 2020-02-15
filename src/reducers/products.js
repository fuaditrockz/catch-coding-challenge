import {
  PENDING,
  SET_ITEMS_SUCCESS,
  SET_ITEMS_ERROR,
  SET_CART_SUCCESS,
  SET_CART_ERROR
} from "../constants/actionTypes"

const initialState = {
  items: [],
  cart: { list: [], total: 0 },
  loading: false,
  error: null
}

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case PENDING:
      return {
        ...state,
        loading: true,
        error: null
      }
    case SET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.products
      }
    case SET_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }
    case SET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: { list: action.payload.cart, total: action.payload.total }
      }
    case SET_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        cart: {
          list: [],
          total: 0
        }
      }
    default:
      return state
  }
}

export default productsReducer
