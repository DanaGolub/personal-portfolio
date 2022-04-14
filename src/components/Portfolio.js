import React, { useState } from 'react'
import PJCart from './PJCard'
import cat from '../images/cat.jpg'
import ThriftBook from '../images/ThriftBook.PNG'
import ProduceSupplierImg from '../images/Produce-Supplier-desktop.PNG'
// import ProduceSupplierImg from '../images/Produce-Supplier-desktop.PNG'
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
    }
  ]
  return (
    <div className="portfolio-component homepage-section">
      <h2>Portfolio</h2>
      {/* <ul>
        {projectList.map((item) => (
          <ProjectsList
            title={item.title}
            active={selectedChoice === item.id}
            setSelectedChoice={setSelectedChoice}
            id={item.id}
          />
        ))}
      </ul> */}
      <div className="portfolio-container">

        <Link to="/portfolio/1" className="gallery-item">
          <div className="each-project">
            <img

              src={ThriftBook}
              alt="ThriftBook App Logo"
            />
            <p className='hidden-text'>Thrift Book App</p>
          </div>
        </Link>

        <Link to="/portfolio/2" className="gallery-item">
          <div className="each-project">
            <img
              className="prsp"
              src={ProduceSupplierImg}
              alt="ThriftBook App Logo"
            />
            <p className='hidden-text'>Produce-Supplier Web App</p>
          </div>
        </Link>

        <Link to="/portfolio/3" className="gallery-item">
          <div className="each-project">
            <img src={cat}
              alt="ThriftBook App Logo"
            />
            <p className='hidden-text'>Movie App</p>
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