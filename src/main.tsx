import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

/* react router dom */
import { BrowserRouter } from 'react-router-dom';
/* redux */
import { Provider } from 'react-redux';

import { store } from './store/store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
