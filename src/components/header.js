import React from 'react';
import '../css/App.css';

function Header(props) {

	if (props.currentPage === 'home') {
		return (
			<div className = 'header' style={{background:'linear-gradient(#1abc9c, #dff)'}}>
				<h1>Home Page</h1>
				<p>Information {'&'} Filler Text</p>
			</div>
		);
	}
	else if (props.currentPage === 'demos') {
		return (
			<div className = 'header' style={{background:'linear-gradient(#dc6a9c, #dff)'}}>
				<h1>Demos Page</h1>
				<p>React application samples</p>
			</div>
		);
	}
	else if (props.currentPage === 'about') {
		return (
			<div className = 'header' style={{background:'linear-gradient(#15b2c4, #dff)'}}>
				<h1>About Page</h1>
				<p>Information on site {'&'} me</p>
			</div>
		);
	}
	else {
		return (
			<div className = 'header' style={{backgroundColor:'#cc4a4a'}}>
				<h1>Unknown Header</h1>
				<p>Error</p>
				<p>How did you get here</p>
			</div>
		);
	}
}

export default Header;