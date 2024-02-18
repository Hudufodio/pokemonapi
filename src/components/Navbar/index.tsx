import { MdOutlineArrowCircleUp, MdLightbulb } from 'react-icons/md';

//internal imports
import './styles.scss';

interface NavbarProps {
	Home: string;
}

const Navbar = ({}: NavbarProps) => {
	const handleClick = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div className="home">
			<MdLightbulb className="darkMode" />
			<MdOutlineArrowCircleUp className="arrowUp" onClick={handleClick} />
		</div>
	);
};

export default Navbar;
