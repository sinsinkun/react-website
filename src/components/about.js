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
			<div style={{height:'40px'}}/>
			<p>This site was built using react with no third party libraries</p>
			<div style={{height:'20px'}} />
			<div className = 'about-me'>
				<div className = 'sidebar'>
					<div className = 'sideImg'>Image</div>
				</div>
				<div className = 'main'>
					<p>Creator: </p><p>JingChang Xiao</p>
					<p>Github: </p>
					<p><a href='https://github.com/sinsinkun/' target='_blank' rel='noopener noreferrer'>
						https://github.com/sinsinkun/
					</a></p>
				</div>
			</div>
		</div>
	);
}

export default About;