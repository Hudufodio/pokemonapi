import { useEffect, useState } from 'react';
import './styles.scss';
import PokemonCard from '../PokemonCard';
import axios from 'axios';
import { CircularProgress, Pagination } from '@mui/material';

const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/';

const Home = () => {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(POKEMON_API);
	const [nextPage, setNextPage] = useState();
	const [prevPage, setPrevPage] = useState();

	const PokemonData = () =>
		axios.get(currentPage).then((res): any => {
			setLoading(false);
			res.data.results;
			setPokemon(res.data.results);
			setNextPage(res.data.next);
			setPrevPage(res.data.previous);
		});

	useEffect(() => {
		PokemonData();
	}, [currentPage]);

	return (
		<>
			{loading ? <CircularProgress /> : <PokemonCard pokemon={pokemon} />} <Pagination />
		</>
	);
};

export default Home;
