import React, { useState, useEffect }from 'react';
import {Link} from 'react-router-dom';
import '../css/App.css';
import logo from '../img/personal_logo_inverted.png';

function NavBar(props) {

	const [lastY, setLastY] = useState(0);
	const [navVis, setNavVis] = useState('navVis');
	const [inSideMenu, setInSideMenu] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	//on page load
	useEffect(() => {
		if (window.innerWidth <= 780) setInSideMenu(true);
		setOpenMenu(false);
	}, [])

	//hide/show navbar on scroll
	useEffect(() => { 
		const timeoutFunc = () => setTimeout(toggleNav, 200);
		window.addEventListener('scroll', timeoutFunc);
		return () => window.removeEventListener('scroll', timeoutFunc);			
	})

	const toggleNav = () => {
		const currentY = window.pageYOffset;
		if (currentY <= 0) setNavVis('navVis');
		if (currentY > lastY) setNavVis('navNotVis');
		else if (currentY < lastY) setNavVis('navVis');
		setLastY(currentY);
	}

	//change to hamburger menu on window resize
	useEffect(() => {
		window.addEventListener('resize', () => {
			const width = window.innerWidth;
			if (width <= 780) setInSideMenu(true);
			else setInSideMenu(false);
			if (width >= 780 && openMenu) setOpenMenu(false);
		})
	})

	const handleClickMenu = () => {
		if (openMenu) setOpenMenu(false);
		else setOpenMenu(true);
	}

	const handleClickLink = () => {
		setOpenMenu(false);
	}

	return (
		<div className = {navVis}>
			<div className = 'navBar'>
				<div className = 'navLogoArea'>
					<img className = 'navLogo' src={logo} alt='logo' height={'35px'} width={'35px'}/>
					<p>React-Test</p>
				</div>
				<div className = {'burgerBtn' + (inSideMenu ? '' : '-hidden')} onClick={handleClickMenu}>
					<div className = 'line1'>{' '}</div>
					<div className = 'line1'>{' '}</div>
					<div className = 'line1'>{' '}</div>
				</div>
				<div className = {'navLinks' + (inSideMenu ? '-in-side-menu' : '') + (openMenu ? '-open' : '')}>
					{props.currentPage === 'home' ? 
						<div className = 'clickedNav' style={{backgroundColor:'rgba(50,50,50,1)'}}>Home</div> :
						<Link to='/' onClick={handleClickLink}>Home</Link>}
					{props.currentPage === 'demos' ? 
						<div className = 'clickedNav' style={{backgroundColor:'rgba(50,50,50,1)'}}>Demos</div> :
						<Link to='/demos' onClick={handleClickLink}>Demos</Link>}
					{props.currentPage === 'about' ? 
						<div className = 'clickedNav' style={{backgroundColor:'rgba(50,50,50,1)'}}>About</div> :
						<Link to='/about' onClick={handleClickLink}>About</Link>}
				</div>
			</div>
		</div>
	);
}

export default NavBar;