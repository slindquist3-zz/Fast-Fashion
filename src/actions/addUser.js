import axios from 'axios'
import addCart from './addCart'

const url = "https://darling-api.herokuapp.com/"

export function addUser(name, email, password) {
  const postUsers = axios.post(url +'users', {
      name: name,
      email: email,
      password: password
    })
    return {type: "ADD_USER", payload: postUsers}
  }
