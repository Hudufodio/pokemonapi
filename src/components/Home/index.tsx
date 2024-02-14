import { useEffect, useState } from 'react';
import './styles.scss';
import PokemonCard from '../PokemonCard';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const URL = 'https://pokeapi.co/api/v2/pokemon/';

const Home = () => {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(URL);
	const [nextPage, setNextPage] = useState();
	const [prevPage, setPrevPage] = useState();

	const PokemonData = async () => {
		setLoading(true);
		const res = await axios.get(URL);
		getPokemon(res.data.results);
		setPokemon(res.data.results);
		setNextPage(res.data.next);
		setPrevPage(res.data.previous);
		setLoading(false);
	};

	const getPokemon = async (res: any) => {
		res.map(async (pokemon: any) => {
			const result = await axios.get(pokemon.URL);
			// console.log(result.data);
			setPokemon((state: any) => {
				state = [...state, result.data];
				return state;
			});
		});
	};

	useEffect(() => {
		PokemonData();
	}, [currentPage]);

	return (
		<div className="containerHome">
			{loading ? <CircularProgress /> : <PokemonCard pokemonName={pokemon} />}
		</div>
	);
};

export default Home;
