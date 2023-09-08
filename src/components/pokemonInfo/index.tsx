import './style.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

type PokemonInfo = {
	json: string;
	data: string;
	URL?: string;
};

const PokemonInfo = () => {
	const [pokeData, setPokeData] = useState([]);
	const [loading, setLoading] = useState('true');
	const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
	const [nextUrl, setNextUrl] = useState();
	const [previousUrl, setPreviousUrl] = useState();

	const Pokefun = async () => {
		setLoading('true');
		const res = await axios.get(url);
		console.log(res.data.results);
		setNextUrl(res.data.next);
		setPreviousUrl(res.data.previous);
		getPokemon(res.data.results);
		setLoading('false');
	};

	const getPokemon = async(res: any) => {
		res.map(async(item: any) => {
			const result = await axios.get(item.url);
			setPokeData(state) => {
				state = [...state, result.data];
				return state;
			}
		})
	}

	useEffect(() => {
		Pokefun();
	}, [url]);

	// //API fetch
	// const Pokeapi = async () => {
	// 	const response = await fetch('https://pokeapi.co/api/v2/pokemon/', {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Accept: 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			data: pokeData,
	// 		}),
	// 	});
	// 	const Pokefun = () => {
	// 		setLoading('true');
	// 		console.log(response);
	// 		const data = await(response as Response).json();
	// 	};

	// 	useEffect(() => {
	// 		Pokefun();
	// 	}, []);
	// };

	// return Response.json('data');

	return <></>;
};

export default PokemonInfo;
