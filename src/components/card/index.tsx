import React, { useEffect, useState } from 'react';
import pikachu from '../images/pikachu.png';
import ReactCardFlip from 'react-card-flip';
import { CircularProgress } from '@mui/material';
// import axios from 'axios';

//internal imports
import './styles.scss';

const Card = () => {
	const [isFlipped, setIsFlipped] = useState('');
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const url = 'https://pokeapi.co/api/v2/pokemon/';

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setData(data.result);
				// console.log(data.result);
				setLoading(false);
			} catch (error) {
				const errorMessage = (error as Error).message;
				console.error(errorMessage);
			}
		};

		fetchData();
	}, []);

	// const getPokemon = async (res: any) => {
	// 	res.map(async (item: any) => {
	// 		const result = await axios.get(item.url);
	// 		// console.log(data);
	// 		setData((state) => {
	// 			state = [...state, result.data];
	// 			return state;
	// 		});
	// 	});
	// };

	return loading ? (
		<CircularProgress />
	) : (
		<>
			{data?.map((item: any) => (
				<div className="cardContainer" key={item.id}>
					<ReactCardFlip isFlipped={isFlipped === 'card1'} flipDirection="horizontal">
						<div className="card" onMouseEnter={() => setIsFlipped('card1')}>
							<img src={pikachu} alt="" />
							<h1>Pikachu</h1>
						</div>
						<div className="cardBack" onMouseLeave={() => setIsFlipped('')}>
							<div className="abilities">
								<div className="group">
									<h2>static</h2>
								</div>
								<div className="group">
									<h2>lighting-rod</h2>
								</div>
							</div>
							<hr style={{ width: '100%', marginTop: -18 }} />
							<div className="stats">
								<h3>hp: 35</h3>
								<h3>attack: 55</h3>
								<h3>defense: 40</h3>
								<h3>special-attack: 50</h3>
								<h3>special-defense: 50</h3>
								<h3>speed: 90</h3>
							</div>
						</div>
					</ReactCardFlip>
				</div>
			))}
		</>
	);
};
export default Card;
