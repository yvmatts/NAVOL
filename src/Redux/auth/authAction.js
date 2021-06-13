import axios from 'axios'
import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE,
} from './authTypes'


/**
 * 
 * LOGIN ACTION CREATORS
 * 
 */

export const fetchAuthRequest = () => {
  return {
    type: FETCH_AUTH_REQUEST
  }
}

export const fetchAuthSuccess = user => {
  return {
    type: FETCH_AUTH_SUCCESS,
    payload: user
  }
}

export const fetchAuthFailure = error => {
  return {
    type: FETCH_AUTH_FAILURE,
    payload: error
  }
}

/**
 * 
 * REGISTRATION ASYNC ACTION CREATOR
 * 
 */

 export const fetchRegister = (email, password) => {
  return (dispatch) => {
    dispatch(fetchAuthRequest())
    axios.post('http://localhost:8000/register', {
        email: email,
        password: password
      })
      .then(function (response) {
        dispatch(fetchAuthSuccess(response.data))
      })
      .catch(function (error) {
        dispatch(fetchAuthFailure(error))
      });
  }
}

/**
 * 
 * LOGIN ASYNC ACTION CREATOR
 * 
 */
 export const fetchAuth = (email, password) => {
  return (dispatch) => {
    dispatch(fetchAuthRequest())
    axios.post('http://localhost:8000/login', {
        email: email,
        password: password
      })
      .then(function (response) {
        dispatch(fetchAuthSuccess(response))
      })
      .catch(function (error) {
        dispatch(fetchAuthFailure(error))
      });
  }
}