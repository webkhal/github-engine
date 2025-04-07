import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import Loading from "./Loading";
import GithubContext from "../contexts/GitHub/githubContext";

function User() {
	const { loading, user, repos, fetchUser, fetchRepos } = useContext(GithubContext);

	const { uname } = useParams();

	useEffect(() => {
		fetchUser(uname);
		fetchRepos(uname);
	}, []);

	return (
		<>
			{loading && <Loading />}
			{!loading && (
				<div className="flex-container">
					<div className="flex-child-left">
						<img className="profile-head" src={user.avatar_url} alt="" />

						<div className="desc">
							<h1 className="profile-name">{user.name}</h1>
							<br />
							<h3>{user.bio}</h3>
							<br />
							<h3>Followers: {user.followers}</h3>
							<h3>Following: {user.following}</h3>
							<h3>{user.company}</h3>
							<h3>{user.location}</h3>
							<h3><a href={`${user.blog}`} target="_blank" rel="noreferrer">{user.blog}</a></h3>
							<h3><a href={`https://www.twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer">{user.twitter_username}</a></h3>
						</div>
					</div>
					<div className="flex-child-right">
						{repos.map((ele) => {
							return (
								<div className="repo">
									<div className="repo-details">
									<h1>{ele.name}</h1>
									<h4> {ele.description} </h4>
									<p className="repo-visibility"> {ele.visibility} </p>
									<h4> {ele.language} </h4>
									</div>
									<button className="repo-link">
										<a href={ele.html_url}>Browse Repo</a>
									</button>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
}

export default User;
