import { Routes, Route } from 'react-router-dom';

import { AboutUs, Home, ScheduleApp, Veggie } from './pages';

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/aboutus" element={<AboutUs />} />
			<Route path="/v" element={<Veggie />} />
			<Route path="/schedule" element={<ScheduleApp />} />
		</Routes>
	);
};
