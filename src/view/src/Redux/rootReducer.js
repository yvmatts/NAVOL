import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import loginPageReducer from './loginPage/loginPageReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    login: loginPageReducer
})

export default rootReducer