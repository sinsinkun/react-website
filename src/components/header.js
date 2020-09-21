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
	else if (props.currentPage === 'link') {
		return (
			<div className = 'header' style={{background:'linear-gradient(#dc6a9c, #dff)'}}>
				<h1>Link Header</h1>
				<p>Subtitle</p>
			</div>
		);
	}
	else if (props.currentPage === 'about') {
		return (
			<div className = 'header' style={{background:'linear-gradient(#15b2c4, #dff)'}}>
				<h1>About Header</h1>
				<p>Subtitle</p>
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