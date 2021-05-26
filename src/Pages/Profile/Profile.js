import ProfileTabs from "Components/Profile/ProfileTabs";
import 'Styles/Profile/Profile.css';
import { AppContext } from 'Context/AppContext';


const Profile = () => {
    return ( 
        <AppContext.Consumer>{(context) => {
            return(
                <div>
                    {
                        context.isLoggedIn
                            &&
                        <div className="container"> 
                            <ProfileTabs />
                        </div> 
                    }
                </div>
            );
        }}
        </AppContext.Consumer>
    );
}
 
export default Profile;