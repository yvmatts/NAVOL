import 'Styles/Academics/Academics.css';
import {useEffect, useState} from 'react';
import TableComponent from "Components/Academics/TableComponent"
import CourseList from './courses.json';
import {getCourseList} from 'Adapters/Academics/CourseGetter';

const Academics = () => {

    useEffect(() => {
        setCourses(getCourseList(CourseList));
    },[]);
    const [courses, setCourses] = useState(null);
    const cols = [
        {
            name: "Component",
            align: "left"
        },
        {
            name: "Marks",
            align: "right"
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
