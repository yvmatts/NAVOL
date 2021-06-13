import {Button, Form } from "react-bootstrap" 

//Redux imports
import { connect } from 'react-redux'
import { handleEmail,  handlePassword } from 'Redux/loginPage/loginPageActions'


const LoginForm = (props) => {
    return ( 
        <div>
            <Form noValidate validated={props.validated} onSubmit={props.handleLogin} id="login_form">
                <Form.Group controlId="login_email">
                    <Form.Control type="email" placeholder="Enter email" required onChange={(e) => {props.handleEmail(e.target.value)}} />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid Email.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>
                       Looks good!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="login_password">
                    <Form.Control type="password" placeholder="Password" required onChange={(e) => {props.handlePassword(e.target.value)}} />
                    <Form.Control.Feedback type="invalid">
                        Please enter your password.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>
                       Looks good!
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary btn-block" type="submit">Login</Button>
            </Form>
        </div>
     ) 
}

const mapStateTpProps = state => {
    return {
        loading: state.auth.loading,
        validated: state.login.validated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleEmail: (email) => dispatch(handleEmail(email)),
        handlePassword: (password) => dispatch(handlePassword(password))
    }
}
export default connect(mapStateTpProps, mapDispatchToProps)(LoginForm)  