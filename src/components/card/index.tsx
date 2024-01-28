import { useState } from 'react';
// import pikachu from '../images/pikachu.png';
import ReactCardFlip from 'react-card-flip';
import { CircularProgress } from '@mui/material';

//internal imports
import './styles.scss';

const Card = ({ data, loading }: any) => {
	const [isFlipped, setIsFlipped] = useState('');

	return (
		<>
			{loading ? (
				<CircularProgress />
			) : (
				data.map((item: any) => {
					return (
						<>
							<div className="cardContainer" key={item.id}>
								<ReactCardFlip isFlipped={isFlipped === item.id} flipDirection="horizontal">
									<div className="card" onMouseEnter={() => setIsFlipped(item.id)}>
										<img src={item.sprites.front_default} alt="" />
										<h1>{item.name}</h1>
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
						</>
					);
				})
			)}
		</>
	);
};
export default Card;
