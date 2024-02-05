import pikachu from '../images/pikachu.png';
import { CircularProgress } from '@mui/material';

//internal imports
import './styles.scss';

interface PokemonCardProps {
	name: any;
	loading: any;
}

const PokemonCard = ({ name, loading }: PokemonCardProps) => {
	return (
		<>
			{' '}
			{loading ? (
				<CircularProgress />
			) : (
				name.map((pokemon: any) => {
					return (
						<div className="cardContainer" key={pokemon.id}>
							<div className="card">
								<img src={pikachu} alt="" />
								<h1>{pokemon.name}</h1>
							</div>
						</div>
					);
				})
			)}
		</>
	);
};
export default PokemonCard;
