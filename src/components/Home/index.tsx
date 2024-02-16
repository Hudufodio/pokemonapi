import { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

//internal imports
import PokemonCard from '../PokemonCard';
import './styles.scss';

const api = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

interface HomeProps {
	pokemonList: any;
	isLoading: boolean;
}

function Home({}: HomeProps) {
	const [pokemonList, setPokemonList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchText, setSearchText] = useState('');

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

	const handleSearch = (e: any) => {
		setSearchText(e.target.value);
	};

	const searchFilter = (pokemonList: any) => {
		return pokemonList.filter((pokemon: any) =>
			pokemon.name.toLowerCase().includes(searchText.toLocaleLowerCase())
		);
	};

	const filteredPokemonList = searchFilter(pokemonList);

	return (
		<div className="main">
			<div className="searchContainer">
				<input
					type="text"
					placeholder="search your favorite character Pikachu, Mew etc"
					value={searchText}
					onChange={handleSearch}
					className="searchInput"
					id="pokemonName"
				/>
			</div>
			<div className="pokemonList">
				{isLoading ? (
					<CircularProgress />
				) : (
					filteredPokemonList.map((pokemon: any) => (
						<div key={pokemon.id}>
							<PokemonCard pokemon={pokemon} />
						</div>
					))
				)}
			</div>
		</div>
	);
}

export default Home;
