import './styles.scss';

const PokeInfo = () => {
	return (
		<>
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
		</>
	);
};

export default PokeInfo;