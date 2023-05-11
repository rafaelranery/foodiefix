import { Router } from './routes';

import { SideBar } from './components';
import { useSetTitle } from './hooks/useSetTitle';

function App() {
	useSetTitle();
	return (
		<>
			<SideBar />
			<main className="max-h-screen fixed flex h-full sm:left-[256px] bg-gray-500">
				<Router />
			</main>
		</>
	);
}

export default App;
