import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function navBar(props) {
	return (
		<div className = 'navBar'>
			{props.currentPage === 'home' ? <Link to='/'>Home</Link> : <div className = 'clickedNav'>Here</div>}
			<Link to='/link'>Link</Link>
			<Link to='/about'>About</Link>
		</div>
	);
}

export default navBar;