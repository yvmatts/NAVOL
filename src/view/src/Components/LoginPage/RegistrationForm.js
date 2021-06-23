import {Button, Form } from "react-bootstrap" 

import { connect } from 'react-redux'
import { handleEmail,  handlePassword } from 'Redux/loginPage/loginPageActions'

const RegistrationForm = (props) => {
    return ( 
        <div>
            <Form noValidate validated={props.validated} onSubmit={props.handleRegister}>
                <Form.Group controlId="register_email">
                    <Form.Control type="email" placeholder="Enter email" required onChange={(e) => {props.handleEmail(e.target.value)}}/>
                    <Form.Text className="text-muted">
                        <Button variant="link" size="sm">Send Password to Email</Button>
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="register_password">
                    <Form.Control type="password" placeholder="Temporary Password" required onChange={(e) => {props.handlePassword(e.target.value)}}/>
                    <Form.Text className="text-muted">
                    Enter temporary password recieved on Email.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary btn-block" type="submit">Register</Button>
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
export default connect(mapStateTpProps, mapDispatchToProps)(RegistrationForm)  