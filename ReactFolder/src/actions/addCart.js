import axios from 'axios'

const url = "http://localhost:3000/"

/* I believe that the User id of the user being created should be this argument */
export function CreateCart() {
  const postCarts = axios.post(url +'carts', {
      user_id: user.id,
    })
    return {type: "ADD_CART", payload: postCarts}
  }

//
