import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styling/popup.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const Popup = ({setListOpen, listOpen}) => {
    const useLockBodyScroll = () => {
        useLayoutEffect(() => {
         // Get original body overflow
         const originalStyle = window.getComputedStyle(document.body).overflow;  
         // Prevent scrolling on mount
         document.body.style.overflow = 'hidden';
         // Re-enable scrolling when component unmounts
         return () => document.body.style.overflow = originalStyle;
         }, []); // Empty array ensures effect is only run on mount and unmount
      }
    
    useLockBodyScroll();

    return (
        <div className="popup-wrapper">
            <div className="popup-left">
                <div className="popup-links">
                    <Link className="popup-link" to="/" onClick={() => setListOpen(!listOpen)}>Home</Link>
                    <Link className="popup-link" onClick={() => setListOpen(!listOpen)} to="/projects">Projects</Link>
                    <Link className="popup-link" to="/about" onClick={() => setListOpen(!listOpen)}>About</Link>
                </div>
            </div>

            <div className="popup-right">
                <img className="me" alt="me" src={process.env.PUBLIC_URL + '/me.png'} /> 

                <h3>I'm Esther.</h3>
                <p>I'm a software engineer at IBM working under the Cloud Pak Acceleration Team.
                    I help enterprises move their mission critical workloads onto the cloud.
                </p>
                
                <div className="social-media-links">
                    <a href="mailto:esther.baek5@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" className="social-media-icon"/></a>
                    <a href="https://github.com/ebaek"><FontAwesomeIcon icon={faGithub} size="2x" className="social-media-icon"/></a>
                    <a href="https://www.linkedin.com/in/ebaek5/"><FontAwesomeIcon icon={faLinkedin} size="2x" className="social-media-icon"/></a>
                </div>
            </div>
        </div>
    );
}

export default Popup;