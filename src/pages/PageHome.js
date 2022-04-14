import React from 'react';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Header from '../components/Header';

function PageHome() {
    return (
        <>
            <Header />
            <span id="intro" className="jump-to-block"> &nbsp; </span>
            <Intro />
            <span id="portfolio" className="jump-to-block"> &nbsp; </span>
            <Portfolio />
            <span id="contact" className="jump-to-block"> &nbsp; </span>
            <Contact />
            {/* <span id="footer" className="jump-to-block"> &nbsp; </span> */}
        </>
    )
}

export default PageHome