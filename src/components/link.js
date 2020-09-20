import React, { useEffect } from 'react';
import '../css/Link.css';

function Link(props) {

	useEffect(() => {
		props.updatePage('link');
		window.scrollTo(0,0);
		// eslint-disable-next-line 
	}, [])

	return (
		<div className = 'link'>
			<div>Top</div>
			<p>Subtitle</p>
		</div>
	);
}

export default Link;