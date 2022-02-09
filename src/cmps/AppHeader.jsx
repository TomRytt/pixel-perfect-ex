// React

// Imgs
import logo from '../assets/imgs/logo.png';

export function AppHeader() {
	return (
		<header className='app-header'>
			<div className='main-header flex'>
				<div className='left-container flex'>
					<div className='logo-container flex align-center'>
						<img src={logo} alt='' />
					</div>
					<div className='home-about flex flex-center'>
						<span className='home-span flex flex-center'>home</span>
						<span className='about-span flex flex-center'>about</span>
					</div>
				</div>
				<div className='contact-us-btn flex flex-center'>
					<span>contact us</span>
				</div>
			</div>
		</header>
	);
}
