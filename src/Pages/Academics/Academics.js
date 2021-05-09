import TableComponent from "../../Components/CourseTable/TableComponent"
import {courseList, courseCols} from '../../Pages/Academics/courses'
const Academics = () => {
    return (  
        <div className="table">
            <TableComponent rows={courseList} cols={courseCols}/>
        </div>
    );
}
 
export default Academics
