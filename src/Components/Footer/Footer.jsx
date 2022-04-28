import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link} from "react-router-hash-link";

import "./Footer.scss";

function Footer() {
    return (
        <BrowserRouter>
        <footer className="site-footer" id="footer">
            <div className="container-fluid">
                <div className="row footer-row">
                    <div className="col-xs-12 col-sm-12 col-md-6 section">
                        <h6>About</h6>
                        <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                    </div>

                    <div className="col-sm-6 col-xs-12 col-md-3">
                        <h6>Technology Used</h6>
                        <ul className="footer-links">
                            <li><a href="https://reactjs.org/" target={"_blank"}>React</a></li>
                            <li><a href="https://react-bootstrap.github.io/" target={"_blank"}>React-Bootstrap</a></li>
                            <li><a href="https://www.npmjs.com/package/create-react-app-sass" target={"_blank"}>Scss</a></li>
                            <li><a href="https://v5.reactrouter.com/web/api/Route" target={"_blank"}>Routing</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-6 col-xs-12 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><Link to='#home' smooth>Home</Link></li>
                            <li><a href="http://scanfcode.com/about/">About</a></li>
                            <li><a href="http://scanfcode.com/contact/">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <hr />

            </div>
            <div className="container-fluid">
                <div className="row footer-row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2022a All Rights Reserved by  &nbsp;
                            <a href="#">Aditya Kanikdaley</a>.
                        </p>
                    </div>

                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="linkedin" href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
                            <li><a className="facebook" href="#"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                            <li><a className="github" href="#"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
                            <li><a className="instagram" href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </BrowserRouter>
    );
}

export default Footer;