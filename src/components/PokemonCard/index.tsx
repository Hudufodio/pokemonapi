import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
// import { CircularProgress } from '@mui/material';

//internal imports
import pikachu from '../images/pikachu.png';
import './styles.scss';
import axios from 'axios';

const api = 'https://pokeapi.co/api/v2/pokemon/';

const PokemonCard = ({ name }: any) => {
	const [isFlipped, setIsFlipped] = useState('');
	// const [pokeDex, setPokeDex] = useState(null);

	// const pokemonData = async () => {
	// 	try {
	// 		const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
	// 		setPokeDex(response.data);
	// 	} catch (error) {}
	// };

	return (
		<div className="cardContainer">
			<ReactCardFlip isFlipped={isFlipped === 'card'} flipDirection="horizontal">
				<div className="card" onMouseEnter={() => setIsFlipped('card')}>
					<img src={pikachu} alt="" />
					<h1>{name}</h1>
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
