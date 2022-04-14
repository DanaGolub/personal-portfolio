import React from 'react'
import githubIcon from '../images/GitHub-Mark-Light-32px.png';
import linkedInLogo from '../images/linkedInlogo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FiLinkedin } from 'react-icons/fi';

function Footer() {
    return (
        <footer className="footer-component" id="footer">
            <div className="footer-follow">
                <p>follow me</p>

                <a href="https://github.com/DanaGolub"><img src={githubIcon} alt="git-logo" /></a>
                <a href="https://www.linkedin.com/in/bohdana-golubiev-1ba17761"><FiLinkedin className="linkedIn-logo" /></a>
            </div>

            <div className="footer-connect">
                <p>let's connect</p>
                <p className="footer-email"><a href="mailto:bogdanako@gmail.com" className="footer-email">bogdanako@gmail.com</a></p>
            </div>
        </footer>
    )
}
export default Footer
