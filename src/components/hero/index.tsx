import { useState, useEffect } from 'react';
import './style.scss';
import axios from 'axios';

// type Hero = {
// 	data: string;
// };

const Hero = () => {
	const [pokeData, setPokeData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [nextUrl, setNextUrl] = useState();
	const [previousUrl, setPreviousUrl] = useState();

	//acces the API endpoint
	const url = 'https://pokeapi.co/api/v2/pokemon/?_limit=6';

	const getPokemon = async (res: any) => {
		res.map(async (item: any) => {
			const result = await axios.get(item.url);
			console.log(res.data.result);
			console.log(result.data);
			setPokeData((state) => {
				state = [...state, result.data];
				return state;
			});
		});
	};

	const pokeFun = async () => {
		setIsLoading(true);
		const res = await axios.get(url);
		setNextUrl(res.data.next);
		setPreviousUrl(res.data.previous);
		getPokemon(res.data.results);
	};

	useEffect(() => {
		pokeFun();
	}, [url]);

	return (
		<>
			<div className="container"></div>
		</>
	);
};

export default Hero;
