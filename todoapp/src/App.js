import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FrontPage from "./component/FrontPage.js";
const Navbar = lazy(() => import("./component/Navbar.js"));

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Suspense fallback="Loading...">
				<Routes>
					<Route path="/" element={<FrontPage />} />
					<Route index element={<FrontPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
