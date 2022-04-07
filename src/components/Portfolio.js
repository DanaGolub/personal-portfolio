import React, { useState } from 'react'
import PJCart from './PJCard'
import cat from '../images/cat.jpg'
import { listenToAuthHub } from '@aws-amplify/ui'
import { Link } from 'react-router-dom';
import ProjectsList from './ProjectsList'

function Portfolio() {

  const [selectedChoice, setSelectedChoice] = useState("firstApp")

  const projectList = [
    {
      id: "firstApp",
      title: "ThriftBook App"
    },
    {
      id: "secondApp",
      title: "secondApp"
    },
    {
      id: "thirdApp",
      title: "ThriftBook App"
    },
    {
      id: "fourthApp",
      title: "ThriftBook App"
    },
  ]
  return (
    <div className="portfolio-component homepage-section">
      <h2>Portfolio</h2>
      <ul>
        {projectList.map((item) => (
          <ProjectsList
            title={item.title}
            active={selectedChoice === item.id}
            setSelectedChoice={setSelectedChoice}
            id={item.id}
          />
        ))}
      </ul>
      <div className="portfolio-container">

        <Link to="/portfolio/1" className="gallery-item">
          <div className="each-project">
            <img src={cat}
              alt="ThriftBook App Logo"
            />

          </div>
        </Link>

        <Link to="/portfolio/2" className="gallery-item">
          <div className="each-project">
            <img src={cat}
              alt="ThriftBook App Logo"
            />
          </div>
        </Link>

        <Link to="/portfolio/3" className="gallery-item">
          <div className="each-project">
            <img src={cat}
              alt="ThriftBook App Logo"
            />
          </div>
        </Link>

        {/* <Link to="/portfolio/4" className="gallery-item">
          <div className="each-project">
            <img src={cat}
              alt="ThriftBook App Logo"
            />
          </div>
        </Link> */}

      </div>
    </div>
  )
}

export default Portfolio