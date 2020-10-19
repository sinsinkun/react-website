import React, { useState, useEffect } from 'react';
import '../css/Demos.css';
import Demo1 from './Demo1.js';

function Demos(props) {

	const [showDemo1, setShowDemo1] = useState();
	const [demo1Dummy, setDemo1Dummy] = useState(<p>Click to load Demo</p>);

	const loadDemo1 = () => {
		console.log('load demo');
		setDemo1Dummy(Demo1);
	}

	const noDemo = (
		<div style={{maxWidth:'600px'}}>
			<p>This demo requires a larger screen size. 
				Please make your browser window larger, 
				or use a different device to view this demo.</p>
		</div>
	)

	const demo1 = (
		<div className = 'demo-placeholder' onClick={loadDemo1}>
			{demo1Dummy}
		</div>
	)

	useEffect(() => {
		props.updatePage('demos');
		window.scrollTo(0,0);
		// eslint-disable-next-line 
	}, [])

	useEffect(() => {
		if (window.innerWidth <= 780) setShowDemo1(noDemo);
		else setShowDemo1(demo1);

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 780) setShowDemo1(noDemo);
			else setShowDemo1(demo1);
		})
		// eslint-disable-next-line
	},[])

	return (
		<div className = 'demos'>
			<h3>Demos and stuff</h3>
			{showDemo1}
			<div style={{height:'20px'}}/>
			<p>More mini projects coming soon</p>
			<div style={{height:'40px'}}/>
		</div>
	);
}

export default Demos;