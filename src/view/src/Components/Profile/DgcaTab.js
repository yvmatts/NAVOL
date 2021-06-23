import { Form } from 'react-bootstrap';
import 'Styles/Profile/Components/MedicalTab.css';

const DgcaTab = (props) => {
    return (  
        <Form>
            <div className="label">
                Applicant Photograph
            </div> 
            <Form.File 
                id="dgcaPhoto"
                label="Upload jpg less than 70kb"
                disabled={props.disableForm}
                custom
            />

            <div className="label">
                Applicant Signature
            </div> 
            <Form.File 
                id="dgcaSign"
                label="Upload jpg less than 20kb"
                disabled={props.disableForm}
                custom
            />

            <div className="label">
                10th Std Pass Certificate
            </div> 
            <Form.File 
                id="passCertX"
                label="Upload pdf less than 100kb"
                disabled={props.disableForm}
                custom
            />

            <div className="label">
                10th Std Marksheet
            </div> 
            <Form.File 
                id="markSheetX"
                label="Upload pdf less than 200kb"
                disabled={props.disableForm}
                custom
            />

            <div className="label">
                Board Verificatio Certificate for 10th Qualification
            </div> 
            <Form.File 
                id="verificationX"
                label="Upload pdf less than 100kb"
                disabled={props.disableForm}
                custom
            />

            <div className="label">
                12th Std Marksheet
            </div> 
            <Form.File 
                id="markSheetXII"
                label="Upload pdf less than 200kb"
                disabled={props.disableForm}
                custom
            />

            <div className="label">
                Board Verificatio Certificate for 12th Qualification
            </div> 
            <Form.File 
                id="verificationXII"
                label="Upload pdf less than 100kb"
                disabled={props.disableForm}
                custom
            />

            <div className="label">
                Copy of Proof of Permanent Address
            </div> 
            <Form.File 
                id="addressProof"
                label="Upload pdf less than 100kb"
                disabled={props.disableForm}
                custom
            />

            <div className="label">
                Aadhar Card
            </div> 
            <Form.File 
                id="aadhar"
                label="Upload pdf less than 100kb"
                disabled={props.disableForm}
                custom
            />

            <div className="label">
                Passport
            </div> 
            <Form.File 
                id="passport"
                label="Upload pdf less than 100kb"
                disabled={props.disableForm}
                custom
            />
        </Form>
    );
}
 
export default DgcaTab;