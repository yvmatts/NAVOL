import { Form } from 'react-bootstrap';
import 'Styles/Profile/Components/MedicalTab.css'

const MedicalTab = (props) => {
    return ( 
        <Form>
            <div className="label">
                Class 2 Medical Certificate
            </div> 
            <Form.File 
                id="medicalCertificate"
                label="Upload Class 2 Medical Certificate"
                disabled={props.disableForm}
                custom
            />

            <div className="label">
                Medical Report 1
            </div> 
            <Form.File 
                id="medicalCertificate"
                label="Upload Medical report 1"
                disabled={props.disableForm}
                custom
            />

            <div className="label">
                Medical Report 2
            </div> 
            <Form.File 
                id="medicalCertificate"
                label="Upload Medical report 2"
                disabled={props.disableForm}
                custom
            />

            <div className="label">
                Medical Report 3
            </div> 
            <Form.File 
                id="medicalCertificate"
                label="Upload Medical report 3"
                disabled={props.disableForm}
                custom
            />
        </Form>
     );
}
 
export default MedicalTab;