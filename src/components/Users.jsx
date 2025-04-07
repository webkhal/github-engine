import { Link } from "react-router-dom";
import { useContext } from "react";
import GithubContext from "../contexts/GitHub/githubContext";

function Users() {
	const { users } = useContext(GithubContext);

	return (
		<div className="flex-container">
			{users.map((ele, i) => {
				return (
					<>
						<div className="profile" key={i}>
							<img
								src={ele.avatar_url}
								className="profile-image"
								alt="profile"
							/>
							<h6>{ele.login}</h6>
							<button>
								{/* <a href={ele.html_url} target="_blank"  rel="noreferrer">Click</a> */}
								<Link to={`/user/${ele.login}`}>Profile</Link>
							</button>
						</div>
					</>
				);
			})}
		</div>
	);
}

export default Users;
