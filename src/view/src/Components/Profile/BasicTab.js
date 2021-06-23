import { Form } from 'react-bootstrap';

const BasicTab = (props) => {

    return ( 
        <Form >
            <Form.Group controlId="basicForm.name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name"  disabled={props.disableForm}/>
            </Form.Group>

            <Form.Group controlId="basicForm.email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" disabled={props.disableForm}/>
            </Form.Group>

            <Form.Group controlId="basicForm.contact">
                <Form.Label>Contact No.</Form.Label>
                <Form.Control type="number" placeholder="Enter Contact No." disabled={props.disableForm}/>
            </Form.Group>

            <Form.Group controlId="basicForm.dob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" placeholder="Enter Date" disabled={props.disableForm}/>
            </Form.Group>

            <Form.Group controlId="basicForm.age">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter Age" disabled={props.disableForm}/>
            </Form.Group>

            <Form.Group controlId="basicForm.fname">
                <Form.Label>Father's Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Father's Name" disabled={props.disableForm}/>
            </Form.Group>

            <Form.Group controlId="basicForm.fcontact">
                <Form.Label>Father's Contact No.</Form.Label>
                <Form.Control type="number" placeholder="Enter Father's Contact No." disabled={props.disableForm}/>
            </Form.Group>

            <Form.Group controlId="basicForm.mname">
                <Form.Label>Mother's Name</Form.Label>
                <Form.Control type="number" placeholder="Enter Mother's Name" disabled={props.disableForm}/>
            </Form.Group>

            <Form.Group controlId="basicForm.mcontact">
                <Form.Label>Contact No.</Form.Label>
                <Form.Control type="email" placeholder="Enter Mother's Contact No." disabled={props.disableForm}/>
            </Form.Group>

            <Form.Group controlId="basicForm.address">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3} disabled={props.disableForm}/>
            </Form.Group>
        </Form>
     );
}
 
export default BasicTab;