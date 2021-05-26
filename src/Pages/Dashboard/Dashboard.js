import React, {useContext} from 'react';
import Scheduler from 'Components/Dashboard/Scheduler';
import { AppContext } from 'Context/AppContext';

const Dashboard = () => {
    const appContext = useContext(AppContext);
    return (  
            <div>
                {
                    appContext.isLoggedIn
                        &&
                    <div>
                        <Scheduler />
                    </div>
                }
            </div>
    );
}
 
export default Dashboard;
