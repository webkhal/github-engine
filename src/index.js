import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GithubState from "./contexts/GitHub/GithubState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<GithubState>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</GithubState>
);
