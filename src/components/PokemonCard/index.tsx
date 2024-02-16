import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
// import { CircularProgress } from '@mui/material';

//internal imports
import pikachu from '../images/pikachu.png';
import './styles.scss';

const PokemonCard = ({ pokemon, isLoading }: any) => {
	const [isFlipped, setIsFlipped] = useState('');
	// console.log(pokemon);

	return (
		<div className="cardContainer">
			<ReactCardFlip isFlipped={isFlipped === 'card1'} flipDirection="horizontal">
				<div className="card" onMouseEnter={() => setIsFlipped('card1')}>
					<img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
					<h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
				</div>
				<div className="cardBack" onMouseLeave={() => setIsFlipped('')}>
					<div className="abilities">
						<div className="group">
							<h2>Static</h2>
						</div>
						<div className="group">
							<h2>Growth</h2>
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
	);
};
export default PokemonCard;
