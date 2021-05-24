import ExamCard from "./ExamCard";
import 'Styles/Exam/Component/ActiveTab.css';
import Container from 'react-bootstrap/Container'

const ActiveTab = (props) => {
    return ( 
        <Container className="container">
            {
                Object.keys(props.activeExams).map((examInfo,index) => (
                    <div className="subject-card-container">
                        <div className="subject-label">
                            <h5>{examInfo}</h5>
                        </div>
                        <div className="d-flex">
                            <ExamCard examInfo={props.activeExams[examInfo]}/>
                        </div>
                    </div>
                    
                ))
            }
            
        </Container>
        
     );
}
 
export default ActiveTab;