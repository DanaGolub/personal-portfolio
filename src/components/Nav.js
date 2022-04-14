import { NavLink } from 'react-router-dom';
import logo from '../images/BohdanaGolubiev-small.png';
import { HashLink } from 'react-router-hash-link';

function Nav() {

  return (
    <div className="nav">
      <div className="navigation-container">
        <div className="left-nav">
          <HashLink to="/#header"><img src={logo} alt="logo" /></HashLink>
        </div>
        <div className="right-nav">
          <ul>
            <HashLink to="/#intro">About</HashLink>
            <HashLink to="/#portfolio">Projects</HashLink>
            <HashLink to="/#footer">Contact</HashLink>
            {/* <HashLink to="/#contact">Contact</HashLink> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav;