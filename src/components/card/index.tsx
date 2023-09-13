import './style.scss';
import pikachu from '../images/pikachu.png';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';

const Card = () => {
	const [isFlipped, setIsFlipped] = useState('');

	return (
		<div className="card-container">
			<ReactCardFlip isFlipped={isFlipped === 'card1'} flipDirection="horizontal">
				<div className="card" onMouseEnter={() => setIsFlipped('card1')}>
					<img src={pikachu} alt="" />
					<h1>Pikachu</h1>
				</div>
				<div className="card-back" onMouseLeave={() => setIsFlipped('')}>
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
			<ReactCardFlip isFlipped={isFlipped === 'card2'} flipDirection="horizontal">
				<div className="card" onMouseEnter={() => setIsFlipped('card2')}>
					<img src={pikachu} alt="" />
					<h1>Pikachu</h1>
				</div>
				<div className="card-back" onMouseLeave={() => setIsFlipped('')}>
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
			<ReactCardFlip isFlipped={isFlipped === 'card3'} flipDirection="horizontal">
				<div className="card" onMouseEnter={() => setIsFlipped('card3')}>
					<img src={pikachu} alt="" />
					<h1>Pikachu</h1>
				</div>
				<div className="card-back" onMouseLeave={() => setIsFlipped('')}>
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
			<ReactCardFlip isFlipped={isFlipped === 'card4'} flipDirection="horizontal">
				<div className="card" onMouseEnter={() => setIsFlipped('card4')}>
					<img src={pikachu} alt="" />
					<h1>Pikachu</h1>
				</div>
				<div className="card-back" onMouseLeave={() => setIsFlipped('')}>
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
			<ReactCardFlip isFlipped={isFlipped === 'card5'} flipDirection="horizontal">
				<div className="card" onMouseEnter={() => setIsFlipped('card5')}>
					<img src={pikachu} alt="" />
					<h1>Pikachu</h1>
				</div>
				<div className="card-back" onMouseLeave={() => setIsFlipped('')}>
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
			<ReactCardFlip isFlipped={isFlipped === 'card6'} flipDirection="horizontal">
				<div className="card" onMouseEnter={() => setIsFlipped('card6')}>
					<img src={pikachu} alt="" />
					<h1>Pikachu</h1>
				</div>
				<div className="card-back" onMouseLeave={() => setIsFlipped('')}>
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
			<div className="btns">
				<button>Previous</button>
				<button>Next</button>
			</div>
		</div>
	);
};
export default Card;
