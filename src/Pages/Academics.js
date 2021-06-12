import React, {useEffect, useState} from 'react';
import 'Styles/Academics/Academics.css';
import {getCourseList} from 'Adapters/Academics/CourseGetter';
import { connect } from 'react-redux'
import CourseList from './courses.json';
import TableHeading from 'Components/Academics/TableHeading';
import TableComponent from "Components/Academics/TableComponent";



const Academics = (props) => {

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
            <div>
                {
                    props.isLoggedIn
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
    );
}
 
const mapStateTpProps = state => {
    return {
        isLoggedIn : state.auth.isLoggedIn
    }
  }
  
  export default connect(mapStateTpProps)(Academics);
