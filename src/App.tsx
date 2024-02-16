import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Search, About, Home } from './components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Navbar />
				<Routes>
					<Route path="/" Component={Home} />
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	);
};

export default App;
