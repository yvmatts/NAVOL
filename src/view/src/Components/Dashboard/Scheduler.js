import React, { useState, useEffect } from 'react' 
import 'Styles/Dashboard/Component/Scheduler.css'
import Button from 'react-bootstrap/Button'

import { connect } from 'react-redux'
import { handleSchedule, updateSchedule } from 'Redux/dashboard/dashboardActions'

import { Inject, ScheduleComponent, Day, Week,Agenda,Month,MonthAgenda, ICalendarExport, ViewsDirective, ViewDirective, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule' 
import { L10n } from '@syncfusion/ej2-base'

const Scheduler = (props) => {
/**
 * @function L10n.load (imported from Scheduler package)
 * @description Customizes the Scheduler button text 
 * @params null
 * @returns null
 */
    L10n.load({
        'en-US': {
            'schedule': {
                'saveButton': 'Add'
            }
        }
    })

    const [scheduleObj, setScheduleObj] = useState()

    //  useEffect(() => {
    //     scheduleObj && console.log(scheduleObj.dataModule.dataManager.dataSource.json)
    // },[scheduleObj])
    
/**
 * @function handleSave
 * @description Handles saving of new events added in scheduler 
 * @params null
 * @returns null
 */
    const handleSave = async () =>{
        console.log(scheduleObj.dataModule.dataManager.dataSource.json)
        await props.handleSchedule(scheduleObj.dataModule.dataManager.dataSource.json)
        await props.updateSchedule(props.schedule)
     }
    return (  
        <div>
            <ScheduleComponent width='100%' height='650px' ref={schedule => setScheduleObj(schedule)}>
                <ViewsDirective>
                    <ViewDirective option='Day'/>
                    <ViewDirective option='Week'/>
                    <ViewDirective option='Month'/>
                    <ViewDirective option='Agenda'/>
                </ViewsDirective>
                <Inject services={[Day,Week,Agenda,Month,MonthAgenda,ICalendarExport,Resize,DragAndDrop]} />
            </ScheduleComponent>
            <div className="d-flex">
                <div className="upload_btn">
                    <Button
                        variant="primary"
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                    <Button
                        variant="secondary"
                    >
                        Sync
                    </Button>
                </div>
            </div>   
        </div>
    )
}
const mapStateTpProps = state => {
    return {
        schedule: state.dash.schedule,
        error: state.dash.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleSchedule: (schedule) => dispatch(handleSchedule(schedule)),
        updateSchedule: (schedule) => dispatch(updateSchedule(schedule))
    }
}
 
export default connect(mapStateTpProps, mapDispatchToProps)(Scheduler)
