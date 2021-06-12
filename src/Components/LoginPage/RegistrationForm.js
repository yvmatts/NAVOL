import {Button, Form } from "react-bootstrap" 
import 'Styles/LoginPage/Component/SignUpForm.css'

const LoginForm = (props) => {
    return ( 
        <div>
            <Form>
                <Form.Group controlId="email">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        <Button variant="link" size="sm">Send Password to Email</Button>
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Control type="password" placeholder="Temporary Password" />
                    <Form.Text className="text-muted">
                    Enter temporary password recieved on Email.
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
     ) 
}
 
export default LoginForm 