import React, { useEffect} from 'react' 
import 'Styles/NavBar/NavBar.css' 
import { MdInvertColors,MdKeyboardBackspace } from "react-icons/md" 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap' 
import { Link, useHistory } from "react-router-dom" 
import { connect } from 'react-redux'
import {routes} from './routes' 
import { fetchLogoutRequest } from 'Redux/auth/authAction'
import { handleFormValidation } from 'Redux/loginPage/loginPageActions'

const NavBar = (props) => {
    const history = useHistory() 

    useEffect(() =>{
        if(!props.isLoggedIn){
            history.push(props.redirectUrl)
        }

    },[props.isLoggedIn, history]) 

    const handleClick = async () => {
        await props.fetchLogoutRequest()
        props.handleFormValidation(false)
    }
    return (
            <div>
                {
                    props.isLoggedIn
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
            
    ) 
}

const mapStateTpProps = state => {
    return {
        isLoggedIn : state.auth.isLoggedIn,
        redirectUrl: state.auth.redirectUrl
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchLogoutRequest : () => dispatch(fetchLogoutRequest()),
        handleFormValidation: (flag) => dispatch(handleFormValidation(flag))
    }
}

export default connect(mapStateTpProps, mapDispatchToProps)(NavBar) 