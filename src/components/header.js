import React from 'react';
import '../css/App.css';

function Header(props) {

	if (props.currentPage === 'home') {
		return (
			<div className = 'header' style={{background:'linear-gradient(#5af9bc, #1abc9c)'}}>
				<p>Information {'&'} Filler Text</p>
				<h1>Home Page</h1>
			</div>
		);
	}
	else if (props.currentPage === 'link') {
		return (
			<div className = 'header' style={{background:'linear-gradient(#dc9abc, #dc6a9c)'}}>
				<p>Current Page: {props.currentPage}</p>
				<h1>Link Header</h1>
			</div>
		);
	}
	else if (props.currentPage === 'about') {
		return (
			<div className = 'header' style={{background:'linear-gradient(#35c2e4, #15b2c4)'}}>
				<p>Current Page: {props.currentPage}</p>
				<h1>About Header</h1>
			</div>
		);
	}
	else {
		return (
			<div className = 'header' style={{backgroundColor:'#cc4a4a'}}>
				<p>Current Page: {props.currentPage}</p>
				<p>Error</p>
				<h1>Unknown Header</h1>
			</div>
		);
	}
}

export default Header;