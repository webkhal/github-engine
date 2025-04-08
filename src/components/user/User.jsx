import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import Loading from "../Loading";
import GithubContext from "../../contexts/GitHub/githubContext";

import "./user.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import Font Awesome
import {
  faUsers,
  faBuilding,
  faMapMarkerAlt,
  faGlobe,
  faCode,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

function User() {
  const { loading, user, repos, fetchUser, fetchRepos } = useContext(GithubContext);
  const { uname } = useParams();

  useEffect(() => {
    fetchUser(uname);
    fetchRepos(uname);
  }, [uname]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="user-container">
          <div className="profile-card">
            <img
              className="profile-image"
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
            />
            <div className="profile-details">
              <h1 className="profile-name">{user.name || user.login}</h1>
              {user.bio && <p className="profile-bio">{user.bio}</p>}
              <ul className="profile-stats">
                <li>
                  <FontAwesomeIcon icon={faUsers} className="stat-icon" /> Followers:{" "}
                  {user.followers}
                </li>
                <li>
                  <FontAwesomeIcon icon={faUsers} className="stat-icon" /> Following:{" "}
                  {user.following}
                </li>
                {user.company && (
                  <li>
                    <FontAwesomeIcon icon={faBuilding} className="stat-icon" /> Company:{" "}
                    {user.company}
                  </li>
                )}
                {user.location && (
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="stat-icon" /> Location:{" "}
                    {user.location}
                  </li>
                )}
                {user.blog && (
                  <li>
                    <FontAwesomeIcon icon={faGlobe} className="stat-icon" /> Blog:{" "}
                    <a href={user.blog} target="_blank" rel="noreferrer">
                      {user.blog}
                    </a>
                  </li>
                )}
                {user.twitter_username && (
                  <li>
                    <FontAwesomeIcon icon={faTwitter} className="stat-icon" /> Twitter:{" "}
                    <a
                      href={`https://www.twitter.com/${user.twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @{user.twitter_username}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="repos-container">
            <h2 className="repos-title">Popular repositories</h2>
            {repos.map((repo, index) => (
              <div className="repo-card" key={index}>
                <div className="repo-details">
                  <h3 className="repo-name">
                    <FontAwesomeIcon icon={faCode} className="repo-icon" /> {repo.name}
                  </h3>
                  {repo.description && <p className="repo-desc">{repo.description}</p>}
                  <div className="repo-meta">
                    {repo.language && (
                      <span className="repo-language">
                        <FontAwesomeIcon icon={faBook} className="language-icon" />{" "}
                        {repo.language}
                      </span>
                    )}
                  </div>
                </div>
                <span className="repo-visibility">Public</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default User;
  