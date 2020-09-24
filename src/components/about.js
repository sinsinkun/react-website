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
			<p>This site was built using react with no 3rd party libraries</p>
			<div className = 'about-me'>
				<div className = 'sidebar'>
					<p>sidebar</p>
				</div>
				<div className = 'main'>
					<p>main info</p>
				</div>
			</div>
		</div>
	);
}

export default About;