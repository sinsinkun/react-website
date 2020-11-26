import React, { useState, useEffect } from 'react';
import '../css/Home.css';

function Home(props) {

	const [isVisible, setVisible] = useState(true);

	useEffect(() => {
		props.updatePage('home');
		window.scrollTo(0,0);
		setVisible(true);
		// eslint-disable-next-line 
	}, [])

	return (
		<div className = 'home'>
			<h3>Welcome</h3>
			<div style={{height:'40px'}} />
			{/* to-do later */}
			<div className = {'fade-in' + (isVisible ? '-is-visible' : '')}>
				<div className = 'squeeze1'>
					<div>
						<p>This is a small example website I put together to play around with
							 creating UI experiences using ReactJS, with  an emphasis on the
							 functional aspects regarding website/React design. Responsive 
							 design is taken into consideration when designing the various
							 aspects of this website.</p>
						<p>I intend to use as few third party libraries as possible, keeping to
							native react functionality except in demos requiring more complicated 
							usability. This site will be updated with more content as I find new and 
							interesting ways to manipulate objects through ReactJS.</p>
					</div>
					<div className = 'fillImage'>Placeholder Image</div>
				</div>
			</div>
			<div style={{height:'40px'}} />
			<div className = {'fade-in' + (isVisible ? '.is-visible' : '')}>
				<div className = 'squeeze2'>
					<p>This website is designed to be responsive, which means that as the screen
						size changes, the pages also adjust to be more accessible for that screen
						size. You can test this functionality by adjusting the window size of your 
						browser, or by switching which device you use to access the website.</p>
					<div className = 'fillImage'>Placeholder Image</div>
				</div>
			</div>
			<div style={{height:'40px'}} />
			<div className = 'botLorem'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
				culpa qui officia deserunt mollit anim id est laborum.
			</div>
			<div style={{height:'40px'}} />
		</div>
	);
}

export default Home;