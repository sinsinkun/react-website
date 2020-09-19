import React, { useEffect } from 'react';
import '../App.css';

function Home(props) {

	useEffect(
		() => {props.updatePage('home')}
		// eslint-disable-next-line 
	, [])

	return (
		<div>
			<h3>Home Page</h3>
			<p>Subtitle</p>
		</div>
	);

}

export default Home;