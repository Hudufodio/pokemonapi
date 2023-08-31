import pikachu from '../images/pikachu.png';
const Card = () => {
	return (
		<>
			<div className="card">
				<h1>1</h1>
				<img src={pikachu} alt="pokemon image pikachu" />
				<h2>Pikachu</h2>
			</div>
		</>
	);
};

export default Card;
