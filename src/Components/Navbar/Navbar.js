import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link, Outlet } from 'react-router-dom';
import './navbar.css';

const NavigationBar = () => {
    return (
        <Navbar className="fixed w-full top-0 left-0 p-3 bg-zinc-800 text-neutral-400">
            <Container className="flex flex-row">
                <Navbar.Brand className="text-lg delay-75 hover:text-white" as={Link} to="/">Lorem Ipsum</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                <Nav className="fixed right-4">
                            <NavLink className="nav-link mx-3 text-lg delay-75 hover:text-white" as={Link} to={{ pathname: "/"}}>Login</NavLink>
                            <NavLink className="nav-link mx-3 text-lg delay-75 hover:text-white" as={Link} to={{ pathname: "/register"}}>Register</NavLink>
                            {/* <NavLink className="nav-link mx-2 text-lg hover:text-white" as={Link} to={{ pathname: "/logout" }}>Logout</NavLink> */}
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
