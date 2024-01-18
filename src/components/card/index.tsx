import React, { useEffect, useState } from 'react';
import pikachu from '../images/pikachu.png';
import ReactCardFlip from 'react-card-flip';

//internal imports
import './styles.scss';

const Card = () => {
	const [isFlipped, setIsFlipped] = useState('');
	const [data, setData] = useState(null);

	const url = 'https://pokeapi.co/api/v2/pokemon/';

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);

				const result = await response.json();
				setData(result);
				console.log(result);
			} catch (error) {
				const errorMessage = (error as Error).message;
				console.error(errorMessage);
			}
		};

		fetchData();
	}, []);

	return data ? (
		<div className="cardContainer">
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
	) : (
		<p>loading . . .</p>
	);
};
export default Card;
