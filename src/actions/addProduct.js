import axios from 'axios'

const url = "https://cors-anywhere.herokuapp.com/https://darling-api-rails.herokuapp.com/"

export const ADD_PRODUCT = 'ADD_PRODUCT'


export function addProduct(product) {
  axios.post(url + 'products', product)
    return {type: ADD_PRODUCT, payload: product}
  }


//rename file to reflect function name
