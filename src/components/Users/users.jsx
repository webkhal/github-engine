import { Link } from "react-router-dom";
import { useContext } from "react";
import GithubContext from "../../contexts/GitHub/githubContext";

import "./users.css"; // Assuming you have a CSS file for styling

function Users() {
  const { users } = useContext(GithubContext);

  return (
    <div className="flex-container">
      {users.map((user, index) => (
        <div className="profile-card" key={index}>
          <img
            src={user.avatar_url}
            className="profile-image"
            alt={`${user.login}'s profile`}
          />
          <h6 className="profile-name">{user.login}</h6>
          <Link to={`/user/${user.login}`} className="profile-button">
            View Profile
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Users;
