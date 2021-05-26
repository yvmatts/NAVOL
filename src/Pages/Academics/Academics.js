import {useEffect, useState} from 'react';
import {getCourseList} from 'Adapters/Academics/CourseGetter';
import CourseList from './courses.json';
import TableHeading from 'Components/Academics/TableHeading';
import TableComponent from "Components/Academics/TableComponent";
import 'Styles/Academics/Academics.css';
import { AppContext } from 'Context/AppContext';


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
        <AppContext.Consumer>{(context) => {
            return(
                <div>
                    {
                        context.isLoggedIn
                            &&
                        <div className="container">
                        {   courses
                            &&
                            Object.keys(courses).map((courseName, index) =>(
                                <div>
                                    <TableHeading courseName={courseName} teacherName={courses[courseName].Teacher}/>
                                    <TableComponent courseInfo = {courses[courseName].Components} cols = {cols}/>
                                </div>    
                            ))
                        }
                        </div>
                    }
                </div>
            )
        }}
        </AppContext.Consumer>
    );
}
 
export default Academics;
