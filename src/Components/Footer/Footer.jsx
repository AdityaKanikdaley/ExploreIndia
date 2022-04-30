import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter } from "react-router-dom";
// import { HashLink as Link} from "react-router-hash-link";

import "./Footer.scss";

function Footer() {
    return (
        <BrowserRouter>
        <footer className="site-footer" id="footer">
            <div className="container-fluid">
                <div className="row footer-row">
                    <div className="col-xs-12 col-sm-12 col-md-6 section">
                        <h6>About Me</h6>
                        <p className="text-justify">Hii, I'am <i>Aditya Kanikdaley, </i> a Frontend Application Developer, pursuing my <i>B.Tech in Vellore Institute of Technology, Bhopal.</i> My primary focus is on learning and applying concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript and SQL on frameworks like Flutter and React.js. I have made this website to guid people who are looking to <i>Visit</i> and <i>Explore</i> India.</p>
                    </div>

                    <div className="col-sm-6 col-xs-12 col-md-3">
                        <h6>Technologies Used</h6>
                        <ul className="footer-links">
                            <li><a href="https://reactjs.org/" target={"_blank"} rel="noreferrer">React</a></li>
                            <li><a href="https://react-bootstrap.github.io/" target={"_blank"} rel="noreferrer">Bootstrap</a></li>
                            <li><a href="https://www.npmjs.com/package/create-react-app-sass" target={"_blank"} rel="noreferrer">Scss</a></li>
                            <li><a href="https://v5.reactrouter.com/web/api/Route" target={"_blank"} rel="noreferrer">Routing</a></li>
                            <li><a href="https://dev.to/njdevelopment/help-with-react-map-through-json-data-beh" target={"_blank"} rel="noreferrer">JSON Mapping</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-6 col-xs-12 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a className="linkedin" href="http://www.linkedin.com/in/adityakanikdaley" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> - LinkedIn</a></li>
                            <li><a className="facebook" href="https://www.facebook.com/people/Aditya-Kanikdaley/100004353226781/" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> - Facebook</a></li>
                            <li><a className="github" href="https://github.com/AdityaKanikdaley" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> - GitHub</a></li>
                            <li><a className="instagram" href="https://www.instagram.com/aditya_kanikdaley/" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> - Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <hr />

            </div>
            <div className="container-fluid">
                <div className="row footer-row">
                    <div>
                        <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by  &nbsp;
                            <a href="https://github.com/AdityaKanikdaley" target={'_blank'} rel="noreferrer">Aditya Kanikdaley</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </BrowserRouter>
    );
}

export default Footer;