import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function Router() {
	return (
		<Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
			<Route path="/motorcycles" element={<HomePage />} />
			<Route path="/motorcycles/:id" element={<HomePage />} />
        </Routes>
	);
}
export default Router;
