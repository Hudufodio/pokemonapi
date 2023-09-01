//internal
import { Card, Hero, PokemonInfo } from './components';

//external imports
import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.scss';

const Main = () => {
	return (
		<>
			<main>
				<Card />
				<Hero />
				<PokemonInfo />
			</main>
		</>
	);
};

const div = document.getElementById('root');
if (div) {
	const root = ReactDOM.createRoot(div);

	root.render(
		<React.StrictMode>
			<Main />
		</React.StrictMode>
	);
}
