import { Navbar, Container, Nav } from 'react-bootstrap';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Header.scss";
import icon from "../../icon.png";

function NavHeader() {
    return (
        <Navbar className='container-fluid' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={icon}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    Explore India
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='justify-content-end' />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavHeader;