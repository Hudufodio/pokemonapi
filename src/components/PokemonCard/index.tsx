import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
// import { CircularProgress } from '@mui/material';

//internal imports
import './styles.scss';
const PokemonCard = ({ pokemon, isLoading }: any) => {
	const [isFlipped, setIsFlipped] = useState('');

	const onMouseEnter = () => {
		setIsFlipped('card1');
	};

	const onMouseLeave = () => {
		setIsFlipped('');
	};

	return (
		<div>
			<div className="cardContainer">
				<ReactCardFlip isFlipped={isFlipped === 'card1'} flipDirection="horizontal">
					<div className="card" onMouseEnter={onMouseEnter} key={pokemon.id}>
						<img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
						<h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
						<h4>weight:&nbsp;{pokemon.weight}</h4>
					</div>
					<div className="cardBack" onMouseLeave={onMouseLeave}>
						<div className="abilities">
							{pokemon.abilities.map((poke: any, id: any) => {
								const poke_ability = poke.ability.name;
								return (
									<div className="group" key={id}>
										<h2>{poke_ability}</h2>
									</div>
								);
							})}
						</div>
						<hr style={{ width: '100%', marginTop: -18 }} />
						<div className="stats">
							{pokemon.stats.map((poke: any, id: any) => {
								const statName = poke.stat.name;
								const statValue = poke.base_stat;
								return (
									<h3 key={id}>
										{statName}:&nbsp;{statValue}
									</h3>
								);
							})}
						</div>
					</div>
				</ReactCardFlip>
			</div>
		</div>
	);
};
export default PokemonCard;
