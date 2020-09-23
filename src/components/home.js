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
			<h3>Sub heading</h3>
			{/* to-do later */}
			<div className = {'fade-in' + (isVisible ? '-is-visible' : '')}>
				<div className = 'squeeze1'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.</p>
					<div className = 'topImage'>{' '}</div>
				</div>
			</div>
			<div className = {'fade-in' + (isVisible ? '.is-visible' : '')}>
				<div className = 'squeeze2'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.</p>
					<div className = 'topImage'>{' '}</div>
				</div>
			</div>
			<div className = 'botLorem'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
				culpa qui officia deserunt mollit anim id est laborum.
			</div>
		</div>
	);
}

export default Home;