import React, { Component } from 'react';
import Scheduler from '../../Components/Scheduler';

class HomePage extends Component {
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
 
export default HomePage;