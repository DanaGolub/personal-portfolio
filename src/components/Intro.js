import React from 'react'
import sky from '../images/sky.jpg';
import photo from '../images/1517378052094.jpg'


function Intro() {
    return (
        <section className="intro-component homepage-section">
            <div className="photo-container">
                <img className="personal-photo" src={photo} alt="sky" />
            </div>
            <div className="about-container">
                <h2>ABOUT ME</h2>
                <p>Thank you for visiting my page!
                    <br />
                    A little bit about me - I am a web/software developer who is about to graduate from the
                    Software Systems Developer Program at BCIT. Dreams come true, I say this with certainty, and well, "you
                    get what you give" is something to add.
                    I am a versatile person who loves spending time with family, trail running, skiing, singing, reading books and learning about new cultures and languages
                    (on both human and programming spectrum). I have lived in 5 different countries before, was born and raised in Ukraine and
                    a part of my childhood spent in Argentina.
                    I hold a Bachelors of Arts from Simon Fraser University (major in Economics) and completed an exchange program
                    at the Universidad Complutense de Madrid a number of years back. <br />
                    I reckon that we live in an ever-changing world, and I strive to propell positive changes. <br />
                    Lets connect.
                </p>
            </div>
        </section>
    )
}

export default Intro