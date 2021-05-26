import React, {useContext} from 'react';
import { Link, useHistory } from "react-router-dom";
import {routes} from './routes';
import 'Styles/NavBar/NavBar.css';
import { MdInvertColors,MdKeyboardBackspace } from "react-icons/md";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { AppContext } from 'Context/AppContext';

const NavBar = () => {
    const history = useHistory();
    const appContext = useContext(AppContext);
    const handleClick = () => {
        appContext.toggleAuth();
        history.push("/");
    }
    return (
            <div>
                {
                    appContext.isLoggedIn
                        &&
                    <div>
                        <Navbar bg="primary" variant="dark" expand="lg">
                            <Navbar.Brand as={Link} to='/dashboard'>NAVOL</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    {
                                        routes.map((item) => (
                                            <Nav.Link as={Link} to={'/' + item.path.toLowerCase()} className="margin-text">{item.path}</Nav.Link>     
                                        ))
                                    }
                                </Nav>
                                <Nav className="ml-auto logout-container">
                                <NavDropdown title="Settings" id="basic-nav-dropdown" className="mr-sm-2 logout-container">
                                    <NavDropdown.Item><MdInvertColors /> Switch Theme </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleClick}><MdKeyboardBackspace /> Logout</NavDropdown.Item>
                                </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                }
            </div>
            
    );
}
 
export default NavBar;