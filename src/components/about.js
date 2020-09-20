import React, { useEffect } from 'react';
import '../css/About.css';

function About(props) {

	useEffect(() => {
		props.updatePage('about');
		window.scrollTo(0,0);
		// eslint-disable-next-line 
	}, [])

	return (
		<div className = 'about'>
			<div>Top</div>
			<h3>About page</h3>
			<p>Subtitle</p>
		</div>
	);
}

export default About;