import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';
import { browserHistory } from 'react-router'


export function loginUser(credentials) {
   let request = sessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.data.jwt);
      browserHistory.push(`/profile/${response.data.jwt}`)
    }).catch(error => {
      throw(error);
    });
    return {type: types.LOG_IN_SUCCESS,
            payload: request}
}

export function signUpUser(credentials) {
   let request = sessionApi.signUp(credentials).then(response => {
      sessionStorage.setItem('jwt', response.data.jwt);
      browserHistory.push(`/profile/${response.data.jwt}`)
      return response
    }).catch(error => {
      throw(error);
    });
    return {type: types.SIGN_UP_SUCCESS,
            payload: request}
}
