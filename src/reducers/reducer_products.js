import { FETCH_PRODUCTS } from '../actions/fetchProducts'
import { ADD_PRODUCT } from '../actions/addProduct'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return [ action.payload.data.data, ...state ]
      // what should this be returning so that cart gets this product?
  }
  return state;
}
