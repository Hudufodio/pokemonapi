import { useEffect, useState } from 'react';
import './styles.scss';
import PokemonCard from '../PokemonCard';

const POKEMON_API = 'https://pokeapi.co/api/v2/';

// interface PokemonHomeProps {
// 	pokemon: any;
// 	name: string;
// 	results: any;
// }

// const pokeObject = {
// 	name: 'bulbasaur',
// 	url: 'https://pokeapi.co/api/v2/pokemon/1/',
// };

export const getPokemon = async (name: any) => {
	const response = await fetch(POKEMON_API + 'pokemon/' + name);
	const data = await response.json();
	return data;
};

const Home = () => {
	const [data, setData] = useState([]);

	const PokemonData = async () => {
		try {
			const response = await fetch(POKEMON_API + 'pokemon?limit=151&offset=0');
			const data = await response.json();
			setData(data.results);
			// console.log(data.results);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	useEffect(() => {
		PokemonData();
	}, []);

	return (
		<>
			<div className="containerHome">
				<PokemonCard pokemonObject={data} />
			</div>
		</>
	);
};

export default Home;
