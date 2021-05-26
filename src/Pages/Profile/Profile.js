import React, {useContext} from 'react';
import ProfileTabs from "Components/Profile/ProfileTabs";
import 'Styles/Profile/Profile.css';
import { AppContext } from 'Context/AppContext';


const Profile = () => {
    const appContext = useContext(AppContext);
    return ( 
        <div>
        {
            appContext.isLoggedIn
                &&
            <div className="container"> 
                <ProfileTabs />
            </div> 
        }
        </div>
    );
}
 
export default Profile;