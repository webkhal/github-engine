import React, { useReducer } from "react";
import reducer from "./githubReducer";
import GithubContext from "./githubContext";
import axios from "axios";

function GithubState(props) {
	const initialState = {
		users: [],
		loading: true,
		alert: null,
		user: {},
		repos: [],
	};

	const token = process.env.REACT_APP_PASSWORD;
	const username = process.env.REACT_APP_USERNAME;

	const [state, dispatch] = useReducer(reducer, initialState);

	function fetchData() {
		dispatch({ type: "SET_LOADING" });
		axios
			.get(`https://api.github.com/users`, {
				auth: {
					username: username,
					password: token,
				},
			})
			.then((response) => {
				console.log("-------fetch Data function----------");
				console.log(response.data);
				dispatch({ type: "SET_USERS", payload: response.data });
			})
			.catch((err) => console.log(err));
	}

	function showAlert(alertObj) {
		dispatch({ type: "SET_ALERT", payload: alertObj });
		setTimeout(() => {
			dispatch({ type: "SET_ALERT", payload: null });
		}, 1500);
	}

	async function searchUsers(username) {
		try {
			if (!username || !username.trim()) {
				showAlert({ type: "danger", msg: "Please Enter Username" });
				return;
			}
			dispatch({ type: "SET_USERS", payload: [] });
			dispatch({ type: "SET_LOADING" });
			const res = await axios.get(
				`https://api.github.com/search/users?q=${username}`,
				{
					auth: {
						username: username,
						password: token,
					},
				}
			);
			dispatch({ type: "SET_USERS", payload: res.data.items });
		} catch (error) {
			console.log(error);
		}
	}

	function clearUsers(e) {
		e.preventDefault();
		dispatch({ type: "SET_USERS", payload: [] });
	}

	function fetchUser(username) {
		dispatch({ type: "SET_USER", payload: {} });
		dispatch({ type: "SET_LOADING" });
		axios
			.get(`https://api.github.com/users/${username}`, {
				auth: {
					username: username,
					password: token,
				},
			})
			.then((response) => {
				console.log("----Individual Data ----");
				console.log(response.data);
				dispatch({ type: "SET_USER", payload: response.data });
			})
			.catch((err) => console.log(err));
	}

	function fetchRepos(username) {
		dispatch({ type: "SET_REPOS", payload: [] });

		dispatch({ type: "SET_LOADING" });

		axios
			.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=desc`, {
				auth: {
					username: username,
					password: token,
				},
			})
			.then((response) => {
				console.log("----Repo Data ----");
				console.log(response.data);
				dispatch({ type: "SET_REPOS", payload: response.data });

			})
			.catch((err) => console.log(err));
	}

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				alert: state.alert,
				user:state.user,
				repos:state.repos,
				fetchData,
				searchUsers,
				clearUsers,
				fetchUser,
				fetchRepos
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
}

export default GithubState;
