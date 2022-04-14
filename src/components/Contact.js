import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';
import Footer from './Footer';

function Console() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="contact-container homepage-section" id="contact">
            {/* 
            <div className="form-container">

                <form id="portfolio" >
                    <label for="name">Name:
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label><br />
                    <label for="email">Email:
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="text" />
                    </label><br />
                    <label for="message">Message:
                        <input
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            type="text" />
                    </label>

                </form>
            </div> */}
            {/* <span id="contact" className="jump-to-block"> &nbsp; </span> */}
            {/* <Footer /> */}
        </div>
    )
}
export default Console


{/* // <form onSubmit={createTask}>
        // <input onChange={e => setTaskTitle(e.target.value)} type="text" />
        // <Button size="small" type="submit">Create</Button >
        // <Button onClick={signOut} size="small" type="submit">Sign Out</Button >
        // </form> */}