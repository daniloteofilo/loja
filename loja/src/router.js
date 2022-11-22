import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function Router() {
	return (
		<Routes>
            <Route path='/' element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage/>} />
			<Route path="/login" element={<LoginPage/>} />
        </Routes>
	);
}
export default Router;
