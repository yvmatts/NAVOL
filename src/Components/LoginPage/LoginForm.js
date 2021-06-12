import {Button, Form } from "react-bootstrap";


const LoginForm = (props) => {
    return ( 
        <div>
            <Form noValidate validated={props.validated} onSubmit={props.handleSubmit} id="login_form">
                <Form.Group controlId="login_email">
                    <Form.Control type="email" placeholder="Enter email" required onChange={(e) => {props.handleChange(e)}} />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid Email.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>
                       Looks good!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="login_password">
                    <Form.Control type="password" placeholder="Password" required onChange={(e) => {props.handleChange(e)}} />
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
     );
}
 
export default LoginForm;