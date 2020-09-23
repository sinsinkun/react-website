import React, { useState, useEffect }from 'react';
import {Link} from 'react-router-dom';
import '../css/App.css';
import logo from '../img/personal_logo_inverted.png';

function NavBar(props) {

	const [lastY, setLastY] = useState(0);
	const [navVis, setNavVis] = useState('navVis');
	const [cooldown, setCooldown] = useState(false);

	useEffect(() => { 
		window.addEventListener('scroll', () => {
			const currentY = window.pageYOffset;
			if (currentY <= 0) {
				console.log('top of page');
				setNavVis('navVis');
			}
			if (currentY > lastY && !cooldown) {
				console.log('make nav invisible - ' + lastY + ' to ' + currentY);
				setNavVis('navNotVis');
				setCooldown(true);
			}
			else if (currentY < lastY && !cooldown) {
				console.log('make nav visible again - ' + lastY + ' to ' + currentY);
				setNavVis('navVis');
				setCooldown(true);
			}
			setLastY(currentY);
		})
	})

	useEffect(() => {
			const timeoutFunc = setTimeout(() => { setCooldown(false); }, 400);
			return () => {
				clearTimeout(timeoutFunc);
			}
	}, [cooldown])

	return (
		<div className = {navVis}>
			<div className = 'navBar'>
				<div className = 'navLogoArea'>
					<img className = 'navLogo' src={logo} alt='logo' height={'35px'} width={'35px'}/>
					<p>React-Test</p>
				</div>
				<div className = 'navLinks'>
					{props.currentPage === 'home' ? 
						<div className = 'clickedNav' style={{backgroundColor:'#1abc9c'}}>Home</div> :
						<Link to='/'>Home</Link>}
					{props.currentPage === 'link' ? 
						<div className = 'clickedNav' style={{backgroundColor:'#dc6a9c'}}>Link</div> :
						<Link to='/link'>Link</Link>}
					{props.currentPage === 'about' ? 
						<div className = 'clickedNav' style={{backgroundColor:'#15b2c4'}}>About</div> :
						<Link to='/about'>About</Link>}
				</div>
			</div>
		</div>
		
	);
}

export default NavBar;