import { FETCH_PRODUCTS } from '../actions/fetchProducts'

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return [ action.payload.data.data, ...state ]
      // what should this be returning so that cart gets this product?
  }
  return state;
}
