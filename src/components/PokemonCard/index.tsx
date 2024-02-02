import { useState } from 'react';
import pikachu from '../images/pikachu.png';
import ReactCardFlip from 'react-card-flip';
import { CircularProgress } from '@mui/material';

//internal imports
import './styles.scss';
import PokeInfo from '../PokeInfo';

interface PokemonCardProps {
	name: any;
	loading: any;
}

const PokemonCard = ({ name, loading }: PokemonCardProps) => {
	const [isFlipped, setIsFlipped] = useState('');

	return (
		<>
			{' '}
			{loading ? (
				<CircularProgress />
			) : (
				name.map((pokemon: any) => {
					return (
						<div className="cardContainer" key={pokemon.id}>
							<ReactCardFlip isFlipped={isFlipped === pokemon.id} flipDirection="horizontal">
								<div className="card" onMouseEnter={() => setIsFlipped(pokemon.id)}>
									<img src={pikachu} alt="" />
									<h1>{pokemon.name}</h1>
								</div>
								<div className="cardBack" onMouseLeave={() => setIsFlipped('')}>
									<PokeInfo />
								</div>
							</ReactCardFlip>
						</div>
					);
				})
			)}
		</>
	);
};
export default PokemonCard;
