export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export function deleteProduct(cart, index) {
  cart.splice(index, 1)
    return {type: DELETE_PRODUCT, payload: cart}
  }
