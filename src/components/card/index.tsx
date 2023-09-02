import ReactCardFlip from 'react-card-flip';
import pikachu from '../images/pikachu.png';
import './style.scss';
import { ReactNode, useState } from 'react';

type Card = {
	children: [ReactNode, ReactNode];
};

const Card = () => {
	const [isFlipped, setIsFlipped] = useState('');

	return (
		<>
			<div className="card-container">
				<ReactCardFlip isFlipped={isFlipped === 'card'} flipDirection="horizontal">
					<div className="card" onMouseEnter={() => setIsFlipped('card')}>
						<img src={pikachu} alt="pokemon image pikachu" />
						<h2>Pikachu</h2>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped === 'card'} flipDirection="horizontal">
					<div className="card" onMouseEnter={() => setIsFlipped('card')}>
						<img src={pikachu} alt="pokemon image pikachu" />
						<h2>Pikachu</h2>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped === 'card'} flipDirection="horizontal">
					<div className="card" onMouseEnter={() => setIsFlipped('card')}>
						<img src={pikachu} alt="pokemon image pikachu" />
						<h2>Pikachu</h2>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped === 'card'} flipDirection="horizontal">
					<div className="card" onMouseEnter={() => setIsFlipped('card')}>
						<img src={pikachu} alt="pokemon image pikachu" />
						<h2>Pikachu</h2>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped === 'card'} flipDirection="horizontal">
					<div className="card" onMouseEnter={() => setIsFlipped('card')}>
						<img src={pikachu} alt="pokemon image pikachu" />
						<h2>Pikachu</h2>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped === 'card'} flipDirection="horizontal">
					<div className="card" onMouseEnter={() => setIsFlipped('card')}>
						<img src={pikachu} alt="pokemon image pikachu" />
						<h2>Pikachu</h2>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped === 'card'} flipDirection="horizontal">
					<div className="card" onMouseEnter={() => setIsFlipped('card')}>
						<img src={pikachu} alt="pokemon image pikachu" />
						<h2>Pikachu</h2>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped === 'card'} flipDirection="horizontal">
					<div className="card" onMouseEnter={() => setIsFlipped('card')}>
						<img src={pikachu} alt="pokemon image pikachu" />
						<h2>Pikachu</h2>
					</div>
				</ReactCardFlip>
			</div>
		</>
	);
};

export default Card;
