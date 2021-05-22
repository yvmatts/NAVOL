import {useEffect, useState} from 'react';
import {getCourseList} from 'Adapters/Academics/CourseGetter';
import CourseList from './courses.json';
import TableComponent from "Components/Academics/TableComponent"
import 'Styles/Academics/Academics.css';


const Academics = () => {

    useEffect(() => {
        setCourses(getCourseList(CourseList));
    },[]);
    const [courses, setCourses] = useState(null);
    const cols = [
        {
            name: "Component",
            
        },
        {
            name: "Marks",
        }
    ];

    return (  
        <div className="container">
            {   courses
                 &&
                Object.keys(courses).map((courseName, index) =>(
                    <div>
                        <p key={courseName}>{courseName}</p>
                        <TableComponent courseInfo = {courses[courseName]} cols = {cols}/>
                    </div>    
                ))
            }
        </div>
    );
}
 
export default Academics;
