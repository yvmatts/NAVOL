import React, { Component } from 'react';
import Scheduler from '../../Components/SchedulerComponent/Scheduler';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <Scheduler />
            </div>
        );
    }
}
 
export default Dashboard;