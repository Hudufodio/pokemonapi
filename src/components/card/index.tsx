import { useState } from 'react';
// import pikachu from '../images/pikachu.png';
import ReactCardFlip from 'react-card-flip';
import { CircularProgress } from '@mui/material';

//internal imports
import './styles.scss';
import PokeInfo from '../PokeInfo';

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
										<PokeInfo />
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
