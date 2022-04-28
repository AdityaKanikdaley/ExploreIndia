import { Navbar, Container, Nav } from 'react-bootstrap';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link} from "react-router-hash-link";

import "./Header.scss";
import icon from "../../icon.png";

//importing components
// import VideoPlayer from '../VideoPlayer/Player';
// import Footer from '../Footer/Footer';


function NavHeader() {
    return (
        <BrowserRouter>
            <Navbar className='container-fluid nav-position' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <img
                            alt=""
                            src={icon}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        <h2>Explore India</h2>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='justify-content-end' />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-links' to='#home' smooth>Home</Link>
                            <Link className='nav-links' to='#footer' smooth>About</Link>
                            <Link className='nav-links' to='#home' smooth>Map</Link>
                            <Link className='nav-links' to='#footer' smooth>Contact</Link>

                            {/* <Nav.Link className='nav-links' href="#home">About</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </BrowserRouter>
    );
}

export default NavHeader;