import React, { useEffect } from 'react';
import '../App.css';

function Link(props) {

	useEffect(() => {
		props.updatePage('link');
		window.scrollTo(0,0);
		// eslint-disable-next-line 
	}, [])

	return (
		<div>
			<h3>Link Page</h3>
			<p>Subtitle</p>
		</div>
	);
}

export default Link;