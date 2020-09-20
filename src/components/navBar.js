import React from 'react';
import {Link} from 'react-router-dom';
import '../css/App.css';

function NavBar(props) {

	return (
		<div className = 'navBar'>
			{props.currentPage === 'home' ? 
				<div className = 'clickedNav' style={{backgroundColor:'#1abc9c'}}>Home</div> :
				<Link to='/'>Home</Link>}
			{props.currentPage === 'link' ? 
				<div className = 'clickedNav' style={{backgroundColor:'#bc1a9c'}}>Link</div> :
				<Link to='/link'>Link</Link>}
			{props.currentPage === 'about' ? 
				<div className = 'clickedNav' style={{backgroundColor:'#9cbc1a'}}>About</div> :
				<Link to='/about'>About</Link>}
		</div>
	);
}

export default NavBar;