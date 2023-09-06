import './style.scss';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

type PokemonInfo = {
	json: string;
	data: string;
	URL?: string;
};

const PokemonInfo = () => {
	// const [pokeData, setPokeData] = useState([]);
	// const [loading, setLoading] = useState('true');
	// const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');

	// const Pokefun = async () => {
	// 	setLoading('true');
	// 	const res = await axios.get(url);
	// 	console.log(res.data);
	// };

	// useEffect(() => {
	// 	Pokefun();
	// }, [url]);

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
