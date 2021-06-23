import ExamCard from "./ExamCard";
import 'Styles/Exam/Component/CompletedTab.css';
import Container from 'react-bootstrap/Container'

const ActiveTab = (props) => {
    return ( 
        <Container className="container">
            {
                props.completedExams
                        &&
                Object.keys(props.completedExams).map((examInfo,index) => (
                    <div className="subject-card-container">
                        <div className="subject-label">
                            <h5>{examInfo}</h5>
                        </div>
                        <div className="d-flex">
                            <ExamCard examInfo={props.completedExams[examInfo]}/>
                        </div>
                    </div>
                    
                ))
            }
            
        </Container>
        
     );
}
 
export default ActiveTab;