import pikachu from '../images/pikachu.png';
import { CircularProgress } from '@mui/material';
// import { getPokemon } from '../Home';

//internal imports
import './styles.scss';

interface PokemonCardProps {
	name: any;
	loading: any;
	params: any;
}

const PokemonCard = ({ pokemonObject }: any) => {
	// console.log(pokemonObject);
	return (
		<>
			{pokemonObject?.length > 0 ? (
				<div className="cardContainer">
					{pokemonObject.map((pokemon: any) => {
						return (
							<div className="card" key={pokemon.id}>
								<img src={pikachu} alt="" />
								<h1>{pokemon.name}</h1>
							</div>
						);
					})}
				</div>
			) : (
				<div>
					<CircularProgress />
				</div>
			)}
		</>
	);
};
export default PokemonCard;
