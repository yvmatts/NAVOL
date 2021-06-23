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
                                <div className="card-content">
                                    <Card.Body>
                                        <Card.Title>{props.examInfo[examData].type}</Card.Title>
                                        <Card.Text>
                                        Total Marks : {props.examInfo[examData].marks}
                                        </Card.Text>
                                        {
                                            props.examInfo[examData].marksObt
                                                &&
                                            <Card.Text>
                                                Marks Obtained : {props.examInfo[examData].marksObt}
                                            </Card.Text>
                                        }
                                        <Card.Text>
                                            Exam Date: {props.examInfo[examData].date}
                                        </Card.Text>
                                        <Button variant="primary">{props.examInfo[examData].marksObt? "Results" : "Take Exam"}</Button>
                                    </Card.Body>
                                </div>
                            </Card>
                        </div>   
                    ))
                }
            </div> 
        </div>    
             
     );
}
 
export default ExamCard;