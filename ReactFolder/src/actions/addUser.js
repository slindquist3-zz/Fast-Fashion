import axios from 'axios'

const url = "http://localhost:3000/"

export function addUser(name, email, password) {
  const postUsers = axios.post(url +'users', {
      name: name,
      email: email,
      password: password
    })
    return {type: "ADD_USER", payload: postUsers}
  }
