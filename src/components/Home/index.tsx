import { useEffect, useState } from 'react';
import './styles.scss';
import PokemonCard from '../PokemonCard';

const POKEMON_API = 'https://pokeapi.co/api/v2/';

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

	const getPokemon = async (name: any) => {
		const response = await fetch(POKEMON_API + 'pokemon/' + name);
		const data = await response.json();
		return data;
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
