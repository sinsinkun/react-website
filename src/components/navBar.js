import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useStoreContext } from './GlobalStore';

function Navbar() {
  
  const [store] = useStoreContext();
  const navSide = useRef(null);
  const invisBg = useRef(null);

  function openNavSide() {
    if (navSide.current.classList.contains("hidden")) {
      navSide.current.classList.remove("hidden");
      invisBg.current.classList.remove("hidden");
    }
    else {
      navSide.current.classList.add("hidden");
      invisBg.current.classList.add("hidden");
    }
  }

  if (store.winX > 980) return(
    <div className="navbar">
      <span>JingChang Xiao</span>
      <div className="navbar-mid"></div>
      <div className="navbar-nav">
        <NavLink exact to="/" activeClassName="active" className="navlinks">HOME</NavLink>
        <NavLink to="/demos" activeClassName="active" className="navlinks">DEMOS</NavLink>
        <NavLink to="/projects" activeClassName="active" className="navlinks">PROJECTS</NavLink>
        <NavLink to="/about" activeClassName="active" className="navlinks">ABOUT ME</NavLink>
      </div>
    </div>
  )
  else return(
    <>
      <div className="navbar">
        <span>JingChang Xiao</span>
        <div className="navbar-mid"></div>
        <div className="navbar-nav">
          <button className="navlinks" onClick={openNavSide}>
            <div className="hamburger"></div>
          </button>
        </div>
      </div>
      <div className="nav-side hidden" ref={navSide} onClick={openNavSide}>
        <NavLink exact to="/" activeClassName="active" className="navlinks">HOME</NavLink>
        <NavLink to="/demos" activeClassName="active" className="navlinks">DEMOS</NavLink>
        <NavLink to="/projects" activeClassName="active" className="navlinks">PROJECTS</NavLink>
        <NavLink to="/about" activeClassName="active" className="navlinks">ABOUT ME</NavLink>
      </div>
      <div className="invis-bg hidden" ref={invisBg} onClick={openNavSide}></div>
    </>
  )
}

export default Navbar;