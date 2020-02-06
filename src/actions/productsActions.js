import { FETCH_PRODUCTS } from '../constants/actionTypes';

export const fetchProducts = () => dispatch => {
  fetch('http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json')
  .then(res => res.json())
  .then(posts => dispatch({
    type: FETCH_PRODUCTS,
    payload: posts
  }))
}