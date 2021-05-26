import Scheduler from 'Components/Dashboard/Scheduler';
import { AppContext } from 'Context/AppContext';

const Dashboard = () => {
    return (  
        <AppContext.Consumer>{(context) => {
            return(
                <div>
                    {
                        context.isLoggedIn
                            &&
                        <div>
                            <Scheduler />
                        </div>
                    }
                </div>
            );
        }}
        </AppContext.Consumer>
    );
}
 
export default Dashboard;
