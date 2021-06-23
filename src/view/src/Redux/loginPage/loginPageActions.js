import {HANDLE_EMAIL,
HANDLE_PASSWORD,
HANDLE_ALERT,
HANDLE_FORM_VALIDATION,
HANDLE_SHOW_REGISTER} from './loginPageTypes'


export const handleEmail = (email) => {
    return{
        type: HANDLE_EMAIL,
        payload: {
            email: email
        }
    }
}

export const handlePassword = (password) => {
    return{
        type: HANDLE_PASSWORD,
        payload: {
            password: password
        }
    }
}

export const handleAlert = (flag) => {
    return {
        type: HANDLE_ALERT,
        payload: {
            flag: flag
        }
    }
}

export const handleFormValidation = (flag) => {
    return {
        type: HANDLE_FORM_VALIDATION,
        payload: {
            flag: flag
        }
    }
}

export const handleShowRegister = () => {
    return {
        type: HANDLE_SHOW_REGISTER
    }
}