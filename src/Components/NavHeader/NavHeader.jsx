import { Navbar, Container, Nav } from 'react-bootstrap';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";

import "./NavHeader.scss";
import icon from "../../icon.png";

function NavHeader() {
    return (
        <BrowserRouter>
            <Navbar className='container-fluid nav-position' expand="lg" bg="black" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <img
                            alt=""
                            src={icon}
                            width="80"
                            height="50"
                            className="d-inline-block align-middle"
                        />{' '}
                        <h2 className="align-middle">Explore India</h2>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='justify-content-end' />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-links' to='#' smooth>Home</Link>
                            <Link className='nav-links' to='#popular-carousal' smooth>Popular</Link>
                            <Link className='nav-links' to='#top-places' smooth>Top Places</Link>
                            <Link className='nav-links' to='#states-to-visit' smooth>States & UTs</Link>
                            <Link className='nav-links' to='#footer' smooth>About Me</Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </BrowserRouter>
    );
}

export default NavHeader;