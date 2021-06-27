import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import loginPageReducer from './loginPage/loginPageReducer'
import dashboardReducer from './dashboard/dashboardReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    login: loginPageReducer,
    dash: dashboardReducer
})

export default rootReducer