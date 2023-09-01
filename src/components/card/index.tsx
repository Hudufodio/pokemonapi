import pikachu from '../images/pikachu.png';
import './style.scss';
const Card = () => {
	return (
		<>
			<div className="card-container">
				<div className="card">
					<img src={pikachu} alt="pokemon image pikachu" />
					<h2>Pikachu</h2>
				</div>
				<div className="card">
					<img src={pikachu} alt="pokemon image pikachu" />
					<h2>Pikachu</h2>
				</div>
				<div className="card">
					<img src={pikachu} alt="pokemon image pikachu" />
					<h2>Pikachu</h2>
				</div>
				<div className="card">
					<img src={pikachu} alt="pokemon image pikachu" />
					<h2>Pikachu</h2>
				</div>
				<div className="card">
					<img src={pikachu} alt="pokemon image pikachu" />
					<h2>Pikachu</h2>
				</div>
				<div className="card">
					<img src={pikachu} alt="pokemon image pikachu" />
					<h2>Pikachu</h2>
				</div>
				<div className="card">
					<img src={pikachu} alt="pokemon image pikachu" />
					<h2>Pikachu</h2>
				</div>
				<div className="card">
					<img src={pikachu} alt="pokemon image pikachu" />
					<h2>Pikachu</h2>
				</div>
			</div>
		</>
	);
};

export default Card;
