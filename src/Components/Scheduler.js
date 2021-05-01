import React from 'react';
import './styles/Scheduler.css';
import {Inject, ScheduleComponent, Day, Week} from '@syncfusion/ej2-react-schedule';

const Scheduler = () => {
    return ( 
        <ScheduleComponent>
            <Inject services={[Day,Week]} />
        </ScheduleComponent>
     );
}
 
export default Scheduler;