import { 
  FETCH_PENDING, 
  FETCH_SUCCESS, 
  FETCH_ERROR 
} from '../constants/actionTypes';

export function fetchProductsPending() {
  return {
    type: FETCH_PENDING
  }
}

export function fetchProductsSuccess(products) {
  return {
    type: FETCH_SUCCESS,
    payload: { products }
  }
}

export function fetchProductsFailed(error) {
  return {
    type: FETCH_ERROR,
    payload: { error }
  }
}

export function fetchProducts() {
  return async dispatch => {
    await dispatch(fetchProductsPending());
    return fetch('http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json')
      .then(handleErrors)
      .then(res => {
        const data = res.json()
        return data;
      })
      .then(res => {
        dispatch(fetchProductsSuccess(res));
        return res;
      })
      .catch(error => dispatch(fetchProductsFailed(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}