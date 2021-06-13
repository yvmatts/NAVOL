import {HANDLE_ALERT,
HANDLE_FORM_VALIDATION,
HANDLE_EMAIL,
HANDLE_PASSWORD,
HANDLE_SHOW_REGISTER} from './loginPageTypes'

const bcryptjs = require('bcryptjs') 
const saltRounds = 10

const initialState = {
    validated: false,
    email: '',
    password: '',
    showAlert: false,
    showRegister: false,
    loginCount: 0
}

const loginPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_EMAIL:
            return {
                ...state,
                email: action.payload.email
            }

        case HANDLE_PASSWORD:
            return {
                ...state,
                password: bcryptjs.hashSync(action.payload.password, saltRounds)
            }
        
        case HANDLE_ALERT:
            return {
                ...state,
                showAlert: action.payload.flag,
                validated: false
            }
        
        case HANDLE_FORM_VALIDATION: 
            return {
                ...state,
                validated: action.payload.flag
            }

        case HANDLE_SHOW_REGISTER:
            return {
                ...state,
                showRegister: !state.showRegister,
                showAlert: false,
                validated: false
            }
    
        default:
            return state
    }
}

export default loginPageReducer