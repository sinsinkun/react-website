import React from 'react';
import {Link} from 'react-router-dom';
import '../css/App.css';

function NavBar(props) {

	return (
		<div className = 'navBar'>
			<div className = 'navLogoArea'>
				React-Test
			</div>
			<div className = 'navLinks'>
				{props.currentPage === 'home' ? 
					<div className = 'clickedNav' style={{backgroundColor:'#1abc9c'}}>Home</div> :
					<Link to='/'>Home</Link>}
				{props.currentPage === 'link' ? 
					<div className = 'clickedNav' style={{backgroundColor:'#dc6a9c'}}>Link</div> :
					<Link to='/link'>Link</Link>}
				{props.currentPage === 'about' ? 
					<div className = 'clickedNav' style={{backgroundColor:'#15b2c4'}}>About</div> :
					<Link to='/about'>About</Link>}
			</div>
		</div>
	);
}

export default NavBar;