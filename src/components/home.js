import React, { useEffect } from 'react';
import '../css/Home.css';

function Home(props) {

	useEffect(() => {
		props.updatePage('home');
		window.scrollTo(0,0);
		// eslint-disable-next-line 
	}, [])

	return (
		<div className = 'home'>
			<div className = 'topImage'>
				<h3>Sub heading</h3>
			</div>
			<div className = 'squeeze1'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.</p>
				<img src='https://via.placeholder.com/400' alt='Stand-in'></img>
			</div>
			<br />
			<div className = 'squeeze2'>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.</p>
				<img src='https://via.placeholder.com/400' alt='Stand-in'></img>
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