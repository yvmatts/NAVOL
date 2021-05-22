import React from 'react';
import 'Styles/LoginPage/LoginPage.css';
import logo from 'Assets/Images/narainAviation.png';
import Image from 'react-bootstrap/Image'
import LoginForm from 'Components/LoginPage/LoginForm';
//import Button from 'react-bootstrap/Button'
 const LoginPage = (props) => {
     const handleClick = () => {
         props.setIsLoggedIn(true);
     }
    return ( 
        <div className="outer-container">
            <div className="logo">
                <Image src={logo} rounded />
            </div>
            <div className="login-form">
                <LoginForm handleClick={handleClick}/>
            </div>
        </div>
    );
}

export default LoginPage;