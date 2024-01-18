import React, { useEffect } from 'react';
import pikachu from '../images/pikachu.png';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';

//internal imports
import './styles.scss';

const Card = () => {
	const [isFlipped, setIsFlipped] = useState('');

	const url = 'https://pokeapi.co/api/v2/pokemon/';

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = await response.json();
				console.log(data);
			} catch (error) {
				let errorMessage = 'failed to fetch data';
				if (error instanceof Error) {
					errorMessage = error.message;
				}
				console.log(errorMessage);
			}
		};

		fetchData();
	}, []);

	return (
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
	);
};
export default Card;
