import './styles.scss';

const PokeInfo = ({ data }: any) => {
	return (
		<>
			{!data ? (
				'No results'
			) : (
				<>
					<div className="abilities">
						{data?.abilities?.map((item: any) => {
							return (
								<>
									<div className="group">
										<h2>{item.name}</h2>
									</div>
								</>
							);
						})}
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
			)}
		</>
	);
};

export default PokeInfo;
