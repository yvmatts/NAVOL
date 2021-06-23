import React  from 'react';
import { connect } from 'react-redux'
import ProfileTabs from "Components/Profile/ProfileTabs";
import 'Styles/Profile/Profile.css';


const Profile = (props) => {
    
    return ( 
        <div>
        {
            props.isLoggedIn
                &&
            <div className="container"> 
                <ProfileTabs />
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
  
  export default connect(mapStateTpProps)(Profile);