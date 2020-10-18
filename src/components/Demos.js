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
			{noDemo}
			<p>More mini projects coming soon</p>
		</div>
	);
}

const noDemo = (
	<div>
		<p>This demo requires a larger screen size. 
			Please make your browser window larger, 
			or use a different device to view this demo.</p>
	</div>
)

export default Demos;