import {
  pending,
  setItemProductsFailed,
  setItemProductsSuccess
} from '../actions'

export function fetchProducts() {
  return async dispatch => {
    await dispatch(pending())
    return fetch(
      "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json"
    )
      .then(handleErrors)
      .then(res => {
        const data = res.json()
        return data
      })
      .then(res => {
        dispatch(setItemProductsSuccess(res))
        return res
      })
      .catch(error => dispatch(setItemProductsFailed(error)))
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}