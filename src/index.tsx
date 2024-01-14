import React from 'react';
import ReactDOM from 'react-dom/client';

//internal
import App from './App';

import './global.scss';

const div = document.getElementById('root');
if (div) {
	const root = ReactDOM.createRoot(div);

	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}
