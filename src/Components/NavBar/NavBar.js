import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {routes} from './routes';
import 'Styles/NavBar/NavBar.css';
/**
 * 
 * React Bootstrap Components 
 * 
 */

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = (props) => {
        
       return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
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
                    </Navbar.Collapse>
                </Navbar>
            </div>
      );
}
 
export default NavBar;