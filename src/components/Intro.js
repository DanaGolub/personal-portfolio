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
                <p>*Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nostrum explicabo quasi labore odit quaerat! Debitis fugit in
                    illo laborum quia, itaque vitae, quas ratione et culpa consequuntur
                    dolores magnam dolorem!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nostrum explicabo quasi labore odit quaerat! Debitis fugit in
                    illo laborum quia, itaque vitae, quas ratione et culpa consequuntur
                    dolores magnam dolorem!
                    <br /><br />
                    *Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nostrum explicabo quasi labore odit quaerat! Debitis fugit in
                    illo laborum quia, itaque vitae, quas ratione et culpa consequuntur
                    dolores magnam dolorem!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nostrum explicabo quasi labore odit quaerat! Debitis fugit in
                    illo laborum quia, itaque vitae, quas ratione et culpa consequuntur
                    dolores magnam dolorem!
                </p>
            </div>
        </section>
    )
}

export default Intro