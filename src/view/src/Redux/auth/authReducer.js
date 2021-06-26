import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE,
  FETCH_LOGOUT
} from './authTypes'

  const initialState = {
    isLoggedIn: false,
    loading: false,
    user: null,
    error: null,
    redirectUrl: '',
    userLevel: 'student'
  }
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_AUTH_REQUEST:
        return {
            ...state,
            loading: true
        }
      case FETCH_AUTH_SUCCESS:
        return {
            ...state,
            isLoggedIn: true,
            loading: false,
            user: action.payload.user,
            redirectUrl: action.payload.redirectUrl,
            error: null
        }
      case FETCH_AUTH_FAILURE:
        return {
            ...state,
            isLoggedIn: false,
            loading: false,
            user: null,
            error: action.payload
        }
      case FETCH_LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          loading: false,
          user: null,
          error: null,
          redirectUrl: action.payload.redirectUrl
        }
      default: return state
    }
  }

export default authReducer