import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {AppHeader} from './cmps/AppHeader.jsx';
import routes from './routes.js';

export function RootCmp() {
	return (
		<div className='app h100 flex-column'>
			<header>
				<AppHeader />
			</header>
			<main>
				<Routes>
					{routes.map((route) => (
						<Route key={route.path} exact={true} element={route.component} path={route.path} />
					))}
				</Routes>
			</main>
		</div>
	);
}
