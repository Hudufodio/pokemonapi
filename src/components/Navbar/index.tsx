import './styles.scss';

interface NavbarProps {
	Home: string;
}

const Navbar = ({}: NavbarProps) => {
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
