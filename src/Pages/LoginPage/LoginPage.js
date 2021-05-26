import React, {useContext} from 'react';
import 'Styles/LoginPage/LoginPage.css';
import logo from 'Assets/Images/narainAviation.png';
import LoginForm from 'Components/LoginPage/LoginForm';
import { useHistory } from "react-router-dom";
import { Col, Container, Row, Image} from "react-bootstrap";
import { AppContext } from 'Context/AppContext';


const LoginPage = () => {
    const history = useHistory();
    const appContext = useContext(AppContext);
    const handleClick = () => {
        appContext.toggleAuth();
        history.push('/dashboard');
    }
    return ( 
        <div>
            {
                !appContext.isLoggedIn
                        &&
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
            }
        </div>
    );
}

export default LoginPage;