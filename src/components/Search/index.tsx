import { useState } from 'react';

//internal imports
import './styles.scss';

interface SearchProps {
	search: string;
}

const Search = ({}: SearchProps) => {
	const [searchText, setSearchText] = useState('');

	const handleSearch = (e: any) => {
		setSearchText(e.target.value);
	};

	return (
		<div className="searchContainer">
			<input
				type="text"
				placeholder="search your favorite character Pikachu, Mew etc"
				value={searchText}
				onChange={handleSearch}
				className="searchInput"
				autoFocus
			/>
		</div>
	);
};

export default Search;
