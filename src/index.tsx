import ReactDOM from 'react-dom/client';

//internal
import App from './App';

import './global.scss';

const div = document.getElementById('root');
if (div) {
	const root = ReactDOM.createRoot(div);

	root.render(<App />);
}
