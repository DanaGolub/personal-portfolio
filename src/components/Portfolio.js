import React from 'react'
import ThriftBook from '../images/Thrift-Book.png'
import ProduceSupplierImg from '../images/PS.png'
import InstaMock from '../images/IM.png'
import { Link } from 'react-router-dom'


function Portfolio() {

  return (
    <div className="portfolio-component homepage-section">
      <h2>Portfolio</h2>
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
            <img src={InstaMock}
              alt="ThriftBook App Logo"
            />
            <p className='hidden-text'>Instag-Mock</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio