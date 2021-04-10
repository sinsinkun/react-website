import { NavLink } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { winDimContext } from '../App';

function Navbar(props) {

  const winSize = useContext(winDimContext);

  useEffect(() => {
    if (winSize.x >= 780) props.toggleSideNav(false);
    // eslint-disable-next-line
  }, [winSize])

  function openSideNav() {
    // on click, show sidenav
    if (props.showSideNav) props.toggleSideNav(false);
    else props.toggleSideNav(true);
  }
  // desktop screen size
  return(
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          JingChang Xiao
        </div>
        {winSize.x > 780 ? 
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link" activeClassName="active">Past Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">Contact Me</NavLink>
            </li>
          </ul> : 
          <button className="btn" style={{color:"lightgrey"}} onClick={openSideNav}>
            <span>Menu</span>
          </button>
        }
      </div>
    </nav>
  )
}

export default Navbar;