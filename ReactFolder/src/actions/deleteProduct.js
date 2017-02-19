// import axios from 'axios'

// const url = "http://localhost:3000/"

export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export function deleteProduct(cart, index) {
  cart.splice(index, 1)
    return {type: DELETE_PRODUCT, payload: cart}
  }
