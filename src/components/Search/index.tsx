import { useState } from 'react';

import './styles.scss';

const Search = () => {
	const [search, setSearch] = useState('');

	const handleSearch = (e: any) => {
		setSearch(e.target.value);
	};

	return (
		<div className="searchContainer">
			<input
				type="text"
				placeholder="search your favorite character Pikachu, Mew etc"
				value={search}
				onChange={handleSearch}
				className="searchInput"
				autoFocus
			/>
		</div>
	);
};

export default Search;
