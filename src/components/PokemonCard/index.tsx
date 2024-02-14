import pikachu from '../images/pikachu.png';
import { CircularProgress } from '@mui/material';

//internal imports
import './styles.scss';

const PokemonCard = ({ pokemon }: any) => {
	console.log(pokemon);
	return (
		<>
			<div className="cardContainer">
				{pokemon ? (
					pokemon.map((item: any) => (
						<div className="card" key={pokemon.id}>
							<h1>{item.name}</h1>
							<img src={pikachu} alt="" />
						</div>
					))
				) : (
					<>
						<CircularProgress />
					</>
				)}
			</div>
		</>
	);
};
export default PokemonCard;
