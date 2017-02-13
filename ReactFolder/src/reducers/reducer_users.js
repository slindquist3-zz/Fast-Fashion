export default function (state = {name: "", email: "", password: ""}, action){
  switch (action.type) {
    case "SIGN_UP_SUCCESS":
      return !!sessionStorage.jwt
    case "LOG_IN_SUCCESS":
      return !!sessionStorage.jwt
    default:
      return state
    }

  }
