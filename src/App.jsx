import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";
import GithubContext from "./contexts/GitHub/githubContext";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import User from "./components/User";

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