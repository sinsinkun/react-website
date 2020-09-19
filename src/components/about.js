import React, { useEffect } from 'react';
import '../App.css';

function About (props) {

	useEffect(
		() => {props.updatePage('about')}
		// eslint-disable-next-line 
	, [])

	return (
		<div>
			<h3>About page</h3>
			<p>Subtitle</p>
		</div>
	);
}

export default About;