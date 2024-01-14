import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, Card, About } from './components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Navbar />
				<Card />
				<Hero />
				<Routes>
					<Route path="/about" Component={About} />
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	);
};

export default App;
