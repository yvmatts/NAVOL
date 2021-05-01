import React, { Component } from 'react';
import '../styles/Scheduler.css';
import {Inject, ScheduleComponent, Day, Week, ICalendarExport, ViewsDirective, ViewDirective, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import * as dataSource from './dataSource.json';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
//Scheduler functions


class Scheduler extends Component {
    constructor(props) {
        super(props);
        this.data = extend([], dataSource.scheduleData, null, true);
    }
    handClick = () =>{
        this.scheduleObj.exportToICalendar();
    }
    render() { 
        return ( 
            <div>
                <ScheduleComponent width='100%' height='650px' ref={schedule => this.scheduleObj = schedule}>
                    <ViewsDirective>
                        <ViewDirective option='Day'/>
                        <ViewDirective option='Week'/>
                        <ViewDirective option='WorkWeek'/>
                        <ViewDirective option='Month'/>
                        <ViewDirective option='Agenda'/>
                    </ViewsDirective>
                    <Inject services={[Day,Week,ICalendarExport,Resize,DragAndDrop]} />
                </ScheduleComponent>
                <Button
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    onClick={this.handClick}
                >
                    Update Calender
                </Button>
            </div>
         );
    }
}
 
export default Scheduler;
