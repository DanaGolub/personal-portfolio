import React from 'react'
import sky2 from '../images/sky2.jpg';
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Header() {
  const textRef = useRef();


  useEffect(() => {
    init(textRef.current,
      {
        showCursor: false,
        strings: ['Hi, my name is Dana'],
        showCursor: true
      });
  }, [])

  return (
    <header>
      <div id="header" className="header-component">
        <img src={sky2} alt="sky" />
        <div className="aboutme-header">
          <h1>
            <span className="name" ref={textRef}>

            </span>
          </h1>
        </div>
      </div>
    </header>
  )
}
export default Header