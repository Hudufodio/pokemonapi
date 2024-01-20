import Card from '../Card';
import './styles.scss';

// type Props = {
// 	data?: string;
// };

const Home = ({ data, loading }: any) => {
	return (
		<div className="containerHome">
			<Card data={data} loading={loading} />
		</div>
	);
};

export default Home;
