import React  from 'react';
import { connect } from 'react-redux'
import Scheduler from 'Components/Dashboard/Scheduler';


const Dashboard = (props) => {
    
    return (  
            <div>
                {
                    props.isLoggedIn
                        &&
                    <div>
                        <Scheduler />
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

export default connect(mapStateTpProps)(Dashboard);
