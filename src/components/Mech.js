import React, { useEffect } from 'react';
import '../css/Mech.css';

function Mech(props) {

	useEffect(() => {
		props.updatePage('demos');
		window.scrollTo(0,0);
		// eslint-disable-next-line 
	}, [])

	return (
		<div className = 'mech'>
			<h3>Portfolio for Mechanical Design</h3>
			<p>This portfolio shows a few examples of the designs I have previously worked on
				using CAD software. Although it focuses on designs made in Solidworks, I am also
				familiar with other CAD software such as CATIA and AutoCAD.</p>
			<div style={{height:'20px'}}/>
			<p>Ball bearing</p>
			<div style={{height:'20px'}}/>
			<p>Gear box</p>
			<div style={{height:'20px'}}/>
			<p>CNC Machine</p>
			<div style={{height:'40px'}}/>
		</div>
	);
}

export default Mech;