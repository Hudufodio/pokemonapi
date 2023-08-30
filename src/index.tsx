//internal
import { Hero, Card, PokemonInfo } from './components';

//external imports
import React from 'react';
import ReactDOM from 'react-dom/client';

const Main = () => {
	return (
		<>
			<main>
				<Hero />
				<Card />
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
