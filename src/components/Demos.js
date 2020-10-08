import React, { useEffect } from 'react';
import '../css/Demos.css';

function Demos(props) {

	useEffect(() => {
		props.updatePage('demos');
		window.scrollTo(0,0);
		// eslint-disable-next-line 
	}, [])

	return (
		<div className = 'demos'>
			<h3>Demos and stuff</h3>
			<p>More mini projects coming soon</p>
		</div>
	);
}

export default Demos;