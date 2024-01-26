import { useState, useEffect } from 'react';
import Card from '../Card';
import './styles.scss';

import axios from 'axios';

const Home = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [prevUrl, setPrevUrl] = useState();
	const [nextUrl, setNextUrl] = useState();
	const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
	// const [pokeDetail, setPokeDetail] = useState();

	// const { results }: any = data;

	const fetchData = async () => {
		try {
			setLoading(true);
			const res = await axios.get(url);
			setNextUrl(res.data?.next);
			setPrevUrl(res.data?.previous);
			getPokemon(res.data.results);
			setLoading(false);
			// console.log(data);
		} catch (error) {
			const errorMessage = (error as Error).message;
			console.error(errorMessage);
		}
	};

	const getPokemon: (getPokemon: any) => void = async (res: any) => {
		res.map(async (item: any) => {
			const result = await axios.get(item.url);
			// console.log(result.data);
			setData((state: any) => {
				state = [...state, result.data];
				return state;
			});
		});
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return (
		<>
			<div className="containerHome">
				<Card data={data} loading={loading} />
				<section className="btns">
					<button>Prev.</button>
					<button>Next</button>
				</section>
			</div>
		</>
	);
};

export default Home;
