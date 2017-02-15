export default function (state = {}, action){
  switch (action.type) {
    case "SIGN_UP_SUCCESS":
      return Object.assign({}, state, {cart_id: action.payload.data.cart_id})
    case "LOG_IN_SUCCESS":
      return Object.assign({}, state, {cart_id: action.payload.data.cart_id})
    default:
      return state
    }
  }
