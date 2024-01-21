import { useState, useEffect } from 'react';
import Card from '../Card';
import './styles.scss';
import { CircularProgress } from '@mui/material';

const Home = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const { results }: any = data;

	const url = 'https://pokeapi.co/api/v2/pokemon/';

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setData(data);
				setLoading(false);
			} catch (error) {
				const errorMessage = (error as Error).message;
				console.error(errorMessage);
			}
		};

		fetchData();
	}, []);

	return loading ? (
		<CircularProgress />
	) : (
		<div className="containerHome">
			<Card results={results} />
		</div>
	);
};

export default Home;
