import {Form} from 'react-bootstrap';
import 'Styles/Profile/Components/AccountsTab.css';
const AccountsTab = (props) => {
    return (  
        <div>
            <div className="heading">
                <h5>Password Change</h5>
            </div>
            <Form>
                <Form.Group controlId="oldPwd">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter old Password" />
                </Form.Group>
                <Form.Group controlId="newPwd">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter new Password" />
                </Form.Group>
                <Form.Group controlId="confirmPwd">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm new Password" />
                </Form.Group>
            </Form>
        </div>
    );
}
 
export default AccountsTab;