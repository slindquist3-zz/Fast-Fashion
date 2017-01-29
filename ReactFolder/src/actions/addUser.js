export function addUser(name, email, password) {
  return function(dispatch) {
    $.ajax({
      url: 'http://localhost:3000/users',
      type: "POST",
      data: {user: {name: name, email: email, password: password}}
    }).done(function(resp){
      return dispatch({
         type: "ADD_USER",
         payload: resp
       })
  })
  }
}
