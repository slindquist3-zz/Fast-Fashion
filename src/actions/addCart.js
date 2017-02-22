import axios from 'axios'

const url = "https://darling-api.herokuapp.com/"

export const ADD_CART = 'ADD_CART'

export function addCart() {
  const postCarts = axios.post(url +'carts', {
      user_id: user.id,
    })
    return {type: ADD_CART, payload: postCarts}
  }

//
