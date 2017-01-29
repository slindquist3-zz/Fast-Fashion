export default function currentUser(state = {id: null, name: null, userBoardID: null, loggedIn: false}, action){

  switch (action.type) {
    case 'LOGIN_USER':
      return Object.assign({}, state, {id: action.currentUser.user_id, name: action.currentUser.user_name, loggedIn: true})
    default:
      return state
    }
  }
