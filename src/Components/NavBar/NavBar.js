import React from 'react';
import { Link, useHistory } from "react-router-dom";
import {routes} from './routes';
import 'Styles/NavBar/NavBar.css';
/**
 * 
 * React Bootstrap Components 
 * 
 */

import { MdInvertColors,MdKeyboardBackspace } from "react-icons/md";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

const NavBar = (props) => {
    const history = useHistory();
    const handleClick = () => {
        props.setIsLoggedIn(false);
        history.push("/");
    }
    return (
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
    );
}
 
export default NavBar;