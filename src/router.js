import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MotorcycleDetailsPage from "./pages/MotorcycleDetailsPage";
import SalesMadePage from './pages/SalesMadePage';

function Router() {
	return (
		<Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
			<Route path="/motorcycles" element={<HomePage />} />
			<Route path="/motorcycles/:id" element={<MotorcycleDetailsPage />} />
			<Route path="/sales" element={<SalesMadePage />} />

        </Routes>
	);
}
export default Router;
