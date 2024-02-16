import { Link } from 'react-router-dom';

import './styles.scss';

const Navbar = () => {
	const handleClick = () => {
		window.scrollTo(0, 0);
	};
	return (
		<button className="home" onClick={handleClick}>
			Home
		</button>
	);
};

export default Navbar;
