import axios from 'axios'

const url = "http://localhost:3000/"

export const ADD_PRODUCT = 'ADD_PRODUCT'


export function createProduct(product) {
  axios.post(url + 'products', product)
    return {type: ADD_PRODUCT, payload: product}
  }
