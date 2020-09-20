import React, { useEffect } from 'react';
import '../css/App.css';

function About(props) {

	useEffect(() => {
		props.updatePage('about');
		window.scrollTo(0,0);
		// eslint-disable-next-line 
	}, [])

	return (
		<div>
			<h3>About page</h3>
			<p>Subtitle</p>
		</div>
	);
}

export default About;