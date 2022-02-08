// React
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';

// Redux
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
// import {loadItems} from '../store/item.actions.js';
// import {setUser, setUsers} from '../store/user.actions.js';

// Services
import {userService} from '../services/user.service.js';

// Cmps/Pages

// Imgs
// import {logo} from '../assets/imgs/logo/logo.png';

export function AppHeader() {
	// const [loggedInUser, setLoggedInUser] = useState();

	// const dispatch = useDispatch();
	// const location = useLocation();
	const navigate = useNavigate();

	// const loadUsers = async () => {
	// 	const users = await userService.getUsers();
	// 	dispatch(setUsers(users));
	// };

	// useLayoutEffect(() => {
	// 	loadUsers();
	// 	loadUser();
	// }, []);

	// const loadUser = async () => {
	// 	let user = await userService.getLoggedinUser();
	// 	if (!user) user = userService.connectGuestUser();
	// 	setLoggedInUser(user);
	// };

	return (
		<header className='app-header'>
			<div className='main-header flex'>
				<div className='left-container flex'>
					<div className='logo-container flex align-center'>
						<h1 onClick={() => navigate('/')}>Tom Rytt</h1>
						{/* <img src={logo} alt='logo' onClick={() => history.push('/')} /> */}
					</div>
				</div>
				<ul className='navbar'>
					<li onClick={() => navigate('/secondpage')}>Second Page</li>
				</ul>
			</div>
		</header>
	);
}
