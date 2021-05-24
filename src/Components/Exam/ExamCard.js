import 'Styles/Exam/Component/ExamCard.css';
import {Card, Button} from 'react-bootstrap';

const ExamCard = (props) => {
    return (
        <div className="scroll-container">
            <div className="scroll">
                {
                    Object.keys(props.examInfo).map((examData) => (
                        <div className="card-container">
                            <Card className="card">
                                <Card.Body>
                                    <Card.Title>{props.examInfo[examData].type}</Card.Title>
                                    <Card.Text>
                                    Total Marks : {props.examInfo[examData].marks}
                                    </Card.Text>
                                    <Card.Text>
                                        Exam Date: {props.examInfo[examData].date}
                                    </Card.Text>
                                    <Button variant="primary">Take Exam</Button>
                                </Card.Body>
                            </Card>
                        </div>   
                    ))
                }
            </div> 
        </div>    
             
     );
}
 
export default ExamCard;