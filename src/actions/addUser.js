import axios from 'axios'
import addCart from './addCart'

const url = "https://cors-anywhere.herokuapp.com/https://darling-api-rails.herokuapp.com/"

export function addUser(name, email, password) {
  const postUsers = axios.post(url +'users', {
      name: name,
      email: email,
      password: password
    })
    return {type: "ADD_USER", payload: postUsers}
  }
