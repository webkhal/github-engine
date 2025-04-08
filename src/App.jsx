import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import GithubContext from "./contexts/GitHub/githubContext";


import "primeflex/primeflex.css";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import User from "./components/user/User";

function App() {
	const { fetchData } = useContext(GithubContext);

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/user/:uname" element={<User />} />
				<Route path="/*" element={<h1>404 Error</h1>} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;