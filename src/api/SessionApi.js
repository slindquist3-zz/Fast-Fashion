import axios from 'axios'


class SessionApi {
  static login(credentials) {
      return axios.post("https://darling-api.herokuapp.com/login",
      JSON.stringify({user: credentials}),
      { headers: {'Content-Type': 'application/json'}
      })
    }

    static signUp(credentials) {
      return axios.post("https://darling-api.herokuapp.com/users",
      JSON.stringify({user: credentials}),
      { headers: {'Content-Type': 'application/json'}
      })
    }

  }


export default SessionApi;
