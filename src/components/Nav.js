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
            <HashLink to="/#intro">about</HashLink>
            <HashLink to="/#portfolio">projects</HashLink>
            <HashLink to="/#contact">contact</HashLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav;