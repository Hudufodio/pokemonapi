import { useState } from 'react';
import pikachu from '../images/pikachu.png';
import ReactCardFlip from 'react-card-flip';

//internal imports
import './styles.scss';

const Card = ({ results }: any) => {
	const [isFlipped, setIsFlipped] = useState('');
	const { id } = results;

	return (
		<div className="cardContainer" key={id}>
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
	);
};
export default Card;
