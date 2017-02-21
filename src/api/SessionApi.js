import axios from 'axios'


class SessionApi {
  static login(credentials) {
      return axios.post("http://localhost:3000/login",
      JSON.stringify({user: credentials}),
      { headers: {'Content-Type': 'application/json'}
      })
    }

    static signUp(credentials) {
      return axios.post("http://localhost:3000/users",
      JSON.stringify({user: credentials}),
      { headers: {'Content-Type': 'application/json'}
      })
    }

  }


export default SessionApi;
