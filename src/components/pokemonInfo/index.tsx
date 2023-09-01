const PokemonInfo = () => {
	return (
		<>
			<h1>pikachu</h1>
			<img
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
				alt=""
			/>
			<div className="abilities">
				<div className="group">
					<h2>static</h2>
				</div>
				<div className="group">
					<h2>lightning-rod</h2>
				</div>
			</div>
			<div className="base-stats">
				<h3>hp:35</h3>
				<h3>attack:55</h3>
				<h3>defence:40</h3>
				<h3>special attack:50</h3>
				<h3>speed:90</h3>
			</div>
		</>
	);
};

export default PokemonInfo;
