export default function (state = {name: "", email: "", password: ""}, action){
  switch (action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, {name: name, email: email, password: password})
    default:
      return state
    }
  }
