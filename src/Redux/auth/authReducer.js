import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE
} from './authTypes'

  const initialState = {
    isLoggedIn: false,
    loading: false,
    user: null,
    error: null
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
            isLoggedIn: true,
            loading: false,
            user: action.payload,
            error: ''
        }
      case FETCH_AUTH_FAILURE:
        return {
            isLoggedIn: false,
            loading: false,
            user: null,
            error: action.payload
        }
      default: return state
    }
  }

export default authReducer