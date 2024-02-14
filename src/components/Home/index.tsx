import { useEffect, useState } from 'react';
import './styles.scss';
import PokemonCard from '../PokemonCard';
import axios from 'axios';
// import { CircularProgress } from '@mui/material';

const api = 'https://pokeapi.co/api/v2/pokemon/';

const Home = () => {
	const [pokemonList, setPokemonList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const PokemonData = async () => {
		try {
			const response = await axios.get(api);
			setPokemonList(response.data.results);
			setIsLoading(false);
		} catch (error) {
			console.error('Error message:', error);
		}
	};

	useEffect(() => {
		PokemonData();
	}, []);

	return (
		<div className="pokemonList">
			{pokemonList?.map((pokemon: any) => (
				<PokemonCard key={pokemon.id} name={pokemon.name} />
			))}
		</div>
	);
};

export default Home;
