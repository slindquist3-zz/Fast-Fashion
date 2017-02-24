import axios from 'axios'


class SessionApi {
  static login(credentials) {
      return axios.post("https://cors-anywhere.herokuapp.com/https://darling-api-rails.herokuapp.com/login",
      JSON.stringify({user: credentials}),
      { headers: {'Content-Type': 'application/json'}
      })
    }

    static signUp(credentials) {
      return axios.post("https://cors-anywhere.herokuapp.com/https://darling-api-rails.herokuapp.com/users",
      JSON.stringify({user: credentials}),
      { headers: {'Content-Type': 'application/json'}
      })
    }

  }


export default SessionApi;
