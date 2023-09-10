import './style.scss';
import pikachu from '../images/pikachu.png';

const Card = () => {
	return (
		<>
			<div className="card">
				<h2>1</h2>
				<img src={pikachu} alt="" />
				<h2>Pikachu</h2>
			</div>
		</>
	);
};
export default Card;
