import { useEffect, useState } from 'react';
import './styles.scss';
import PokemonCard from '../PokemonCard';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const api = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

const Home = () => {
	const [pokemonList, setPokemonList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const PokemonData = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(api);
			setPokemonList(response.data.results);
			console.log(response.data.results);
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
			{isLoading ? (
				<CircularProgress />
			) : (
				pokemonList.map((pokemon: any) => {
					return (
						<div className="pokemonList" key={pokemon.id}>
							<PokemonCard pokemon={pokemon} />
						</div>
					);
				})
			)}
		</div>
	);
};

export default Home;
