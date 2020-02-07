import {
  FETCH_PENDING,
  FETCH_SUCCESS,
  FETCH_ERROR
} from '../constants/actionTypes'

const initialState = {
  items: [],
  loading: false,
  error: null
}

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: []
      }
    default:
      return state;
  }
}

export default productsReducer;