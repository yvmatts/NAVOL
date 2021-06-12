import { createAction, createReducer } from '@reduxjs/toolkit'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const REGISTER = 'REGISTER'

export const login = createAction(LOGIN)
export const logout = createAction(LOGOUT)
export const register = createAction(REGISTER)

const initalState = {
    isLoggedIn : false
}

const authReducer = createReducer(initalState, (builder) => {
    builder
        .addCase(login, (state, action) => {
            state.isLoggedIn = true
        })
        
        .addCase(logout, (state, action) => {
            state.isLoggedIn = false
        })

        .addDefaultCase((state, action) => {

        })
})

export default authReducer