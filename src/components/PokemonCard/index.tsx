import pikachu from '../images/pikachu.png';
import { CircularProgress } from '@mui/material';

//internal imports
import './styles.scss';

const PokemonCard = ({ pokemonName }: any) => {
	// console.log(pokemon);
	return (
		<>
			<div className="cardContainer">
				{pokemonName ? (
					pokemonName.map((pokemon: any) => {
						return (
							<div className="card" key={pokemon.id}>
								<img src={pikachu} alt="" />
								<h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
							</div>
						);
					})
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
