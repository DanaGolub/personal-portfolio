import React from 'react'
import githubIcon from '../images/GitHub-Mark-Light-32px.png';
import linkedInLogo from '../images/linkedInlogo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function Footer() {
    return (
        <footer className="footer-component">
            Footer
            <img src={githubIcon} alt="git-logo" />
            {/* <a href="https://www.linkedin.com/in/bohdana-golubiev-1ba17761/"><i class="fa-brands fa-linkedin-in"></i>
            </a> */}
            {/* <FontAwesomeIcon icon="fa-brands fa-linkedin-in" /> */}
            {/* <p><FontAwesomeIcon icon={brands('html5')}  size="3x" className="html5-icon"/></p> */}
        </footer>
    )
}

export default Footer