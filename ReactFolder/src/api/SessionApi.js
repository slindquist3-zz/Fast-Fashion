import axios from 'axios'


class SessionApi {
  static login(credentials) {
      return axios.post("http://localhost:3000/login",
      JSON.stringify({auth: credentials}),
      { headers: {'Content-Type': 'application/json'}
      })
    }

    static signUp(credentials) {
      debugger
      //credentials are undefined 
      return axios.post("http://localhost:3000/users",
      JSON.stringify({auth: credentials}),
      { headers: {'Content-Type': 'application/json'}
      })
    }

  }


export default SessionApi;
