import { useEffect, useState } from 'react';
import axios from 'axios';

//internal imports
import PokemonCard from '../PokemonCard';
import './styles.scss';
import Search from '../Search';

const api = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

function Home() {
	const [pokemonList, setPokemonList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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

	const PokemonData = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(api);
			getPokemon(response.data.results);
			setIsLoading(false);
		} catch (error) {
			console.error('Error message:', error);
		}
	};

	useEffect(() => {
		PokemonData();
	}, []);

	return (
		<div className="main">
			<Search />
			<div className="pokemonList">
				{pokemonList.map((pokemon: any) => (
					<div key={pokemon.id}>
						<PokemonCard pokemon={pokemon} isLoading={isLoading} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
