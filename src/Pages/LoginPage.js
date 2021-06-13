import React, {useState, useEffect} from 'react' 
import { useHistory } from "react-router-dom" 
import { Container, Image} from "react-bootstrap" 
import { connect } from 'react-redux'
import { fetchAuth } from 'Redux/auth/authAction'

import 'Styles/LoginPage/LoginPage.css' 
import logo from 'Assets/Images/narainAviation.png' 
import LoginForm from 'Components/LoginPage/LoginForm' 
import LoginAlert from 'Components/LoginPage/LoginAlert' 
import RegistrationForm from 'Components/LoginPage/Registration'

const LoginPage = (props) => {
    const [validated, setValidated] = useState(false)  
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [showRegister, setShowRegister] = useState(true)
    const [loginCount, setLoginCount] = useState(0)

    const history = useHistory() 
    const bcryptjs = require('bcryptjs') 
    const saltRounds = 10
    
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
            handleAlertClose(true)
        }
    },[props.isLoggedIn, history, props.error]) 

/**
 * @function handleAlertClose
 * @description Handles alert visibilty AND form vaildation reset
 * @params flag {boolean}
 * @returns null
 */
    const handleAlertClose = (flag) => {
        setShowAlert(flag)
        setValidated(false)
    }

/**
 * @function handleChange
 * @description Handles form input states
 * @params e {event}
 * @returns null
 */
    const handleChange = (e) => {
        switch (e.target.form.id) {
            case 'login_form':
                switch (e.target.id) {
                    case 'login_email':
                        setEmail(e.target.value)
                        break 
                    case 'login_password':
                        bcryptjs.genSalt(saltRounds, function(err, salt) {
                            bcryptjs.hash(e.target.value, salt, function(err, hash) {
                                setPassword(hash)
                            }) 
                        }) 
                        
                        break 
                    default:
                        break 
                }
                break 
        
            default:
                break 
        }
    }

/**
 * @function handleSubmit
 * @description Handles form submission
 * @params event {event}
 * @returns null
 */
    const handleSubmit = async (event) => {
        event.preventDefault()
        handleAlertClose(false) 
        const form = event.currentTarget 
        if (form.checkValidity() === false) {
          event.stopPropagation() 
         
        } else {
            console.log('valid form') 
            await props.fetchAuth(email, password)
            setLoginCount(loginCount+1)
        }
        setValidated(true) 
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
                            <LoginAlert showAlert={showAlert} handleAlertClose={handleAlertClose}/>
                        </div>
                            {   showRegister?
                                <RegistrationForm />
                                :<LoginForm handleSubmit={handleSubmit} handleChange={handleChange} validated={validated}/>}
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
        error : state.auth.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchAuth: (email, password) => dispatch(fetchAuth(email, password))
    }
}
export default connect(mapStateTpProps, mapDispatchToProps)(LoginPage) 