import React, { Component } from 'react';
import './styles/Scheduler.css'
import {Inject, ScheduleComponent, Day, Week, ICalendarExport, ViewsDirective, ViewDirective, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
//Scheduler functions


class Scheduler extends Component {
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
                <div className="row">
                    <div className="upload_btn">
                        <Button
                            variant="contained"
                            startIcon={<CloudUploadIcon />}
                        >
                            Update
                        </Button>
                    </div>
                    <div className="upload_btn">
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<SaveIcon />}
                            onClick={this.handClick}
                        >
                            Save
                        </Button>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default Scheduler;
