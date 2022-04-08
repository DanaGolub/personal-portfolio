import React from 'react'
import githubIcon from '../images/GitHub-Mark-Light-32px.png';
import linkedInLogo from '../images/linkedInlogo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function Footer() {
    return (
        <footer className="footer-component">
            <div className="footer-follow"><p>follow me</p> <img src={githubIcon} alt="git-logo" /><img src={githubIcon} alt="git-logo" /></div>
            <div className="footer-connect">
                <p>let's connect</p>
                <p className="footer-email"><a href="mailto:bogdanako@gmail.com" className="footer-email">bogdanako@gmail.com</a></p>
            </div>
        </footer>
    )
}

export default Footer