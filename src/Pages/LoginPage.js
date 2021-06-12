import React, {useState, useEffect} from 'react' 
import { useHistory } from "react-router-dom" 
import { Container, Image} from "react-bootstrap" 
import { connect } from 'react-redux'
import {login} from 'Redux/auth/authReducer'
import 'Styles/LoginPage/LoginPage.css' 
import logo from 'Assets/Images/narainAviation.png' 
import LoginForm from 'Components/LoginPage/LoginForm' 
import LoginAlert from 'Components/LoginPage/LoginAlert' 

const LoginPage = (props) => {
    const [validated, setValidated] = useState(false)  
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')
    const [showAlert, setShowAlert] = useState(false) 
    const [loginCount, setLoginCount] = useState(0)

    const history = useHistory() 
    const bcryptjs = require('bcryptjs') 
    const saltRounds = 10
    
    useEffect(() =>{
        if(props.isLoggedIn){
            history.push('/dashboard')
        }
    },[props.isLoggedIn, history, loginCount]) 

    useEffect(() => {
        if(loginCount && !props.isLoggedIn){
            handleAlertClose(true)
        }
    },[loginCount, props.isLoggedIn])

    const handleAlertClose = (flag) => {
        setShowAlert(flag)
        setValidated(false)
    }

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

    
    const handleSubmit = async (event) => {
        event.preventDefault()
        handleAlertClose(false) 
        const form = event.currentTarget 
        if (form.checkValidity() === false) {
          event.stopPropagation() 
         
        } else {
            console.log('valid form') 
            await props.login({email: email, password: password})
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
                            <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} validated={validated}/>
                        </div>
                    </div>
                </Container>
            }
        </div>
    ) 
}

const mapStateTpProps = state => {
    return {
        isLoggedIn : state.auth.isLoggedIn
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login : (email, password, history) => dispatch(login(email, password, history))
    }
}
export default connect(mapStateTpProps, mapDispatchToProps)(LoginPage) 