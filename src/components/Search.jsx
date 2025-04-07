import { useState, useContext } from "react";
import Alert from "./Alert";

import GithubContext from "../contexts/GitHub/githubContext";

function Search() {
	const { alert, searchUsers, clearUsers } = useContext(GithubContext);

	const [username, setUsername] = useState("");

	function onChangeHandler(e) {
		setUsername(e.target.value);
	}

	function onSubmitHandler(e) {
		e.preventDefault(); //to prevent refresh the page
		searchUsers(username);
		setUsername("");
	}

	return (
		<div className="header">
			<h1>Github Search Engine</h1>
			<Alert alert={alert} />
			<form>
				<input
					type="text"
					name="username"
					autoComplete="off"
					placeholder="Enter username to Search"
					onChange={onChangeHandler}
					value={username}
				/>
				<br />
				<button
					className="submit"
					type="submit"
					onClick={(e) => onSubmitHandler(e)}
				>
					Search
				</button>
				<button className="clear" onClick={clearUsers}>
					Clear
				</button>
			</form>
			<hr />
		</div>
	);
}

export default Search;
