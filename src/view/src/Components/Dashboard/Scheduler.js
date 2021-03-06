import React, { Component } from 'react' 
import 'Styles/Dashboard/Component/Scheduler.css'
import {Inject, ScheduleComponent, Day, Week,WorkWeek,Agenda,Month,MonthAgenda, ICalendarExport, ViewsDirective, ViewDirective, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule' 
import Button from 'react-bootstrap/Button' 

class Scheduler extends Component {
    handClick = () =>{
        this.scheduleObj.exportToICalendar() 
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
                    <Inject services={[Day,Week,WorkWeek,Agenda,Month,MonthAgenda,ICalendarExport,Resize,DragAndDrop]} />
                </ScheduleComponent>
                <div className="row">
                    <div className="upload_btn">
                        <Button
                            variant="primary"
                            onClick={this.handClick}
                        >
                            Save
                        </Button>
                    </div>
                </div>   
            </div>
         ) 
    }
}
 
export default Scheduler 
