import React from 'react'

import photo from '../images/1517378052094.jpg'


function Intro() {
    return (
        <section className="intro-component homepage-section">

            <div className="about-container">
                <h2>About Me</h2>
                <p>Thank you for visiting my page!
                    <br />
                    A little bit about me - I am a web/software developer who is about to graduate from an intense hands-on
                    Software Systems Developer Program at BCIT. This journey was about working with multiple technologies nowadays common in software development, working in teams
                    and being able to create meaningful solutions in a concise timeframe.
                    I am a versatile person who loves spending time with family, trail running, skiing, reading books and learning about new cultures and languages
                    (on both human and programming spectrum). I have lived in 5 countries in the past, and I think of myself as an adaptable, communicative and proactive person.
                    I hold a Bachelors of Arts from Simon Fraser University (major in Economics) and completed an exchange program
                    at the Universidad Complutense de Madrid a number of years back. <br />
                    I reckon that we live in an ever-changing world, and I strive to propell positive changes with the use of technology. <br />
                    Lets connect.
                </p>
            </div>
            <div className="techstack-container">
                <div className="techstack-languages">
                    <h2>Languages</h2>
                    <ul className="tech-stack-list">
                        <li>C#</li>
                        <li>SQL</li>
                        <li>NoSql</li>
                        <li>PHP</li>
                        <li>JS</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Sass</li>
                        <li>Kotlin</li>
                    </ul>
                </div>
                <div className="techstack-frameworks">
                    <h2>Frameworks</h2>
                    <ul className="tech-stack-list">
                        <li>Node.js</li>
                        <li>React</li>
                        <li>Vue</li>
                        <li>Angular</li>
                        <li>JS</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Sass</li>
                        <li>Kotlin</li>
                    </ul>
                </div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* <div className="photo-container">
                <img className="personal-photo" src={photo} alt="sky" />
            </div> */}
        </section>
    )
}

export default Intro