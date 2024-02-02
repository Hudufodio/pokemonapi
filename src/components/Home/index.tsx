import { useEffect, useState } from 'react';
import './styles.scss';
import PokemonCard from '../PokemonCard';

const POKEMON_API = 'https://pokeapi.co/api/v2/';

interface PokemonHomeProps {
	pokemon: any;
	name: string;
	results: any;
}

const Home = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const PokemonData = async () => {
		try {
			const response = await fetch(POKEMON_API + 'pokemon?limit=151&offset=0');
			const data = await response.json();
			setData(data.results);
			setLoading(false);
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
	// console.log(data);

	return (
		<>
			<div className="containerHome">
				<PokemonCard name={data} loading={loading} />;
			</div>
		</>
	);
};

export default Home;
