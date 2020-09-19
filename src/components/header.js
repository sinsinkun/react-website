import React from 'react';
import '../App.css';

function header(props) {

	if (props.currentPage === 'home') {
		return (
			<div className = 'header' style={{backgroundColor:'#1abc9c'}}>
				<p>Current Page: {props.currentPage}</p>
				<h1>Home Header</h1>
			</div>
		);
	}
	else if (props.currentPage === 'link') {
		return (
			<div className = 'header' style={{backgroundColor:'#bc1a9c'}}>
				<p>Current Page: {props.currentPage}</p>
				<h1>Link Header</h1>
			</div>
		);
	}
	else if (props.currentPage === 'about') {
		return (
			<div className = 'header' style={{backgroundColor:'#9cbc1a'}}>
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

export default header;