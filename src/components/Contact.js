import React from 'react';
import { useState } from "react";
import githubIcon from '../images/GitHub-Mark-Light-32px.png';
import linkedInLogo from '../images/linkedInlogo.png'
import photo from '../images/1517378052094.jpg'
import { FiLinkedin } from 'react-icons/fi';
import { AiOutlineGithub } from 'react-icons/ai';

function Contact() {
    return (
        <div className="contact-container homepage-section" id="contact">
            <div className="photo-container">
                <img className="personal-photo" src={photo} alt="sky" />
            </div>
            <div className="contact-logo-div">
                <div className="contact-follow">
                    <p>follow me</p>
                    <a className="github-logo-contact" href="https://github.com/DanaGolub"><AiOutlineGithub className="github-logo-contact" /></a>
                    <a href="https://www.linkedin.com/in/bohdana-golubiev-1ba17761"><FiLinkedin className="linkedIn-logo-contact" /></a>
                </div>
                <div className="contact-connect">
                    <p>let's connect</p>
                    <p className="email-contact"><a href="mailto:bogdanako@gmail.com">bogdanako@gmail.com</a></p>
                </div>
            </div>
        </div>
    )
}
export default Contact
