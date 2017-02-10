export default function (state = {name: "", email: "", password: ""}, action){
  switch (action.type) {
    case "SIGN_UP_SUCCESS":
      return Object.assign({}, state, {name: name, email: email, password: password})
    case "LOG_IN_SUCCESS":
    debugger
      return Object.assign({}, state, {name: name, email: email, password: password})
    default:
      return state
    }

  }
