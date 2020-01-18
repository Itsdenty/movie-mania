import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaPinterest, FaFacebookSquare } from 'react-icons/fa';

function Footer(props) {
    return (
        <React.Fragment>
            <div className={`app-footer ${props.footerStyle}`}>

                <ul className="social-menu">
                    <li>
                        <NavLink to="/"><FaInstagram /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/"><FaPinterest /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/"><FaTwitter /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/"><FaFacebookSquare /></NavLink>
                    </li>
                </ul>


                <p className="footer-text">@ 2016 Movie Mania <strong>.</strong> Contact <strong>.</strong> Privacy</p>

            </div>
        </React.Fragment>
    );
}

export default Footer;