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
			<div className = 'header' style={{background:'linear-gradient(#1abc9c, #dff)'}}>
				<h1 key={aKey}>Home Page</h1>
				<p key={aKey+1}>Information {'&'} Filler Text</p>
			</div>
		);
	}
	else if (props.currentPage === 'demos') {
		return (
			<div className = 'header' style={{background:'linear-gradient(#dc6a9c, #dff)'}}>
				<h1 key={aKey+2}>Demos Page</h1>
				<p key={aKey+3}> React application samples</p>
			</div>
		);
	}
	else if (props.currentPage === 'about') {
		return (
			<div className = 'header' style={{background:'linear-gradient(#15b2c4, #dff)'}}>
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

export default Header;