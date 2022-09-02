import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div >
            {/* <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm p-3">
              
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
              
                <NavLink to="/appoinment">Book Appoinment</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/register">Register</NavLink>
               
                {user.email && <span style={{ color: 'orange', fontWeight: 'bold' }}>Hello!!{user.displayName}</span>}
                {
                    user?.email && <Button onClick={logOut} variant="primary">LogOut</Button>

                }

            </nav> */}


<Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='header'>
                {/* logo */}
                <NavLink to='/home'><Navbar.Brand className='logo' href="#home">
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block me-2 align-top "
                        alt="React Bootstrap logo"
                    />Dental Health
                </Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav variant="pills" className="ms-auto">
                        {/* links */}
                        <NavLink to='/home'> <Nav.Link href="#home">Home</Nav.Link></NavLink>
                        <NavLink to='/aboutus'> <Nav.Link href="#about">About</Nav.Link></NavLink>
                        <NavLink to='/services'> <Nav.Link href="#services">Services</Nav.Link></NavLink>
                      
                        <NavLink to='/contact'> <Nav.Link href="#contact">Contact</Nav.Link></NavLink>
                        {/* conditional rendering */}
                        {(user.displayName || user.email) &&
                            <Navbar.Text>
                                Signed in as <a href="#login">{(user.displayName || user.email)}</a>
                            </Navbar.Text>
                        }
                        {user.email && <Nav.Link onClick={logOut}>Logout</Nav.Link>}
                        {!user.email &&
                            <NavLink to='/register'> <Nav.Link href="#register">Register</Nav.Link></NavLink>}
                        {!user.email &&
                            <NavLink to='/login'> <Nav.Link href="#login">Login</Nav.Link></NavLink>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </div>
    );
};

export default Header;