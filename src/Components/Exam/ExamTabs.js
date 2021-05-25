import React, { useState, useEffect } from 'react';
import { Tabs, Tab} from 'react-bootstrap/';
import ActiveTab from './ActiveTab';
import CompletedTab from './CompletedTab';
import ExamList from './examList.json';
import {getActiveExams,getCompletedExams} from 'Adapters/Exam/examGetter';

const ExamTabs = () => {

    const [activeExams, setActiveExams] = useState();
    const [completedExams, setCompletedExams] = useState();

    useEffect(() =>{
        setActiveExams(getActiveExams(ExamList));
        setCompletedExams(getCompletedExams(ExamList));

    });
    return ( 
        <div className="container">
            <Tabs defaultActiveKey="active" id="uncontrolled-tab-example">
                <Tab eventKey="active" title="Active">
                    {activeExams && <ActiveTab activeExams={activeExams}/>}
                </Tab>
                <Tab eventKey="completed" title="Completed">
                    {completedExams && <CompletedTab completedExams={completedExams}/>}
                </Tab>
            </Tabs>
        </div>
     );
}
 
export default ExamTabs;