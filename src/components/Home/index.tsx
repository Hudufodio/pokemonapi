import { useEffect, useState } from 'react';
import './styles.scss';
import PokemonCard from '../PokemonCard';
import axios from 'axios';

const api = 'https://pokeapi.co/api/v2/pokemon/';

const Home = () => {
	const [pokemonList, setPokemonList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// console.log(pokemonList);

	const PokemonData = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(api);
			// setPokemonList(response.data.results);
			// const results = response.data.results;
			getPokemon(response.data.results);
			setIsLoading(false);
		} catch (error) {
			console.error('Error message:', error);
		}
	};

	// const url = 'https://pokeapi.co/api/v2/pokemon/';

	const getPokemon = async (results: any) => {
		results.map(async (item: any) => {
			const result = await axios.get(item.url);
			setPokemonList((state: any) => {
				state = [...state, result.data];
				return state;
			});
			return;
		});
	};

	useEffect(() => {
		PokemonData();
	}, []);

	return (
		<div className="main">
			<div className="pokemonList">
				{pokemonList.map((pokemon: any) => (
					<div key={pokemon.id}>
						<PokemonCard pokemon={pokemon} isLoading={isLoading} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
