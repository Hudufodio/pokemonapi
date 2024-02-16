import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Home } from './components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Navbar Home={''} />
				<Routes>
					<Route path="/" element={<Home pokemonList={[]} isLoading={true} />} />
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	);
};

export default App;
