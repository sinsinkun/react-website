import React, { useState, useEffect } from 'react';
import '../css/Demos.css';
import Demo1 from './Demo1.js';

function Demos(props) {

	const [showDemo1, setShowDemo1] = useState();
	
	const noDemo = (
		<div style={{maxWidth:'600px'}}>
			<p>This demo requires a larger screen size. 
				Please make your browser window larger, 
				or use a different device to view this demo.</p>
		</div>
	)

	useEffect(() => {
		props.updatePage('demos');
		window.scrollTo(0,0);
		// eslint-disable-next-line 
	}, [])

	useEffect(() => {
		if (window.innerWidth <= 780) setShowDemo1(noDemo);
		else setShowDemo1(<Demo1 />);

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 780) setShowDemo1(noDemo);
			else setShowDemo1(<Demo1 />);
		})
		// eslint-disable-next-line
	},[])

	return (
		<div className = 'demos'>
			<h3>Demos and stuff</h3>
			<p style={{maxWidth:'720px'}}>The following demo uses react-draggable to create a demo similar to
				the table-top game "Tellstones" by Riot Games.</p>
			<div className='demo-placeholder'>
				{showDemo1}
			</div>
			<div style={{height:'20px'}}/>
			<p>More mini projects coming soon</p>
			<div style={{height:'40px'}}/>
		</div>
	);
}

export default Demos;