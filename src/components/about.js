import React, { useEffect } from 'react';
import '../css/About.css';
import ScrollableBio from './ScrollableBio.js';

function About(props) {

	useEffect(() => {
		props.updatePage('about');
		window.scrollTo(0,0);
		// eslint-disable-next-line 
	}, [])

	return (
		<div className = 'about'>
			<h3>This site was built using react with no third party libraries</h3>
			<div style={{height:'20px'}} />
			{/* First Block */}
			<div className = 'about-me'>
				<div className = 'sidebar'>
					<div className = 'sideImg' />
				</div>
				<div className = 'info'>
					<p>Creator: JingChang Xiao</p>
					<p>Email: chang.x1994@gmail.com</p>
					<p>Phone Number: 416 834 7055</p>
					<p>Github: <a href='https://github.com/sinsinkun/' target='_blank' rel='noopener noreferrer'>
						https://github.com/sinsinkun/
					</a></p>
				</div>
				<div className = 'scrollable-bio'>
					<ScrollableBio />
				</div>
			</div>
			<div style={{height:'20px'}} />
			{/* Second Block */}
			<div className = 'about-me'>
					<p>Other Projects: </p>
					<p><a href='https://saqlain.pro/' target='_blank' rel='noopener noreferrer'>
						https://saqlain.pro/
					</a></p>
			</div>
			<div style={{height:'40px'}} />
		</div>
	);
}

export default About;