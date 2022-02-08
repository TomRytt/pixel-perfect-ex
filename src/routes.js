import {HomePage} from './pages/HomePage.jsx';
import {SecondPage} from './pages/SecondPage.jsx';

const routes = [
	{path: '/secondpage', component: <SecondPage />, exact: true},
	{path: '/', component: <HomePage />, exact: true},
];

export default routes;
