import { useState } from 'react';

import './styles.scss';

const Hero = () => {
	const [search, setSearch] = useState('');

	const handleSearch = (e: any) => {
		setSearch(e.target.value);
	};

	return (
		<div className="searchContainer">
			<input
				type="text"
				placeholder="search character"
				value={search}
				onChange={handleSearch}
				className="searchInput"
			/>
		</div>
	);
};

export default Hero;
