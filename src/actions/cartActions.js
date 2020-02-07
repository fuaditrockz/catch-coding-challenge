import { 
  ADD_PRODUCT_TO_CART, 
  REMOVE_PRODUCT_FROM_CART 
} from '../constants/actionTypes';

export function addProductById(id) {
  return {
    type: ADD_PRODUCT_TO_CART,
    id
  }
}

export function removeProductById(id) {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    id
  }
}