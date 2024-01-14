//external imports
import React from 'react';
import ReactDOM from 'react-dom/client';

//internal
import { Card, Hero } from './components';

import './global.scss';

const App = () => {
	return (
		<div>
			<Card />
			<Hero />
		</div>
	);
};

const div = document.getElementById('root');
if (div) {
	const root = ReactDOM.createRoot(div);

	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}
