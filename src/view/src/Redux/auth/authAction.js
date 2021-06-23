import axios from 'axios'
import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE,
  FETCH_LOGOUT
} from './authTypes'

/**
 * 
 * Helper functions
 * 
 */

const handleErrors = (error) => {
  if(error.response.data.email) {
    return(error.response.data.email)
  } else if(error.response.data.password) {
    return(error.response.data.password)
  } else {
    return('Something went wrong.')
  }
}

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

export const fetchAuthSuccess = (user, redirectUrl) => {
  return {
    type: FETCH_AUTH_SUCCESS,
    payload: {
      user: user,
      redirectUrl: redirectUrl
    }
  }
}

export const fetchAuthFailure = error => {
  return {
    type: FETCH_AUTH_FAILURE,
    payload: error
  }
}

export const fetchLogout = (redirectUrl) => {
  return {
    type: FETCH_LOGOUT,
    payload: {
      redirectUrl: redirectUrl
    }
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
        dispatch(fetchAuthSuccess(response.data, '/dashboard'
        ))
      })
      .catch(function (error) {
        const errMessage = handleErrors(error)
        dispatch(fetchAuthFailure(errMessage))
      });
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
        dispatch(fetchAuthSuccess(response.data,'/profile'))
      })
      .catch(function (error) {
        const errMessage = handleErrors(error)
        dispatch(fetchAuthFailure(errMessage))
      });
  }
}

/**
 * 
 * LOGOUT ASYNC ACTION CREATOR
 * 
 */

export const fetchLogoutRequest = () => {
  return (dispatch) => {
    axios.get('http://localhost:8000/logout')
      .then(function(response) {

        dispatch(fetchLogout(response.data))
      })
  }
}
