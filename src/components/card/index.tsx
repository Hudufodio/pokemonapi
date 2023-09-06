import ReactCardFlip from 'react-card-flip';
import pikachu from '../images/pikachu.png';
import './style.scss';
import { useState } from 'react';
// import PokemonInfo from '../pokemonInfo';

// type Card = {
// 	PokemonInfo: any;
// };

// interface Card {
// 	PokemonInfo: string;
// }

const Card = () => {
	const [isFlipped, setIsFlipped] = useState('');

	return (
		<>
			<div className="card-container">
				<ReactCardFlip isFlipped={isFlipped === 'card1'} flipDirection="horizontal">
					<div className="card" onMouseEnter={() => setIsFlipped('card1')}>
						<img src={pikachu} alt="pokemon image pikachu" />
						<h1>Pikachu</h1>
					</div>
					<div className="card-back" onMouseLeave={() => setIsFlipped('')}>
						<div className="abilities">
							<div className="group">
								<h2 className="static">static</h2>
							</div>
							<div className="group">
								<h2 className="light">lightning-rod</h2>
							</div>
						</div>
						<div className="base-stats">
							<ul>
								<li>hp: 35</li>
								<li>attack: 55</li>
								<li>defence: 40</li>
								<li>special attack: 50</li>
								<li>speed: 90</li>
							</ul>
						</div>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped === 'card2'} flipDirection="horizontal">
					<div className="card" onMouseEnter={() => setIsFlipped('card2')}>
						<img src={pikachu} alt="pokemon image pikachu" />
						<h1>Pikachu</h1>
					</div>
					<div className="card-back" onMouseLeave={() => setIsFlipped('')}>
						<div className="abilities">
							<div className="group">
								<h2 className="static">static</h2>
							</div>
							<div className="group">
								<h2 className="light">lightning-rod</h2>
							</div>
						</div>
						<div className="base-stats">
							<ul>
								<li>hp: 35</li>
								<li>attack: 55</li>
								<li>defence: 40</li>
								<li>special attack: 50</li>
								<li>speed: 90</li>
							</ul>
						</div>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped === 'card3'} flipDirection="horizontal">
					<div className="card" onMouseEnter={() => setIsFlipped('card3')}>
						<img src={pikachu} alt="pokemon image pikachu" />
						<h1>Pikachu</h1>
					</div>
					<div className="card-back" onMouseLeave={() => setIsFlipped('')}>
						<div className="abilities">
							<div className="group">
								<h2 className="static">static</h2>
							</div>
							<div className="group">
								<h2 className="light">lightning-rod</h2>
							</div>
						</div>
						<div className="base-stats">
							<ul>
								<li>hp: 35</li>
								<li>attack: 55</li>
								<li>defence: 40</li>
								<li>special attack: 50</li>
								<li>speed: 90</li>
							</ul>
						</div>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped === 'card4'} flipDirection="horizontal">
					<div className="card" onMouseEnter={() => setIsFlipped('card4')}>
						<img src={pikachu} alt="pokemon image pikachu" />
						<h1>Pikachu</h1>
					</div>
					<div className="card-back" onMouseLeave={() => setIsFlipped('')}>
						<div className="abilities">
							<div className="group">
								<h2 className="static">static</h2>
							</div>
							<div className="group">
								<h2 className="light">lightning-rod</h2>
							</div>
						</div>
						<div className="base-stats">
							<ul>
								<li>hp: 35</li>
								<li>attack: 55</li>
								<li>defence: 40</li>
								<li>special attack: 50</li>
								<li>speed: 90</li>
							</ul>
						</div>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped === 'card5'} flipDirection="horizontal">
					<div className="card" onMouseEnter={() => setIsFlipped('card5')}>
						<img src={pikachu} alt="pokemon image pikachu" />
						<h1>Pikachu</h1>
					</div>
					<div className="card-back" onMouseLeave={() => setIsFlipped('')}>
						<div className="abilities">
							<div className="group">
								<h2 className="static">static</h2>
							</div>
							<div className="group">
								<h2 className="light">lightning-rod</h2>
							</div>
						</div>
						<div className="base-stats">
							<ul>
								<li>hp: 35</li>
								<li>attack: 55</li>
								<li>defence: 40</li>
								<li>special attack: 50</li>
								<li>speed: 90</li>
							</ul>
						</div>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped === 'card6'} flipDirection="horizontal">
					<div className="card" onMouseEnter={() => setIsFlipped('card6')}>
						<img src={pikachu} alt="pokemon image pikachu" />
						<h2>Pikachu</h2>
					</div>
					<div className="card-back" onMouseLeave={() => setIsFlipped('')}>
						<div className="abilities">
							<div className="group">
								<h2 className="static">static</h2>
							</div>
							<div className="group">
								<h2 className="light">lightning-rod</h2>
							</div>
						</div>
						<div className="base-stats">
							<ul>
								<li>hp: 35</li>
								<li>attack: 55</li>
								<li>defence: 40</li>
								<li>special attack: 50</li>
								<li>speed: 90</li>
							</ul>
						</div>
					</div>
				</ReactCardFlip>
				<div className="btns">
					<button>Previous</button>
					<button>Next</button>
				</div>
			</div>
		</>
	);
};

export default Card;
