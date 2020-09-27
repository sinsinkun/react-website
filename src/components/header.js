import React, { useState, useEffect } from 'react';
import '../css/App.css';

function Header(props) {

	const [key, setKey] = useState(0);

	useEffect(()=> {
		//rerender component on props change
		toggleKey();
	}, [props.currentPage]) 

	const toggleKey = () => {
		if (key) setKey(0);
		else setKey(1);
	}

	if (props.currentPage === 'home') {
		return (
			<div className = 'header' style={{background:'linear-gradient(#1abc9c, #dff)'}}>
				<h1 id = {key}>Home Page</h1>
				<p id = {key + 1}>Information {'&'} Filler Text</p>
			</div>
		);
	}
	else if (props.currentPage === 'demos') {
		return (
			<div className = 'header' style={{background:'linear-gradient(#dc6a9c, #dff)'}}>
				<h1 id = {key + 2}>Demos Page</h1>
				<p id = {key + 3}> React application samples</p>
			</div>
		);
	}
	else if (props.currentPage === 'about') {
		return (
			<div className = 'header' style={{background:'linear-gradient(#15b2c4, #dff)'}}>
				<h1 id = {key + 4}>About Page</h1>
				<p id = {key + 5}>Information on site {'&'} me</p>
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