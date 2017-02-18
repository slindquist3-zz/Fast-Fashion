import axios from 'axios'

const url = "http://localhost:3000/"

export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export function deleteProduct(product) {
  let id = product.id
  axios.delete(url + `products/${id}`, product)
    return {type: DELETE_PRODUCT, payload: product}
  }
