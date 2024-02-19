import { MdOutlineArrowCircleUp } from 'react-icons/md';

//internal imports
import './styles.scss';
import '../../global.scss';

interface NavbarProps {
	Home: string;
}

const Navbar = ({}: NavbarProps) => {
	const handleClick = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className="home">
			<MdOutlineArrowCircleUp className="arrowUp" onClick={handleClick} />
		</div>
	);
};

export default Navbar;
