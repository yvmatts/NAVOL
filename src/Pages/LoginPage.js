import React, {useEffect} from 'react' 
import { useHistory } from "react-router-dom" 
import { Container, Image} from "react-bootstrap" 

import 'Styles/LoginPage/LoginPage.css' 
import logo from 'Assets/Images/narainAviation.png' 
import LoginForm from 'Components/LoginPage/LoginForm' 
import LoginAlert from 'Components/LoginPage/LoginAlert' 
import RegistrationForm from 'Components/LoginPage/RegistrationForm'
import {Button} from "react-bootstrap" 

//Redux Imports
import { connect } from 'react-redux'
import { fetchAuth, fetchRegister } from 'Redux/auth/authAction'
import { handleAlert, handleFormValidation, handleShowRegister} from 'Redux/loginPage/loginPageActions'

const LoginPage = (props) => { 
    
    const history = useHistory() 
    
/**
 * @hook useEffect
 * @description Navigates user OR shows login error
 * @params props.isLoggedIn, history, props.error
 * @returns null
 */
    useEffect(() =>{
        if(props.isLoggedIn){
            history.push('/dashboard')
        }
        if(props.error) {
            props.handleAlert(true)
        }
    },[props.isLoggedIn, props.error,props.handleAlert, history]) 

/**
 * @function handleForms
 * @description Handles displaying of forms
 * @params null
 * @returns null
 */
    const handleForms = () => {
       props.handleShowRegister() 
    }

/**
 * @function handleLogin
 * @description Handles login form submission
 * @params event {event}
 * @returns null
 */
    const handleLogin = async (event) => {
        event.preventDefault()
        props.handleAlert(false) 
        const form = event.currentTarget 
        if (form.checkValidity() === false) {
            event.stopPropagation() 
        } else {
            await props.fetchAuth(props.email, props.password)
        }
        props.handleFormValidation(true) 
      }
      
/**
 * @function handleRegister
 * @description Handles registration form submission
 * @params event {event}
 * @returns null
 */
    const handleRegister = async (event) => {
        event.preventDefault()
        props.handleAlert(false) 
        const form = event.currentTarget 
        if (form.checkValidity() === false) {
            event.stopPropagation() 
        }else {
            await props.fetchRegister(props.email, props.password)
        }
        props.handleFormValidation(true) 
      }
    
    return ( 
        <div>
            {
                !props.isLoggedIn
                        &&
                <Container>
                    <div className="d-flex justify-content-center align-items-center">
                        <div>
                            <div className="logo">
                                <Image src={logo} rounded />
                            </div>
                            <div>
                                <LoginAlert />
                            </div>
                            <div>
                                {   props.showRegister?
                                        <div>
                                            <RegistrationForm handleRegister={handleRegister}/>
                                        </div>
                                    :   <div>
                                            <LoginForm handleLogin={handleLogin} />
                                        </div>
                                }
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <div> 
                                    <Button variant="link" onClick={handleForms}>{props.showRegister? "Back to login" : "New user? Register here"}</Button>
                                </div>
                            </div>
                        </div>
                    <div>
                                
                            </div>
                    </div>
                </Container>
            }
        </div>
    ) 
}

const mapStateTpProps = state => {
    return {
        isLoggedIn : state.auth.isLoggedIn,
        error : state.auth.error,
        email : state.login.email,
        password: state.login.password,
        showRegister: state.login.showRegister,
        showAlert: state.login.showAlert,
        validated: state.login.validated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAuth: (email, password) => dispatch(fetchAuth(email, password)),
        fetchRegister: (email, password) => dispatch(fetchRegister(email, password)),
        handleAlert: (flag) => dispatch(handleAlert(flag)),
        handleFormValidation: (flag) => dispatch(handleFormValidation(flag)),
        handleShowRegister: () => dispatch(handleShowRegister())
    }
}
export default connect(mapStateTpProps, mapDispatchToProps)(LoginPage) 