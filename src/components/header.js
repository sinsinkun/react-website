import React, { useState, useEffect } from 'react';
import '../css/App.css';

function Header(props) {

	const [aKey, setKey] = useState(0);

	useEffect(()=> {
		//force rerender on props change
		toggleKey();
		// eslint-disable-next-line 
	}, [props.currentPage]) 

	const toggleKey = () => {
		if (aKey) setKey(0);
		else setKey(1);
	}

	if (props.currentPage === 'home') {
		return (
			<div className = 'header' style={homeColor}>
				<h1 key={aKey}>Home Page</h1>
				<p key={aKey+1}>Information {'&'} Filler Text</p>
			</div>
		);
	}
	else if (props.currentPage === 'demos') {
		return (
			<div className = 'header' style={demoColor}>
				<h1 key={aKey+2}>Demos Page</h1>
				<p key={aKey+3}> React application samples</p>
			</div>
		);
	}
	else if (props.currentPage === 'about') {
		return (
			<div className = 'header' style={aboutColor}>
				<h1 key={aKey+4}>About Page</h1>
				<p key={aKey+5}>Information on site {'&'} me</p>
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

const homeColor = {
	background:'linear-gradient(135deg, rgba(10,4,4,1) 0%, rgba(42,71,66,1) 50%, rgba(86,184,61,1) 76%, rgba(14,47,18,1) 100%)'
}
const demoColor = {
	background:'linear-gradient(135deg, rgba(10,4,4,1) 0%, rgba(87,14,33,1) 50%, rgba(235,57,199,1) 76%, rgba(37,14,18,1) 100%)'
}
const aboutColor = {
	background:'linear-gradient(135deg, rgba(10,4,4,1) 0%, rgba(18,28,84,1) 50%, rgba(27,174,187,1) 76%, rgba(14,17,28,1) 100%)'
}

export default Header;