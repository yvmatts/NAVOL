import {Button, Form } from "react-bootstrap";


const LoginForm = (props) => {
    return ( 
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary btn-block" onClick={props.handleClick}>Login</Button>
            </Form>
        </div>
     );
}
 
export default LoginForm;