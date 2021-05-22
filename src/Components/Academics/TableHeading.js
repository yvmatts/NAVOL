import Media from 'react-bootstrap/Media';
import 'Styles/Academics/Component/TableHeading.css';
import subjectLogo from 'Assets/Images/subject-logo.png';

const TableHeading = (props) => {
    return ( 
    <Media>
        <div className="row">
            <div>
                <img
                className="mr-3 img"
                src={subjectLogo}
                alt="Generic placeholder"
                />
            </div>
            <Media.Body className="media-body">
            <h5>{props.courseName}</h5>
            <p>
                {props.teacherName}
            </p>
            </Media.Body>
        </div>
      </Media> 
      );
}
 
export default TableHeading;