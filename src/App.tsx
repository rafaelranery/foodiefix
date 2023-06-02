import { Router } from './routes';

import { SideBar } from './components';
import { useSetTitle } from './hooks/useSetTitle';

function App() {
	useSetTitle();
	return (
		<>
			<SideBar />
			<main className="max-h-screen fixed flex max-w-screen w-full h-full sm:pl-[256px] bg-slate-100 dark:bg-slate-400">
				<Router />
			</main>
		</>
	);
}

export default App;
