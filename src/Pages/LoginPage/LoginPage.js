import React from 'react';
import 'Styles/LoginPage/LoginPage.css';
import logo from 'Assets/Images/narainAviation.png';
import LoginForm from 'Components/LoginPage/LoginForm';
import { Col, Container, Row, Image} from "react-bootstrap";


const LoginPage = (props) => {
     const handleClick = () => {
         props.setIsLoggedIn(true);
     }
    return ( 
        <div className="outer-container">
            <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12} className="text-center mt-4 p-3">
                                <Image src={logo} rounded />
                                <LoginForm handleClick={handleClick}/>
                        </Col>
                    </Row>
            </Container>
        </div>
        
    );
}

export default LoginPage;